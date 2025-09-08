import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    name: "Home",
    path: "/home",
    id: 1,
  },
  {
    name: "About Us",
    path: "/about-us",
    id: 2,
  },
  {
    name: "Services",
    path: "/services",
    id: 3,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 4,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 5,
  },
];

const NavBar = () => {
  const links = navigationData.map((route) => <Link route={route}></Link>);
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between mx-10">
        <span className="flex" onClick={() => setOpen(!open)}>
          {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}

          <ul
            className={`md:hidden absolute duration-1000
          ${open ? "top-8" : "-top-40"}
          bg-amber-300`}
          >
            {links}
          </ul>

          <h3 className="ml-4">My Navbar</h3>
        </span>
        <ul className="md:flex hidden ">{links}</ul>

        {/* <ul className="flex">
        {navigationData.map((route) => (
            <li className="mr-10"><a href={route.path}>{route.name}</a></li>
         
        ))}
      </ul> */}

        <button>Sign In</button>
      </nav>
    </>
  );
};

export default NavBar;
