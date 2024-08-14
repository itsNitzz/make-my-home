import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import Dropdown from "../UI/Dropdown";
import { MutableRefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";

const availableQuantity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function ProductDetails() {
  const { id } = useParams();
  const ref = useRef() as MutableRefObject<HTMLSelectElement>;
  const { productsList } = useAppSelector((state) => state.productsState);
  const dispatch = useDispatch();

  const product = productsList.find((product) => product.id === id);

  const onAddToCartHandler = () => {
    const updatedProducts = { ...product, quantity: +ref.current.value };
    dispatch(cartActions.updateCartItem(updatedProducts));
  };

  return (
    <>
      <div className="py-5 text-sm text-blue-950/75  dark:text-zinc-100 flex gap-1 font-medium">
        <Link className=" hover:underline" to="/">
          Home
        </Link>
        <span className="opacity-50">&gt;</span>
        <Link className=" hover:underline" to=".." relative="path">
          Products
        </Link>
      </div>
      <section className="flex flex-col items-center md:flex-row md:items-start gap-14">
        <img
          src={product?.image}
          alt={product?.title}
          className="rounded-lg h-72 md:h-80 lg:h-96 xl:h-[35rem] aspect-[1/1] object-cover basis-1/2"
        />
        <div className="basis-1/2 text-center md:text-left text-blue-950/85 dark:text-zinc-100">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <h3 className="text-xl font-bold text-blue-950/20 dark:text-zinc-200 mt-3">
            {product?.company}
          </h3>
          <p className="mt-3 text-xl tracking-wide">${product?.price}</p>
          <p className="mt-5 leading-9 ">{product?.description}</p>
          <Dropdown
            label="Quantity"
            id="quantity"
            styles="mt-5 flex flex-col items-center md:items-start"
            labelStyles="font-semibold"
            dropdownStyles="dark:bg-dark-blue-2 border-purple-950 dark:border-purple-400 border-[1px] rounded-lg p-2 w-full sm:w-[60%]"
            filterOptions={availableQuantity}
            ref={ref}
          />
          <button
            onClick={onAddToCartHandler}
            className="mt-10 p-4 text-indigo-50 dark:text-dark-blue bg-indigo-800/90 dark:bg-purple-400  hover:bg-indigo-800/95 dark:hover:bg-purple-500 rounded-lg text-sm font-semibold uppercase">
            Add to bag
          </button>
        </div>
      </section>
    </>
  );
}
