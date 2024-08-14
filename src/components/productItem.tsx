import { ProductItemType } from "../model/products";
import Card from "../UI/Card";
import { useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";

export default function ProductItem({ item }: { item: ProductItemType }) {
  const { mode } = useAppSelector((state) => state.productsState);

  if (mode === "list") {
    return (
      <Link to={`/products/${item.id}`}>
        <Card classeName="group transition-shadow duration-300 linear hover:shadow-xl hover:shadow-gray-300 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between items-start p-8 gap-5 sm:gap-0">
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-10">
            <img
              src={item.image}
              className="transition-transform linear duration-300 delay-100 group-hover:scale-105  h-48 w-48 sm:h-40 sm:w-40 object-cover rounded-2xl hover:scale-105"
            />
            <div>
              <h2 className="text-lg text-blue-950/85 dark:text-zinc-100 font-semibold">
                {item.title}
              </h2>
              <p className="mt-2 text-md text-blue-950/25 dark:text-zinc-200 font-medium dark:font-normal">
                {item.company}
              </p>
            </div>
          </div>
          <p className="text-blue-950/85 dark:text-purple-400 font-semibold text-lg">
            ${(+item.price).toFixed(2)}
          </p>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/products/${item.id}`}>
      <Card classeName="flex flex-col items-center">
        <img src={item.image} className="h-48 w-64 object-cover rounded-2xl" />
        <div className="flex flex-col p-8 w-full text-center gap-2">
          <h2 className="text-xl text-blue-950/85 dark:text-zinc-100 font-semibold">
            {item.title}
          </h2>
          <p className="text-blue-950/85 dark:text-purple-400">
            ${(+item.price).toFixed(2)}
          </p>
        </div>
      </Card>
    </Link>
  );
}
