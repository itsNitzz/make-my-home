import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartIcon from "../icons/Cart";
import Badge from "../UI/Badge";

export default function MainNavigation() {
  return (
    <header className="w-full min-h-16 flex justify-between items-center px-10 bg-blue-50 text-blue-950/85">
      <Link
        to="/"
        className="inline-block bg-blue-600 text-blue-200 text-2xl p-2 px-4 font-bold rounded-lg">
        H
      </Link>
      <nav>
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? "bg-blue-950 text-blue-100 mx-4 px-4 py-2 rounded-md inline-block"
              : "mx-4 px-4 py-2 rounded-md inline-block hover:bg-blue-100"
          }
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-950 text-blue-100 mx-4 px-4 py-2 rounded-md inline-block"
              : "mx-4 px-4 py-2 rounded-md inline-block hover:bg-blue-100"
          }
          to="/about">
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-950 text-blue-100 mx-4 px-4 py-2 rounded-md inline-block"
              : "mx-4 px-4 py-2 rounded-md inline-block hover:bg-blue-100"
          }
          to="/products"
          end>
          Products
        </NavLink>
      </nav>
      <span className="relative inline-block">
        <CartIcon />
        <Badge />
      </span>
    </header>
  );
}
