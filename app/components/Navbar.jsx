"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const status = "authenticated";

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-orange-500" : "text-gray-700"
          } hover:text-orange-500 transition-colors font-semibold text-lg`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/courses"
          className={`${
            pathname === "/products" ? "text-orange-500" : "text-gray-700"
          } hover:text-orange-500 transition-colors font-semibold text-lg`}
        >
          Courses
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50/90 backdrop-blur shadow-md z-50">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-0">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md cursor-pointer bg-transparent hover:bg-transparent focus:bg-transparent"
            >
              {isOpen ? (
                <IoMdClose size={30} className="text-gray-700" />
              ) : (
                <HiMenu size={30} className="text-gray-700" />
              )}
            </button>

            {isOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            )}
          </div>

          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3 lg:gap-4">
          {status == "authenticated" ? (
            <>
              {/* <div className="border-3 border-orange-500 rounded-full">
                <Image
                  src={session?.user?.image}
                  width={40}
                  height={40}
                  alt="User Image"
                  className="rounded-full"
                />
              </div> */}
              <button
                onClick={() => signOut()}
                className="bg-orange-500 py-1 lg:py-2 px-3 lg:px-4 rounded-lg cursor-pointer hover:bg-orange-600 transition-all duration-200 lg:font-semibold"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="bg-orange-500 py-1 lg:py-2 px-3 lg:px-4 rounded-lg cursor-pointer hover:bg-orange-600 transition-all duration-200 lg:font-semibold">
                  Log In
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-orange-500 py-1 lg:py-2 px-3 lg:px-4 rounded-lg cursor-pointer hover:bg-orange-600 transition-all duration-200 lg:font-semibold">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
