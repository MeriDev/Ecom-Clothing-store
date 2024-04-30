import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase.utils.js';

export const shopContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => {},
});

export const ShopProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const CategoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(CategoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };
  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};
