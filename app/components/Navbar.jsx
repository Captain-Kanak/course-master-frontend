"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import UserMenu from "./UserMenu";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  console.log(user);

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-orange-500" : "text-gray-700"
          } hover:text-orange-500 transition-all duration-200 font-semibold text-lg`}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/courses"
          className={`${
            pathname === "/courses" ? "text-orange-500" : "text-gray-700"
          } hover:text-orange-500 transition-all duration-200 font-semibold text-lg`}
        >
          Courses
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 lg:px-0">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {isOpen ? (
              <IoMdClose size={28} className="text-gray-700" />
            ) : (
              <HiMenu size={28} className="text-gray-700" />
            )}
          </button>
          <Logo />
        </div>

        {/* Middle: Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-6">{links}</ul>
        </div>

        {/* Right: User menu + Register Button */}
        <div className="flex items-center gap-2">
          <UserMenu user={user} />

          {!user && (
            <Link href="/register">
              <button className="bg-orange-500 text-white py-2 px-3 cursor-pointer hover:bg-orange-600 transition-all duration-200 rounded-md">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-50 shadow-md border-t border-gray-200">
          <ul className="flex flex-col gap-2 px-4 py-3">
            {links}

            {/* Mobile Register Button (conditional) */}
            {!user && (
              <li>
                <Link href="/register">
                  <button className="w-full bg-orange-500 text-white py-2 px-3 cursor-pointer hover:bg-orange-600 transition-all duration-200 rounded-md mt-2">
                    Register
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
