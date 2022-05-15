import { useProducts } from "../../../context";

const FilterHeader = () => {
  const { productsDispatch, clearFilters } = useProducts();
  const clearAllHandler = () =>
    productsDispatch({
      ...clearFilters,
    });

  return (
    <section className="form-header d-flex align-center justify-content-space-between">
      <h3 className="form-heading">Filters</h3>
      <button
        className="primary-btn btn"
        onClick={clearAllHandler}
        type="button"
      >
        Clear All
      </button>
    </section>
  );
};

export { FilterHeader };
