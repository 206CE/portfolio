/* 1.0.1


  Explanation:

  [{ label: "Contact", href: "/contact" },
  { label: "Services", dropdown: [
   { label: "service1", href: "/sarvice1" }
    ]},];

*/


"use client";
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";

interface NavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

interface NavigationProps {
  items: NavItem[];
  itemClassName?: string;
}

export default function Navigation({ items, itemClassName = "" }: NavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const commonLinkClass = `flex ${itemClassName}`;

  const renderItem = (item: NavItem, closeOnClick = false) =>
    item.dropdown ? (
      <Menu as="nav" key={item.label} className="relative">
        <MenuButton className={`cursor-pointer ${commonLinkClass}`}>
          {item.label}
          <FaChevronDown className=" mt-2 ml-2 h-4 w-4" aria-hidden="true" />
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className="absolute z-50  w-max cursor-pointer">
            {item.dropdown.map((drop) => (
              <MenuItem key={drop.label}>
                <Link
                  href={drop.href}
                  className={commonLinkClass}
                  onClick={closeOnClick ? () => setOpen(false) : undefined}
                >
                  {drop.label}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    ) : (
      <Link
        key={item.label}
        href={
          item.href ||
          `/${
            item.label === "Home" ? "" : item.label.toLowerCase().replace(/\s+/g, "-")
          }`
        }
        className={commonLinkClass}
        onClick={closeOnClick ? () => setOpen(false) : undefined}
      >
        {item.label}
      </Link>
    );

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex py-4 gap-2 items-center text-2xl font-extrabold z-10">
        {items.map((item) => renderItem(item))}
      </div>

      {/* Hamburger */}
      <button
        className={`md:hidden fixed top-4 right-4 z-10 p-2 cursor-pointer ${commonLinkClass}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 pt-16">
          {items.map((item) => renderItem(item, true))}
        </div>
      </div>
    </nav>
  );
}
