import { useState } from "react";
import Input from "../UI/Input";

export default function PriceRange() {
  const [price, getPrice] = useState(0);

  const priceRangeLabel = (
    <p className="flex justify-between">
      <span>Select price</span>
      <span>${price.toFixed(2)}</span>
    </p>
  );

  return (
    <div>
      <Input
        label={priceRangeLabel}
        name="search-product"
        type="range"
        min="0"
        max="2000"
        step="10"
        defaultValue="0"
        styles="justify-center gap-3"
        inputStyles="appearance-none h-1 rounded-lg"
        onChange={(e) => getPrice(+e.target.value)}
      />
      <p className="flex justify-between font-semibold mt-2 px-1 text-xs text-blue-950/85">
        <span>0</span>
        <span>max : $2,000.00</span>
      </p>
    </div>
  );
}
