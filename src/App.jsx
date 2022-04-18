import { Home, Cart, Wishlist, Products, Authentication } from "./pages";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./utils";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route
        path="/wishlist"
        element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        }
      />
      <Route path="/auth" element={<Authentication />} />
    </Routes>
  );
}
