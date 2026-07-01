import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useStripe } from '@stripe/react-stripe-js';

import '../../components/Strip/CheckoutForm/styles.css';

export function CompletePayment() {
  const stripe = useStripe();
  const [searchParams] = useSearchParams();

  const clientSecretUrl = searchParams.get('payment_intent_client_secret');

  const [paymentId, setPaymentId] = useState('');
  const [paymentStatusText, setPaymentStatusText] = useState('');

  const [status, setStatus] = useState(() => {
    if (!clientSecretUrl) return 'error';
    if (!stripe) return 'success';
    return 'loading';
  });

  const [message, setMessage] = useState(() => {
    if (!clientSecretUrl)
      return 'Não foi possível encontrar as informações do pagamento.';
    if (!stripe) return 'Pagamento Efetuado com Sucesso';
    return 'Verificando status do seu pagamento...';
  });

  useEffect(() => {
    if (!stripe || !clientSecretUrl) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecretUrl)
      .then(({ paymentIntent }) => {
        if (!paymentIntent) {
          setStatus('error');
          setMessage('Pagamento não encontrado.');
          return;
        }

        setPaymentId(paymentIntent.id);
        setPaymentStatusText(paymentIntent.status);

        switch (paymentIntent.status) {
          case 'succeeded':
            setStatus('success');
            setMessage('Pagamento Efetuado com Sucesso');
            toast.success('Pagamento confirmado!');
            break;
          case 'processing':
            setStatus('processing');
            setMessage(
              'Seu pagamento está sendo processado. Avisaremos quando for aprovado.',
            );
            break;
          case 'requires_payment_method':
            setStatus('error');
            setMessage('O pagamento não foi autorizado.');
            toast.error('Falha no pagamento.');
            break;
          default:
            setStatus('error');
            setMessage('Algo deu errado. Tente novamente mais tarde.');
            break;
        }
      })
      .catch(() => {
        setStatus('error');
        setMessage('Erro ao consultar o status do pagamento.');
      });
  }, [stripe, clientSecretUrl]);

  if (status === 'loading') {
    return (
      <div className="container">
        <div className="spinner" />
        <p
          style={{
            marginTop: '20px',
            color: '#697386',
            fontFamily: 'sans-serif',
          }}
        >
          Verificando status do seu pagamento...
        </p>
      </div>
    );
  }

  const getIconStyles = () => {
    if (status === 'success') {
      return { backgroundColor: '#24b47e', color: '#ffffff' }; // Verde sólido com check branco
    }
    if (status === 'error') {
      return { backgroundColor: '#fce8e6', color: '#c5221f' };
    }
    return { backgroundColor: '#fef7e0', color: '#b06000' };
  };

  return (
    <div className="container-complete">
      <div id="payment-status">
        <div id="status-icon" style={getIconStyles()}>
          {status === 'success' && '✓'}
          {status === 'error' && '✕'}
          {status === 'processing' && '⏳'}
        </div>

        <h2
          style={{
            color: '#353A44',
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            fontSize: '24px',
          }}
        >
          {message}
        </h2>

        {status === 'success' && paymentId && (
          <div id="details-table" style={{ marginTop: '5px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                color: '#353A44',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              <tbody>
                <tr style={{ height: '35px' }}>
                  <td
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'left',
                      paddingRight: '10px',
                    }}
                  >
                    id
                  </td>
                  <td
                    style={{
                      textAlign: 'right',
                      color: '#697386',
                      wordBreak: 'break-all',
                    }}
                  >
                    {paymentId}
                  </td>
                </tr>
                <tr style={{ height: '35px' }}>
                  <td style={{ fontWeight: 'bold', textAlign: 'left' }}>
                    status
                  </td>
                  <td style={{ textAlign: 'right', color: '#697386' }}>
                    {paymentStatusText}
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <a
                href={`https://dashboard.stripe.com/${paymentId}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0055de',
                  fontSize: '15px',
                  fontWeight: '600',
                }}
              >
                Ver detalhes ↗
              </a>
            </div>
          </div>
        )}

        <Link
          to={status === 'success' ? '/' : '/checkout'}
          className="button-return"
        >
          {status === 'success' ? 'Voltar para a Loja' : 'Tente novamente'}
        </Link>
      </div>
    </div>
  );
}
