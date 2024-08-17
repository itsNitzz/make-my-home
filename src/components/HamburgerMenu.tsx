import { NavLink } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <nav className="z-20 absolute md:hidden mt-2 ml-8 bg-blue-50 dark:bg-dark-blue rounded-lg text-sm text-blue-950/70 dark:text-zinc-100">
      <ul className="list-none w-52 p-2">
        <li>
          <NavLink
            end
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 dark:bg-dark-blue-1 text-blue-100 px-3 py-1 rounded-md inline-block w-full"
                : "rounded-md px-3 py-1 inline-block hover:bg-blue-100 dark:hover:bg-dark-blue-1 w-full"
            }
            to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 dark:bg-dark-blue-1 text-blue-100 px-3 py-1 rounded-md inline-block w-full"
                : "px-3 py-1 rounded-md inline-block hover:bg-blue-100 dark:hover:bg-dark-blue-1 w-full"
            }
            to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-950 dark:bg-dark-blue-1 text-blue-100 px-3 py-1 rounded-md inline-block w-full"
                : "px-3 py-1 rounded-md inline-block hover:bg-blue-100 dark:hover:bg-dark-blue-1 w-full"
            }
            to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
