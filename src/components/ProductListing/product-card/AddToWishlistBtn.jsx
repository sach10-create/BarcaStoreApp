import {Link} from "react-router-dom";
import { addToWishlistHandler, removeFromWishlistHandler, MoveToWishlistHandler } from "../../../utils" 
import { useWishlist, useCart } from "../../../context";

const AddToWishlistBtn = (props) => {
    const { wishlistDispatch } = useWishlist();
    return (
        <button onClick={(e) => addToWishlistHandler(e, props.productData, props.token,wishlistDispatch)} className="jersey-btn d-flex align-center">
            <span className="cart-icon">
                <i className="far fa-heart"></i>
            </span>
            <p className="wishlist-text">Add to wishlist</p>
        </button>
    );
}
    
const AddToWishlistBtnRedirect = () => 
    <Link to="/auth" state={{ state: '/products' }} className="jersey-btn d-flex align-center">
        <span className="cart-icon">
            <i className="far fa-heart"></i>
        </span>
        <p className="wishlist-text">Add to wishlist</p>
    </Link>

const RemoveFromWishlistBtn = (props) => {
    const { wishlistDispatch} = useWishlist();
    return (
        <button onClick={(e) => removeFromWishlistHandler(e, props.productId, props.token, wishlistDispatch)} className="jersey-btn d-flex align-center">
            <span className="cart-icon">
                <i className="fa-solid fa-heart"></i>
            </span>
            <p className="wishlist-text">Added to wishlist</p>
        </button>
    );
}

const MoveToWishlistBtn = (props) => {
    const { wishlistDispatch } = useWishlist();
    const { cartDispatch } = useCart();
    return (
        <button onClick={(e) => MoveToWishlistHandler(e, props.productData, props.token,wishlistDispatch, cartDispatch)} className="jersey-btn d-flex align-center">
            <span className="cart-icon">
                <i className="far fa-heart"></i>
            </span>
            <p className="wishlist-text">Move to wishlist</p>
        </button>
    );
}
export {AddToWishlistBtn,AddToWishlistBtnRedirect, RemoveFromWishlistBtn, MoveToWishlistBtn};