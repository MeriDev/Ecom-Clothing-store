import { useContext } from 'react';

import { cartContext } from '../../contexts/cart.context';

import {
  ProductCardContainer,
  Footer,
  ProductName,
  ProductPrice,
} from './product-card.styles';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(cartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} />
      <Footer>
        <ProductName> {name} </ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
