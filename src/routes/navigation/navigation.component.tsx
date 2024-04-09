import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { signOutUser } from '../../utils/firebase.utils.js';
import { userContext } from '../../contexts/user.context';
import CrwnLogo from '../../assets/crown.svg?react';

import './navigation.styles.scss';

const Navigation = () => {
  //user context
  const { currentUser, setCurrentUser } = useContext(userContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
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
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
