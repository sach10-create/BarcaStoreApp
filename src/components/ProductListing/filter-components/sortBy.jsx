import { useProducts } from "../../../context";

const SortByFilter = () => {
  const { productsState, productsDispatch, filtersData } = useProducts();
  return (
    <ul className="radio-btn-container">
      <li className="no-list form-heading">Sort by</li>
      {filtersData.sortByList.map(({ name, btnType }, index) => {
        return (
          <li className="no-list chips" key={`sortby-${index}`}>
            <label
              className={`d-flex align-center flex-wrap cursor-pointer ${
                productsState.sortByType === btnType ? "" : ""
              }`}
            >
              <input
                className=""
                type="radio"
                name="sort-by"
                value={btnType}
                checked={productsState.sortByType === btnType ? true : false}
                onChange={() =>
                  productsDispatch({
                    sortByType: btnType,
                    filterType: "PRODUCTS_SORT_BY",
                  })
                }
              />
              <div className="btn-div d-flex align-center">
                <p className="">{name}</p>
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export { SortByFilter };
