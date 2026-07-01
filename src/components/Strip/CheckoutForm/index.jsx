import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import './styles.css';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou Elements com falha, tente novamente');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);

      // Se houver um client_secret no erro, enviamos para a página de conclusão
      // para exibir a tabela de erro com o botão "Tente novamente"
      if (error.payment_intent?.client_secret) {
        navigate(
          `/complete?payment_intent_client_secret=${error.payment_intent.client_secret}`,
        );
      }
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        });

        const { status } = await api.post(
          '/orders',
          { products },
          {
            validateStatus: () => true,
          },
        );
        if (status === 200 || status === 201) {
          setTimeout(() => {
            clearCart();
            navigate(
              `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 3000);

          toast.success('Pedido Realizado com Sucesso');
        } else if (status === 409 || status === 400) {
          toast.error('Falha ao Realizar seu Pedido');
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error('Falha no sistema! Tente novamente');
      }
    } else if (paymentIntent) {
      // Caso caia em qualquer outro status (como processing), redireciona com segurança
      navigate(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spiner"></div>
            ) : (
              'Pagar Agora'
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>

      <div id="dpm-annotation">
        <p>
          Os métodos de pagamentos são disponibilizados de acordo com a sua
          região.&nbsp;
          <a
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
          >
            Ver métodos de pagamento.
          </a>
        </p>
      </div>
    </div>
  );
}
