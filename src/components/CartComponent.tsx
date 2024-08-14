import { useDispatch } from "react-redux";
import { CartItemType } from "../model/products";
import { useAppSelector } from "../store/hooks";
import Button from "../UI/Button";
import { cartActions } from "../store/cart-slice";

export default function CartComponent() {
  const { cartItems, totalCartValue, tax } = useAppSelector(
    (state) => state.cartState
  );

  const dispatch = useDispatch();

  const cartHeader = (
    <h1 className="text-4xl text-blue-950/80 dark:text-zinc-100 tracking-wide font-semibold pb-5 border-b-[1px] border-blue-950/15 dark:border-dark-blue">
      Shopping Cart
    </h1>
  );

  const onUpdateItemHandler = (type: string, value: CartItemType | string) => {
    if (type === "add" && typeof value === "object") {
      const updatedItem = { ...value, quantity: 1 };
      dispatch(cartActions.updateCartItem(updatedItem));
    } else {
      dispatch(cartActions.removeCartItem(value));
    }
  };

  if (!cartItems.length) {
    return (
      <>
        {cartHeader}
        <h2 className="mt-10 text-3xl text-blue-950/20 dark:text-zinc-100 font-semibold tracking-wide">
          You Cart is empty....
        </h2>
      </>
    );
  }

  return (
    <section className="text-blue-950/85 dark:text-zinc-100">
      {cartHeader}
      <div className="lg:grid lg:grid-cols-12 mt-8 gap-10">
        <div className="lg:col-span-8">
          {cartItems.map((item: CartItemType) => (
            <div
              key={item.id}
              className="mb-8 flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-4 text-center md:text-left">
              <img
                src={item.image}
                className="aspect-[1/1] rounded-lg object-cover h-32"
              />
              <div className="basis-1/6">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-md font-semibold text-blue-950/30 dark:text-zinc-200 dark:font-normal mt-2">
                  {item.company}
                </p>
              </div>
              <div className="text-center">
                <p>Quantity</p>
                <div className="mt-2">
                  <button
                    onClick={() => onUpdateItemHandler("remove", item.id)}
                    className="font-bold border-[1.5px] border-blue-950/85 dark:border-pink-300 active:border-blue-950/20 dark:active:border-pink-400 rounded-md px-[8px]">
                    -
                  </button>
                  <span className="font-semibold text-lg inline-block mx-2">
                    <span className="text-sm font-bold">x</span>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateItemHandler("add", item)}
                    className="font-bold border-[1.5px] border-blue-950/85 dark:border-pink-300 active:border-blue-950/20 dark:active:border-pink-400 rounded-md px-[5px]">
                    +
                  </button>
                </div>
              </div>
              <p className="text-lg font-semibold tracking-wide">
                ${(+item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 text-xs">
          <div className="rounded-xl p-5 bg-blue-50  dark:bg-dark-blue">
            <p className="flex justify-between p-2 border-b-[1px] border-blue-950/15">
              <span>Subtotal</span>
              <span className="font-semibold text-sm">
                ${totalCartValue.toFixed(2)}
              </span>
            </p>
            <p className="flex justify-between p-2 border-b-[1px] border-blue-950/15">
              <span>Shipping</span>
              <span className="font-semibold text-sm">$10.00</span>
            </p>
            <p className="flex justify-between p-2 border-b-[1px] border-blue-950/15">
              <span>Tax</span>
              <span className="font-semibold text-sm">${tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-[14px] px-2 py-4">
              <span>Order Total</span>
              <span className="font-semibold">
                ${(totalCartValue + tax + 10).toFixed(2)}
              </span>
            </p>
          </div>
          <Button styles="mt-10 text-center bg-blue-500 dark:bg-pink-400  hover:bg-blue-600 dark:hover:bg-pink-500 w-full h-12 rounded-xl uppercase font-semibold text-blue-100 dark:text-dark-blue text-[14px] tracking-wider">
            Place order
          </Button>
        </div>
      </div>
    </section>
  );
}
