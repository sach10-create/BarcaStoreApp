import { Link } from "react-router-dom";
import { useAuth , useCart , useLogin , useWishlist , useRegister } from "../../context";

const Header = () => {
 const { authDispatch, authState } = useAuth();
 const { cartDispatch } = useCart();
 const { wishlistDispatch } = useWishlist();
 const { loginDispatch } = useLogin();
 const { registerDispatch } = useRegister();
 const handleLogout = () => {
   localStorage.clear();
   authDispatch({ type: "LOGOUT" });
   cartDispatch({ type: "RESET" });
   wishlistDispatch({ type: "RESET" });
   loginDispatch({ type: "RESET" });
   registerDispatch({ type: "RESET" });
 }


  return (
    <header className="ecom-header header-comp">
      <div className="header-container-1 d-flex justify-content-space-between align-center">
        <div className="left-container d-flex">
          <div className="logo-container">
            <Link to="/" className="quiz-home-link">
              <img
                src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/nova-logo-dark.png"
                alt="Logo"
                className="logo"
              />
              <p className="logo-p">Barca Store</p>
            </Link>
          </div>
          <div className="header-container d-flex justify-content-flex-start align-center">
            <p className="home-heading">
              <Link to="/" className="home-link">
                Home
              </Link>
            </p>
            <p className="shop-now-heading">
              <Link to="/products" className="shopping-link">
                Shop Now
              </Link>
            </p>
          </div>
        </div>
        <div className="social-icon-container d-flex">
          <form className="search" action="" method="post">
            <input
              className="search-input"
              type="text"
              name=""
              placeholder="Search.."
            />
            <i className="fas fa-search search-icon"></i>
          </form>
          <div className="icon-badge-container d-flex flex-wrap justify-content-center">
            <div className="icon-badge">
              <Link to="/auth" className="no-link-store">
                <i className="fas fa-user header-img"></i>
                <p className="icon-badge-text" onClick = {handleLogout}>{authState.token ? "Logout" : "SignIn"} </p>
              </Link>
            </div>
            <div className="icon-badge">
              <Link to="/wishlist" className="no-link-store">
                <i className="fas fa-heart header-img"></i>
                <p className="icon-badge-text">Wishlist</p>
              </Link>
            </div>
            <div className="icon-badge">
              <Link to="/cart" className="no-link-store">
                <i className="fas fa-shopping-cart header-img"></i>
                <p className="icon-badge-text cart">Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
