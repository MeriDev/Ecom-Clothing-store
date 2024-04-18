import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/user.context.tsx';
import { ShopProvider } from './contexts/shop.context.tsx';
import { CartIconProvider } from './contexts/cart-icon.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ShopProvider>
          <CartIconProvider>
            <App />
          </CartIconProvider>
        </ShopProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
