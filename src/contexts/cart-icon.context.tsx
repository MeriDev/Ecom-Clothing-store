import { createContext, useState } from 'react';

export const cartIconContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
});

export const CartIconProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const value = { isCartOpen, setisCartOpen };

  return (
    <cartIconContext.Provider value={value}>
      {children}
    </cartIconContext.Provider>
  );
};
