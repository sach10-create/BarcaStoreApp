import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Filters } from "./Filters";
import { ProductListing } from "./ProductListing";

const Products = () => {
  return (
    <div className="ecom-product-container">
      <Header />
      <Filters />
      <ProductListing />
      <Footer/>
    </div>
  );
};

export { Products };
