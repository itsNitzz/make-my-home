import { Form } from "react-router-dom";
import Input from "../UI/Input";
import Dropdown from "../UI/Dropdown";
import Button from "../UI/Button";
import PriceRange from "./PriceRange";

const CATAGORY_FILTER = ["all", "Tables", "chairs", "sofas", "deds"];
const COMPANY_FILTER = [
  "all",
  "Modenza",
  "Luxora",
  "Artifex",
  "Comfora",
  "Homestead",
];

const SORT_BY = ["a-z", "z-a", "high", "low"];

const inputStyles = "p-1 border-[1px] border-gray-300 rounded-lg";

export default function FilterForm() {
  return (
    <Form className="grid cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-x-4 gap-y-8 bg-blue-100 rounded-md">
      <Input
        label="Search Product"
        inputStyles={inputStyles}
        styles="gap-2"
        name="search"
      />
      <Dropdown
        label="Select Catagory"
        styles={inputStyles}
        filterOptions={CATAGORY_FILTER}
      />
      <Dropdown
        label="Select Company"
        styles={inputStyles}
        filterOptions={COMPANY_FILTER}
      />
      <Dropdown label="Sort By" styles={inputStyles} filterOptions={SORT_BY} />

      <PriceRange />
      <Input
        label="Free Shipping"
        type="checkbox"
        name="shipping"
        styles="items-center justify-center gap-2"
      />
      <Button styles="h-8 w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-blue-200 uppercase self-end">
        search
      </Button>
      <Button styles="h-8 w-full rounded-lg bg-pink-500 hover:bg-pink-600 text-blue-100 uppercase self-end">
        Reset
      </Button>
    </Form>
  );
}
