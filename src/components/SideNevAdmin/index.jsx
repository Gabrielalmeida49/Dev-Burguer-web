import { useResolvedPath } from 'react-router-dom';

import { SignOutIcon } from '@phosphor-icons/react';

import Logo from '../../assets/logo-login.svg';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, NavLinkContainer, NavLink, Footer } from './styles';

export function SideNevAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={Logo} alt="logo-nev-devburguer" />

      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isSctive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOutIcon />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
