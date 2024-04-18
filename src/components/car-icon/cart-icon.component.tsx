import './cart-icon.styles.scss';
import ShoppingBag from '../../assets/shopping-bag.svg?react';
import { cartIconContext } from '../../contexts/cart-icon.context';
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setisCartOpen } = useContext(cartIconContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setisCartOpen(isCartOpen => !isCartOpen);
      }}
    >
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
