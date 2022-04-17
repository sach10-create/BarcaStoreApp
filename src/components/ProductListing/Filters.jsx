import { useProducts } from "../../context";
import {
  FilterHeader,
  SortByFilter,
  CategoryFilter,
  BrandFilter,
} from "./filter-components";

const Filters = () => {
  const { productsState, filtersData } = useProducts();
  return (
    <section className="side-nav">
      <div className="form-container">
        {Object.keys(filtersData).length !== 0 &&
          Object.keys(productsState).length !== 0 && (
            <form className="flex-column d-flex">
              <FilterHeader />
              <SortByFilter />
              <CategoryFilter />
              <BrandFilter />
            </form>
          )}
      </div>
    </section>
  );
};

export { Filters };
