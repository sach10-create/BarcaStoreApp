import { useProducts } from "../../../context";

const CategoryFilter = () => {
  const { productsState, productsDispatch, filtersData } = useProducts();

  const categoryFilterHandler = (e, name, btnType) =>
    productsDispatch({
      filterName: name,
      filterType: btnType,
      categoryFilters: ((categoryFilters, e) => {
        const newCategoryFilters = { ...categoryFilters };
        newCategoryFilters[name] = e.target.checked;
        return newCategoryFilters;
      })(productsState.categoryFilters, e),
    });

  return (
    <ul className="checkbox-btn-container">
      <li className="no-list form-heading">Categories</li>
      {filtersData.categoryFilters.map(({ name, btnType }, index) => {
        return (
          <li className="no-list chips" key={`category-${index}`}>
            <label
              className={`cursor-pointer${
                productsState.categoryFilters[name]
                  ? "filter-chip-selected"
                  : ""
              }`}
            >
              <input
                className="filters"
                type="checkbox"
                value={btnType}
                checked={productsState.categoryFilters[name] ? true : false}
                onChange={(e) => categoryFilterHandler(e, name, btnType)}
              />
              <div className="btn-div d-flex align-center">
                <i className="fa-solid fa-circle-check"></i>
                <p className="">{name}</p>
              </div>{" "}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export { CategoryFilter };
