import { useContext } from 'react';
import './checkOutItem.styles.scss';
import { cartContext } from '../../contexts/cart.context';

const CheckOutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { addItemToCart, RemoveItemFromCart, clearItemsFromCart } =
    useContext(cartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => RemoveItemFromCart(cartItem);
  const clearItemHandler = () => clearItemsFromCart(cartItem);

  return (
    <span className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">
        <span className="value">{price}</span>
      </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </span>
  );
};

export default CheckOutItem;
