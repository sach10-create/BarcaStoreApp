import { useProducts } from "../../../context";

const BrandFilter = () => {
  const { productsState, productsDispatch, filtersData } = useProducts();

  const brandFilterHandler = (e, name, btnType) =>
    productsDispatch({
      filterName: name,
      filterType: btnType,
      brandFilters: ((brandFilters, e) => {
        const newBrandFilters = { ...brandFilters };
        newBrandFilters[name] = e.target.checked;
        return newBrandFilters;
      })(productsState.brandFilters, e),
    });

  return (
    <ul className="checkbox-btn-container">
      <li className="no-list form-heading">Brand</li>
      {filtersData.brandFilters.map(({ name, btnType }, index) => {
        return (
          <li className="no-list chips" key={`brand-${index}`}>
            <label
              className={`cursor-pointer ${
                productsState.brandFilters[name] ? "filter-chip-selected" : ""
              }`}
            >
              <input
                className="filters"
                type="checkbox"
                value={btnType}
                checked={productsState.brandFilters[name] ? true : false}
                onChange={(e) => brandFilterHandler(e, name, btnType)}
              />
              <div className="btn-div d-flex align-center">
                <i className="fa-solid fa-circle-check"></i>
                <p className="">{name}</p>
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export { BrandFilter };
