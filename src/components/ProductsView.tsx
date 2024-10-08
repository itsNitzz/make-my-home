import GridIcon from "../icons/Grid";
import ListIcon from "../icons/List";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";
import { useAppSelector } from "../store/hooks";

export default function ProductsView() {
  const { mode } = useAppSelector((state) => state.productsState);

  const dispatch = useDispatch();

  const activeClass =
    "bg-blue-500 dark:bg-pink-400 hover:bg-blue-500 dark:hover:bg-pink-400 text-blue-100 dark:text-dark-blue";
  return (
    <div className="flex items-center gap-2 text-xl">
      <Button
        onClick={() => dispatch(productsActions.setGrid())}
        styles={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700/70 ${
          mode === "grid" ? activeClass : ""
        }`}>
        <GridIcon />
      </Button>
      <Button
        onClick={() => dispatch(productsActions.setList())}
        styles={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700/70 ${
          mode === "list" ? activeClass : ""
        }`}>
        <ListIcon styles="size-5" />
      </Button>
    </div>
  );
}
