const ProductListing = () => {
    return (
        <section className="products d-flex flex-wrap">
            <a href="https://nova-barca-store.netlify.app/store/pages/single-product-page.html" className="no-link">
            <div className="jersey-container">
                <div className="jersey-container-img d-flex justify-content-center align-center">
                    <img src="../../assets/barca.png" />
                </div>
                <section className="jersey-content d-flex justify-content-center align-center flex-column">
                    <h1 className="jersey-title">Barcelona Home Kit</h1>
                    <p className="jersey-category">Jersey</p>
                    <span className="jersey-price-tag d-flex justify-content-center align-center">
                        <p>Rs. 3999</p>
                        <strike>Rs. 7999</strike>
                        <p className="discount">(50%)</p>
                    </span>
                </section>
                <div className="jersey-button d-flex justify-content-space-between">
                    <button className="jersey-btn d-flex align-center">
                        <span className="cart-icon"><i className="fas fa-shopping-cart"></i></span>
                        <p className="cart-text">Add to Cart</p>
                    </button>
                    <button className="jersey-btn d-flex align-center">
                        <span className="cart-icon"><i className="fa-solid fa-heart"></i></span>
                        <p className="cart-text">Add to Wishlist</p>
                    </button>
                </div>
            </div>
            </a>
            <a href="https://nova-barca-store.netlify.app/store/pages/single-product-page.html" className="no-link">
            <div className="jersey-container">
                <div className="jersey-container-img d-flex justify-content-center align-center">
                    <img src="../../assets/barca.png" />
                </div>
                <section className="jersey-content d-flex justify-content-center align-center flex-column">
                    <h1 className="jersey-title">Barcelona Home Kit</h1>
                    <p className="jersey-category">Jersey</p>
                    <span className="jersey-price-tag d-flex justify-content-center align-center">
                        <p>Rs. 3999</p>
                        <strike>Rs. 7999</strike>
                        <p className="discount">(50%)</p>
                    </span>
                </section>
                <div className="jersey-button d-flex justify-content-space-between">
                    <button className="jersey-btn d-flex align-center">
                        <span className="cart-icon"><i className="fas fa-shopping-cart"></i></span>
                        <p className="cart-text">Add to Cart</p>
                    </button>
                    <button className="jersey-btn d-flex align-center">
                        <span className="cart-icon"><i className="fa-solid fa-heart"></i></span>
                        <p className="cart-text">Add to Wishlist</p>
                    </button>
                </div>
            </div>
                </a>
            <a href="https://nova-barca-store.netlify.app/store/pages/single-product-page.html" className="no-link">
            <div className="jersey-container">
                <div className="jersey-container-img d-flex justify-content-center align-center">
                    <img src="../../assets/barca.png" />
                </div>
                <section className="jersey-content d-flex justify-content-center align-center flex-column">
                    <h1 className="jersey-title">Barcelona Home Kit</h1>
                    <p className="jersey-category">Jersey</p>
                    <span className="jersey-price-tag d-flex justify-content-center align-center">
                        <p>Rs. 3999</p>
                        <strike>Rs. 7999</strike>
                        <p className="discount">(50%)</p>
                    </span>
                </section>
                <div className="jersey-button d-flex justify-content-space-between">
                    <button className="jersey-btn d-flex align-center">
                        <span className="cart-icon"><i className="fas fa-shopping-cart"></i></span>
                        <p className="cart-text">Add to Cart</p>
                    </button>
                    <button className="jersey-btn d-flex align-center">
                        <span className="cart-icon"><i className="fa-solid fa-heart"></i></span>
                        <p className="cart-text">Add to Wishlist</p>
                    </button>
                </div>
            </div>
            </a>
        </section>
    );
};

export {ProductListing};