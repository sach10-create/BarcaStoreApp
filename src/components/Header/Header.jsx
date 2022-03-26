const Header = () => {
  return (
    <header className="ecom-header header-comp">
      <div className="header-container-1 d-flex justify-content-space-between align-center">
        <div className="left-container d-flex">
          <div className="logo-container">
            <a
              href="https://nova-barca-store.netlify.app"
              className="quiz-home-link"
            >
              <img
                src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/nova-logo-dark.png"
                alt="Logo"
                className="logo"
              />
              <p className="logo-p">Barca Store</p>
            </a>
          </div>
          <div className="header-container d-flex justify-content-flex-start align-center">
            <p className="home-heading">
              <a
                href="https://nova-barca-store.netlify.app"
                className="home-link"
              >
                Home
              </a>
            </p>
            <p className="shop-now-heading">
              <a
                href="https://nova-barca-store.netlify.app/store/pages/product-page.html"
                className="shopping-link"
              >
                Shop Now
              </a>
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
              <a
                href="https://nova-barca-store.netlify.app/store/pages/login-page.html"
                className="no-link-store"
              >
                <i className="fas fa-user header-img"></i>
                <p className="icon-badge-text">Admin</p>
              </a>
            </div>
            <div className="icon-badge">
              <a
                href="https://nova-barca-store.netlify.app/store/pages/wishlist-page.html"
                className="no-link-store"
              >
                <i className="fas fa-heart header-img"></i>
                <p className="icon-badge-text">Wishlist</p>
              </a>
            </div>
            <div className="icon-badge">
              <a
                href="https://nova-barca-store.netlify.app/store/pages/cart-management.html"
                className="no-link-store"
              >
                <i className="fas fa-shopping-cart header-img"></i>
                <p className="icon-badge-text cart">Cart</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
