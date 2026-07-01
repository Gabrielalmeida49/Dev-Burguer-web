import Logo from '../../assets/logo-login.svg';
import { CartItens, CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburguer" />
      </Banner>
      <Title>Chechout - Pedido</Title>
      <Content>
        <CartItens />
        <CartResume />
      </Content>
    </Container>
  );
}
