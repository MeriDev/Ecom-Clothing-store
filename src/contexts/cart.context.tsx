import { createContext, useState, useEffect } from 'react';

//helper function
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//remove and decrement Product
const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter(cartItem => cartItem.id !== productToClear.id);

export const cartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setCartTotal: () => {},
  addItemToCart: () => {},
  RemoveItemFromCart: () => {},
  clearItemsFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  //cart count
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  //cartTotal
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const RemoveItemFromCart = productToRemove => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemsFromCart = productToClear => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal,
    setisCartOpen,
    addItemToCart,
    RemoveItemFromCart,
    clearItemsFromCart,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
