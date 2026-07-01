import Cart from '../../assets/cart.svg';
import { ContainerButton } from './styles';

export function CartButton({ ...props }) {
  return (
    <div>
      <ContainerButton {...props}>
        <img src={Cart} alt="carrinho-de-compras" />
      </ContainerButton>
    </div>
  );
}
