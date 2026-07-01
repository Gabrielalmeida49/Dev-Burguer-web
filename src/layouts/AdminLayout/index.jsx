import { Outlet, Navigate } from 'react-router-dom';

import { SideNevAdmin } from '../../components/SideNevAdmin';
import { Container } from './styles';

export function AdminLayout() {
  const { admin: isAdmin } = JSON.parse(
    localStorage.getItem('devburguer:userData'),
  );

  return isAdmin ? (
    <Container>
      <SideNevAdmin />
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  ) : (
    <Navigate to="/login" />
  );
}
