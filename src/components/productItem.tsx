import { ProductItemType } from "../model/products";
import Card from "../UI/Card";
import { useAppSelector } from "../store/hooks";

export default function ProductItem({ item }: { item: ProductItemType }) {
  const { mode } = useAppSelector((state) => state.productsState);

  if (mode === "list") {
    return (
      <Card classeName="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between items-start p-8 gap-5 sm:gap-0">
        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-10">
          <img
            src={item.image}
            className=" h-48 w-48 sm:h-40 sm:w-40 object-cover rounded-2xl"
          />
          <div>
            <h2 className="text-lg text-blue-950/85 font-semibold">
              {item.title}
            </h2>
            <p className="mt-2 text-md text-blue-950/25 font-medium">
              {item.company}
            </p>
          </div>
        </div>
        <p className="text-blue-950/85 font-semibold text-lg">
          ${(+item.price).toFixed(2)}
        </p>
      </Card>
    );
  }

  return (
    <Card classeName="flex flex-col items-center">
      <img src={item.image} className="h-48 w-64 object-cover rounded-2xl" />
      <div className="flex flex-col p-8 w-full text-center gap-2">
        <h2 className="text-xl text-blue-950/85 font-semibold">{item.title}</h2>
        <p className="text-blue-950/85 ">${item.price}</p>
      </div>
    </Card>
  );
}
