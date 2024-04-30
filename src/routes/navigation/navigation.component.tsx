import { Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { signOutUser } from '../../utils/firebase.utils.js';
import { userContext } from '../../contexts/user.context';
import { cartContext } from '../../contexts/cart.context.js';
import CartIcon from '../../components/cart-icon/cart-icon.component.js';
import CrwnLogo from '../../assets/crown.svg?react';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.js';

import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  //cart context
  const { isCartOpen } = useContext(cartContext);

  //user context
  const { currentUser } = useContext(userContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
