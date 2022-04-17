import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainCart} from "./MainCart";

const CartPage = () => {
  return (
    <div className="ecom-product-container">
      <Header />
      <MainCart />
      <Footer/>
    </div>
  );
};

export { CartPage };
