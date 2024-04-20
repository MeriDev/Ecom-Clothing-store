import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import './navigation.styles.scss';

import { signOutUser } from '../../utils/firebase.utils.js';
import { userContext } from '../../contexts/user.context';
import { cartContext } from '../../contexts/cart.context.js';
import CartIcon from '../../components/cart-icon/cart-icon.component.js';
import CrwnLogo from '../../assets/crown.svg?react';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.js';

const Navigation = () => {
  //cart context
  const { isCartOpen, setisCartOpen } = useContext(cartContext);

  //user context
  const { currentUser } = useContext(userContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
