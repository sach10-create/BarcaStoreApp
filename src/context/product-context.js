import {
	createContext,
	useContext,
	useReducer,
	useState,
	useEffect,
} from "react";
import { productsReducer, sortByReducer } from "../reducers";
import {
	BrandProducts,
	ProductsCompose,
	CategoryProducts,
} from "../utils";
import { useProductsDataHook, useFiltersDataHook } from "../custom-hooks";

const getDefaultProductsState = (filtersData) => {
	return {
		filterName: "Reset",
		filterType: "default",
		sortByType: "",
		filterSelectClassName: "",
		categoryFilters: filtersData.categoryFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
		brandFilters: filtersData.brandFilters.reduce((prev, curr) => {
			prev[curr.name] = curr.status;
			return prev;
		}, {}),
	};
};

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
	const productsData = useProductsDataHook();
	const filtersData = useFiltersDataHook();

	const [defaultProductsState, setDefaultProductState] = useState({});
	useEffect(() => {
		if (Object.keys(filtersData).length !== 0 && productsData.length !== 0) {
			setDefaultProductState(getDefaultProductsState(filtersData));
		}
	}, [filtersData]);

	const [productsState, productsDispatch] = useReducer(
		productsReducer,
		defaultProductsState
	);
	useEffect(() => {
		if (Object.keys(defaultProductsState).length !== 0) {
			productsDispatch({ ...defaultProductsState });
		}
	}, [defaultProductsState]);

	const [filteredProductsData, setFilteredProductsData] =
		useState(productsData);
	useEffect(() => {
		if (productsData.length !== 0 && Object.keys(productsState).length !== 0) {
			setFilteredProductsData(
				ProductsCompose(
					productsState,
					CategoryProducts,
					BrandProducts,
					sortByReducer,
				)(productsData)
			);
		}
	}, [productsData, productsState]);

	return (
		<ProductsContext.Provider
			value={{
				productsState,
				productsData: filteredProductsData,
				filtersData: filtersData,
				productsDispatch,
				clearFilters: defaultProductsState,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };