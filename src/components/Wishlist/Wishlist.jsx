import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainWishlist} from "./MainWishlist";

const WishlistPage = () => {
  return (
    <div className="ecom-product-container">
      <Header />
      <MainWishlist />
      <Footer/>
    </div>
  );
};

export { WishlistPage };
