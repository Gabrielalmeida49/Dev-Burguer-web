import PropTypes from 'prop-types';

import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';

const AppProvader = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
AppProvader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvader;
