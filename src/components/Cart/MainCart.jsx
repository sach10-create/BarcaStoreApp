import { useCart, useAuth, useProducts } from "../../context";
import { getCartsDataFromId, removeFromCartHandler } from "../../utils";

const MainCart = () => {
  const { authState } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { productsData } = useProducts();

  const handleDeleteFromCart = (e, productId) =>
    removeFromCartHandler(e, productId, authState.token, cartDispatch);
  const itemCount = cartState.cartItemsCount;
  const products = getCartsDataFromId(cartState.itemsInCart, productsData);

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
                    onClick={(e) => handleDeleteFromCart(e, _id)}
                  >
                    <span className="cart-icon">
                      <i className="fa-solid fa-trash-can h6-tag"></i>
                    </span>
                    <p className="cart-text h6-tag">Remove from Cart</p>
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

export { MainCart };
