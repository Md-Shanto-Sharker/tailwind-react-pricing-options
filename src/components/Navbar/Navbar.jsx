import React, { useState } from "react";
import Links from "./Links";
import { Menu, X } from "lucide-react";
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {

    const links = navigationData.map((route) => (
          <Links route={route}></Links>
        ))
    const [open,setOpen] = useState(false)
  return (
    <nav className="flex justify-between mx-10 text-black">
      <span className="flex" onClick={()=> setOpen(!open)}>
        {
            open?<X className="md:hidden"></X> :  <Menu className="md:hidden"></Menu>
        }
       
       <ul className={`md:hidden  absolute duration-1000 ${open ? 'top-8 ' : '-top-50 ' } bg-amber-200`}>
        {
        links
       }
       </ul>
        <h1 className="ml-4 ">My Navbar</h1>
      </span>
      <ul className="md:flex gap-20 hidden">
        {
            links
        }
      </ul>

      {/* <ul className="flex">
        {navigationData.map((route) => (
          <li className="mr-10" route={route}>
            <a href={route.path}></a>
             {route.name}
          </li>
        ))}
      </ul> */}

      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
