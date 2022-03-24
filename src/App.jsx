import {
	Home,
	Cart,
	Wishlist,
	Products,
	Authentication,
} from "./pages";
import { Routes, Route } from "react-router-dom";
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/products" element={<Products />} />
			<Route path="/wishlist" element={<Wishlist />} />
			<Route path="/auth" element={<Authentication />} />
		</Routes>
	);
}