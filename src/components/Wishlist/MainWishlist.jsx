import { useAuth, useProducts, useWishlist } from "../../context";
import { getDataFromId, removeFromWishlistHandler } from "../../utils";

const MainWishlist = () => {
  const { authState } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { productsData } = useProducts();

  const handleDeleteFromWishlist = (e, productId) =>
    removeFromWishlistHandler(e, productId, authState.token, wishlistDispatch);
  const itemCount = wishlistState.wishlistItemsCount;
  const products = getDataFromId(wishlistState.itemsInWishlist, productsData);
  return (
    <>
      {itemCount ? (
        products.map(
          ({
            _id,
            name,
            brand,
            category,
            discount,
            discountPercent,
            imgURL,
            mrp,
            price,
            rating,
            type,
          }) => (
            <li key={_id} className="no-l ist listing-container d-flex">
              <div key={_id} className="jersey-container">
                <div className="jersey-container-img d-flex justify-content-center align-center">
                  <img src={imgURL} />
                </div>
                <section className="jersey-content d-flex justify-content-center align-center flex-column">
                  <h1 className="jersey-title">{name}</h1>
                  <p className="jersey-category">{type}</p>
                  <span className="jersey-price-tag d-flex justify-content-center align-center">
                    <p>{price}</p>
                    <strike>{mrp}</strike>
                    <p className="discount">({discountPercent}%)</p>
                  </span>
                </section>
                <div className="jersey-button">
                  <div
                    className="jersey-btn d-flex align-center justify-content-center remove-btn"
                    onClick={(e) => handleDeleteFromWishlist(e, _id)}
                  >
                    <span className="cart-icon">
                      <i className="fa-solid fa-trash-can h6-tag"></i>
                    </span>
                    <p className="cart-text h6-tag">Remove from Wishlist</p>
                  </div>
                </div>
              </div>
            </li>
          )
        )
      ) : (
        <h3> No Videos Added</h3>
      )}
    </>
  );
};

export { MainWishlist };
