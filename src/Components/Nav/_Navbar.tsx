{/*

* Navbar Component for Next.js Application
  
  */}

{/* Version: 1.0.0
  


  
  */}  


import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

interface NavbarItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

interface NavbarProps {
  items: NavbarItem[];
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <nav className="flex gap-2 items-center">
      {items.map((item) =>
        item.dropdown ? (
          <Menu as="div" className=" relative" key={item.label}>
            <MenuButton className="inline-flex items-center px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none capitalize">
              {item.label}
              <FaChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </MenuButton>
            <MenuItems className="absolute left-0 mt-2 w-max origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
              <div className="px-1 py-1 cursor-pointer">
                {item.dropdown.map((drop) => (
                  <MenuItem key={drop.label}>
                    <Link
                      href={drop.href}
                      className="flex rounded-md items-center w-full px-2 py-2 text-md text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {drop.label}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        ) : (
          <Link
            key={item.label}
            href={
              item.href ||
              `/${
                item.label === "Home"
                  ? ""
                  : item.label.toLowerCase().replace(/\s+/g, "-")
              }`
            }
            className="inline-flex items-center px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none capitalize"
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
