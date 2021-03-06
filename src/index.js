import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider, RegisterProvider , AuthProvider, ProductsProvider, CartProvider , WishlistProvider } from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <RegisterProvider>
        <AuthProvider>
          <ProductsProvider>
            <CartProvider>
              <WishlistProvider>
          <App />
          </WishlistProvider>
          </CartProvider>
          </ProductsProvider>
          </AuthProvider>
    </RegisterProvider>
    </LoginProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
