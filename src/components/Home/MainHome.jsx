import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth, useProducts } from "../../context";
import { presentObjInArray } from "../../utils";
import { useWishlist, useCart } from "../../context";
import {
  AddToCartBtn,
  AddToCartBtnRedirect,
  GoToCartBtn,
} from "../ProductListing/product-card";
import {
  AddToWishlistBtn,
  AddToWishlistBtnRedirect,
  RemoveFromWishlistBtn,
} from "../ProductListing/product-card";

const MainHome = () => {
  const { productsData } = useProducts();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const { authState } = useAuth();

  const products = productsData.filter(
    (product) => product.category === "Jersey"
  );

  return (
    <>
      <section className="ecom-offer-container">
        <p className="offer">
          FREE DELIVERY IN INDIA* - RETURNS EXTENDED TO 60 DAYS.
        </p>
      </section>
      <section className="ecom-main-container rel-c">
        <img
          src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/cover-image.jpg"
          alt="Cover Image"
          className="cover-image"
        />
        <h1 className="shopping-heading barca-heading">BARÇA KITS</h1>
        <Link to={"/products"} className="shopping-links barca-kits">
          Shop Now
        </Link>
      </section>
      <section className="ecom-section-container">
        <h1 className="top-picks-heading">Top Picks</h1>
        <div className="product-category-container d-flex justify-content-center align-center">
        <Link to={"/products"}>
          <article className="section-one category">
            <img
              src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/photo1.jpg"
              alt="Memorabilia"
              className="category-img"
            />
            <p className="category-label">Memorabilia</p>
          </article>
          </Link>
          <Link to={"/products"}>
          <article className="section-two category">
            <img
              src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/photo1.jpg"
              alt="Fashion Accessories"
              className="category-img"
            />
            <p className="category-label">Accessories</p>
          </article>
          </Link>
          <Link to={"/products"}>
          <article className="section-three category">
            <img
              src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/photo3.jpg"
              alt="Home Ware"
              className="category-img"
            />
            <p className="category-label">Home Ware</p>
          </article>
          </Link>
          <Link to={"/products"}>
          <article className="section-four category">
            <img
              src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/photo4.jpg"
              alt="Electronic and Games"
              className="category-img"
            />
            <p className="category-label">Games</p>
          </article>
          </Link>
        </div>
      </section>
      <section className="ecom-section2-container rel-c">
        <img
          src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/training-kits.jpg"
          alt="training-kits"
          className="training-kits-img"
        />
        <h1 className="shopping-heading category-heading">TRAINING KITS</h1>
        <Link to={"/products"} className="shopping-links shop-now-links">
          Shop Now
        </Link>
      </section>
      <section className="ecom-section3-container rel-c">
        <img
          src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/best-sellers.jpg"
          alt="training-kits"
          className="best-sellers-img"
        />
        <h1 className="shopping-heading category-heading">BEST SELLERS</h1>
        <Link to={"/products"} className="shopping-links shop-now-links">
          Shop Now
        </Link>
      </section>
      <section className="ecom-jersey-card-container d-flex justify-content-space-between">
        <h1 className="top-picks-heading"> New Arrivals</h1>
        {products.length !== 0 ? (
          products.map(
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
                  {authState.token ? (
                    presentObjInArray(cartState.itemsInCart, _id) ? (
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
                        token={authState.token}
                      />
                    )
                  ) : (
                    <AddToCartBtnRedirect />
                  )}

                  {authState.token ? (
                    presentObjInArray(wishlistState.itemsInWishlist, _id) ? (
                      <RemoveFromWishlistBtn
                        productId={_id}
                        token={authState.token}
                      />
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
                        token={authState.token}
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
      <section className="ecom-section4-container rel-c">
        <img
          src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/fashion-for-her.jpg"
          alt="training-kits"
          className="fashion-her-img"
        />
        <h1 className="shopping-heading category-heading">FASHION FOR HER</h1>
        <Link to={"/products"} className="shopping-links shop-now-links">
          Shop Now
        </Link>
      </section>
      <section className="ecom-section5-container rel-c">
        <img
          src="https://raw.githubusercontent.com/sach10-create/Nova-Barca-Store/dev/assets/fashion-for-him.jpg"
          alt="training-kits"
          className="fashion-him-img"
        />
        <h1 className="shopping-heading category-heading">FASHION FOR HIM</h1>
        <Link to={"/products"} className="shopping-links shop-now-links">
          Shop Now
        </Link>
      </section>
    </>
  );
};

export { MainHome };
