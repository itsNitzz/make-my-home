import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartIcon from "../icons/Cart";
import Badge from "../UI/Badge";
import { useAppSelector } from "../store/hooks";
import Hamburger from "../icons/Hamburger";
import Button from "../UI/Button";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import Theme from "./Theme";

export default function MainNavigation() {
  const { totalQuantity } = useAppSelector((state) => state.cartState);
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <>
      <header className="w-full min-h-16 flex justify-between items-center px-10 bg-blue-50 dark:bg-dark-blue dark:text-zinc-100 text-blue-950/85">
        <Link
          to="/"
          className="hidden md:inline-block bg-blue-600 dark:bg-pink-400 text-blue-200 dark:text-dark-blue text-2xl p-2 px-4 font-bold rounded-lg">
          H
        </Link>
        <Button
          onClick={() => setShowNavigation((isOpen) => !isOpen)}
          styles="md:hidden inline-block p-3 rounded-lg hover:bg-blue-950/20 transition-transform active:scale-95 duration-100">
          <Hamburger />
        </Button>
        <nav className="hidden md:block">
          <NavLink
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 dark:bg-dark-blue-1 dark:text-zinc-200 text-blue-100 mx-4 px-4 py-2 rounded-md inline-block"
                : "mx-4 px-4 py-2 rounded-md inline-block dark:text-white hover:bg-blue-100 dark:hover:bg-zinc-700/70"
            }
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 dark:bg-dark-blue-1 dark:text-zinc-200 text-blue-100 mx-4 px-4 py-2 rounded-md inline-block"
                : "mx-4 px-4 py-2 rounded-md inline-block dark:text-white hover:bg-blue-100 dark:hover:bg-zinc-700/70"
            }
            to="/about">
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 dark:bg-dark-blue-1 dark:text-zinc-200 text-blue-100 mx-4 px-4 py-2 rounded-md inline-block"
                : "mx-4 px-4 py-2 rounded-md inline-block dark:text-white hover:bg-blue-100 dark:hover:bg-zinc-700/70"
            }
            to="/products">
            Products
          </NavLink>
        </nav>
        <span className="relative flex justify-center items-center gap-4">
          <Theme />
          <Link
            to="/cart"
            className="p-2 flex hover:bg-gray-300 dark:hover:bg-zinc-700/70 hover:rounded-full">
            <CartIcon />
            <Badge quantity={totalQuantity} />
          </Link>
        </span>
      </header>
      {showNavigation && <HamburgerMenu />}
    </>
  );
}
