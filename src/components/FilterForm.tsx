import {
  ActionFunctionArgs,
  Form,
  useActionData,
  useSubmit,
} from "react-router-dom";
import Input from "../UI/Input";
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";
import PriceRange from "./PriceRange";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";
import { useEffect } from "react";

const CATAGORY_FILTER = ["all", "Tables", "chairs", "sofas", "beds"];
const COMPANY_FILTER = [
  "all",
  "Modenza",
  "Luxora",
  "Artifex",
  "Comfora",
  "Homestead",
];

const SORT_BY = ["Select", "a-z", "z-a", "high", "low"];

const inputStyles =
  "p-1 px-2 border-[1px] font-semibold border-gray-300 dark:border-dark-blue-1 dark:text-zinc-100 rounded-lg dark:bg-dark-blue-2";

export default function FilterForm() {
  const filterCriteria = useActionData();
  const dispatch = useDispatch();
  const submit = useSubmit();

  useEffect(() => {
    dispatch(productsActions.setFilteredProductsList(filterCriteria));
  }, [dispatch, filterCriteria]);

  const onRestFilterhandler = () => {
    submit(null, { method: "post", action: "/products" });
  };

  return (
    <Form
      method="post"
      action="/products"
      className="grid cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-x-4 gap-y-8 bg-blue-100 dark:bg-dark-blue rounded-md">
      <Input
        id="search"
        label="Search Product"
        inputStyles={inputStyles}
        styles="gap-2"
        name="search"
        type="search"
      />
      <Dropdown
        id="catagory"
        label="Select Catagory"
        name="catagory"
        dropdownStyles={inputStyles}
        filterOptions={CATAGORY_FILTER}
      />
      <Dropdown
        id="company"
        label="Select Company"
        name="company"
        dropdownStyles={inputStyles}
        filterOptions={COMPANY_FILTER}
      />
      <Dropdown
        id="filter"
        label="Sort By"
        name="filter"
        dropdownStyles={inputStyles}
        filterOptions={SORT_BY}
      />

      <PriceRange />
      <Input
        id="shipping"
        label="Free Shipping"
        type="checkbox"
        name="shipping"
        styles="items-center justify-end gap-2"
        inputStyles=" w-5 h-5 rounded-lg dark:accent-pink-400"
      />
      <Button styles="h-8 w-full text-sm font-semibold rounded-lg bg-blue-500 dark:bg-pink-400 hover:bg-blue-500 dark:hover:bg-pink-600 text-blue-200 dark:text-dark-blue uppercase self-end">
        search
      </Button>
      <Button
        onClick={onRestFilterhandler}
        type="reset"
        styles="h-8 w-full text-sm font-semibold rounded-lg bg-pink-500 dark:bg-orange-300 hover:bg-pink-600 dark:hover:bg-orange-400 text-blue-100 dark:text-dark-blue uppercase self-end">
        Reset
      </Button>
    </Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function filterAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const searchText = formData.get("search");
  const catagory = formData.get("catagory");
  const company = formData.get("company");
  const filter = formData.get("filter");
  const shipping = formData.get("shipping");
  const priceRange = formData.get("price-range");

  if (!(searchText || catagory || company || filter || shipping)) return null;

  return { searchText, catagory, company, filter, shipping, priceRange };
}
