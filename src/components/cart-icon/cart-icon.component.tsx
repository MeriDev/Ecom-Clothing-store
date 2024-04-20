import './cart-icon.styles.scss';
import ShoppingBag from '../../assets/shopping-bag.svg?react';
import { cartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setisCartOpen } = useContext(cartContext);
  const { cartCount } = useContext(cartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setisCartOpen(isCartOpen => !isCartOpen);
      }}
    >
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
