import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/FormatPrice';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
  const { cartProducts, clearCart } = useCart();
  const deliveryTax = 500;
  const navigate = useNavigate();

  const finalPrice = (cartProducts || []).reduce((acc, current) => {
    return current.price * current.quantity + acc;
  }, 0);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('create-payment-intent', { products });

      navigate('/checkout', { state: data });
    } catch (err) {
      toast.error('Erro Tente Novamente', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="tittle">Resumo do Pedido </h2>
          <p className="items">Items</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>
          <p className="delevery-tax">Taxa de Entrega</p>
          <p className="delevery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pediso</Button>
    </div>
  );
}
