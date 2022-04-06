import { useNavigate } from "react-router";
import { useProducts } from "../../context";
import { presentInArray } from "../../utils";
import { useWishlist, useCart } from "../../context";
import { AddToCartBtn } from "./product-card";
import { AddToWishlistBtn } from "./product-card";

const ProductListing = () => {
  const { productsData } = useProducts();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  console.log("Here" , cartState);
  return (
    <section className="products d-flex flex-wrap">
      {productsData.length !== 0 ? (
        productsData.map(
          ({
            _id,
            name,
            brand,
            category,
            discountPercent,
            imgURL,
            mrp,
            price,
            rating,
            type,
            reviews,
            discount,
          }) => (
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
              <div className="jersey-button d-flex justify-content-space-between">
                {token ? (
                  presentInArray(cartState.itemsInCart, _id) ? (
                    <GoToCartBtn />
                  ) : (
                    <AddToCartBtn
                      productData={{
                        product: {
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
                          reviews,
                        },
                      }}
                      token={token}
                    />
                  )
                ) : (
                  <AddToCartBtnRedirect />
                )}

                {token ? (
                  presentInArray(wishlistState.itemsInWishlist, _id) ? (
                    <RemoveFromWishlistBtn productId={_id} token={token} />
                  ) : (
                    <AddToWishlistBtn
                      productData={{
                        product: {
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
                        },
                      }}
                      token={token}
                    />
                  )
                ) : (
                  <AddToWishlistBtnRedirect />
                )}
              </div>
            </div>
          )
        )
      ) : (
        <h4> No Products </h4>
      )}
    </section>
  );
};

export { ProductListing };
