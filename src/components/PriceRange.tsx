import { useState } from "react";
import Input from "../UI/Input";

export default function PriceRange() {
  const [price, getPrice] = useState(2000);

  const priceRangeLabel = (
    <p className="flex justify-between">
      <span>Select price</span>
      <span className="tracking-wide">${price.toFixed(2)}</span>
    </p>
  );

  return (
    <div>
      <Input
        id="price-range"
        label={priceRangeLabel}
        name="price-range"
        type="range"
        min="0"
        max="2000"
        step="10"
        defaultValue="2000"
        styles="justify-center gap-3"
        onChange={(e) => getPrice(+e.target.value)}
      />
      <p className="flex justify-between font-semibold mt-2 px-1 text-xs text-blue-950/85">
        <span className="dark:text-zinc-100">0</span>
        <span className="dark:text-zinc-100">max : $2,000.00</span>
      </p>
    </div>
  );
}
