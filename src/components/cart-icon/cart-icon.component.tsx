import { useContext } from 'react';
import { cartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setisCartOpen } = useContext(cartContext);
  const { cartCount } = useContext(cartContext);

  return (
    <CartIconContainer
      onClick={() => {
        setisCartOpen(isCartOpen => !isCartOpen);
      }}
    >
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
