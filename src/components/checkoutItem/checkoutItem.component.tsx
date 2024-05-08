import { useContext } from 'react';
import { cartContext } from '../../contexts/cart.context';

import {
  CheckOutItemContainer,
  ImageContainer,
  BaseSpan,
  Arrow,
  Value,
  Quantity,
  RemoveButton,
} from './checkOutItem.styles';

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, RemoveItemFromCart, clearItemsFromCart } =
    useContext(cartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => RemoveItemFromCart(cartItem);
  const clearItemHandler = () => clearItemsFromCart(cartItem);

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>
        <Value>{price}</Value>
      </BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
