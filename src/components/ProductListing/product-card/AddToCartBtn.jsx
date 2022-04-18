import { Link } from "react-router-dom";
import { addToCartHandler } from "../../../utils";
import { useCart } from "../../../context";

const AddToCartBtn = (props) => {
  const { cartDispatch } = useCart();

  return (
    <button
      onClick={(e) =>
        addToCartHandler(e, props.productData, props.token, cartDispatch)
      }
      className="jersey-btn d-flex align-center"
    >
      <span className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
      </span>
      <p className="cart-text">Add to Cart</p>
    </button>
  );
};

const AddToCartBtnRedirect = () => (
  <Link
    to="/auth"
    state={{ from: { pathname: "/" } }}
    className="jersey-btn d-flex align-center"
  >
    <span className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
    </span>
    <p className="cart-text">Add to Cart</p>
  </Link>
);

const GoToCartBtn = () => {
  return (
    <Link to={"/cart"} className="jersey-btn d-flex align-center">
      <span className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
      </span>
      <p className="cart-text">Go to Cart</p>
    </Link>
  );
};
export { AddToCartBtn, AddToCartBtnRedirect, GoToCartBtn };
