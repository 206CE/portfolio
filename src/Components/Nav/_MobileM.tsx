"use client";

{/*

  * This file contains a React component for a mobile navigation menu.
  * It uses the `useState` hook to manage the open/close state of the menu.
  * The component supports dropdown items and uses icons for better UX.
  
  */}

{/* Version: 1.0.0
  
 > Make more flexible with props

  
  */}  


import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Menu, MenuButton, MenuItems } from '@headlessui/react';

interface MobileNavItem {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}

interface MobileMenuProps {
  items: MobileNavItem[];
}

export default function MobileM({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 bg-white shadow hover:bg-gray-100 focus:outline-none"
        aria-label="Open main menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-40  bg-opacity-40"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col gap-2 p-6 pt-16">
          {items.map((item) =>
            item.dropdown ? (
              <Menu as="div" className="relative" key={item.label}>
                <MenuButton className="w-full flex items-center justify-between py-2 px-4 rounded hover:bg-gray-100 text-gray-700">
                  {item.label}
                  <FaChevronDown className="ml-2 h-4 w-4" />
                </MenuButton>
                <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none">
                  <div className="px-1 py-1">
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.label}
                        href={drop.href}
                        className="flex rounded-md items-center w-full px-2 py-2 text-md text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            ) : (
              <Link
                key={item.label}
                href={item.href || `/${item.label === 'Home' ? '' : item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="py-2 px-4 rounded hover:bg-gray-100 text-gray-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
