import { createContext, useState, useEffect } from 'react';
import { addCollectionsAndDocuments } from '../utils/firebase.utils.js';

import PRODUCTS_DATA from './products.js';

export const shopContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    addCollectionsAndDocuments('products', PRODUCTS_DATA);
  }, []);

  const value = { products, setProducts };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
