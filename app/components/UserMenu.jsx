"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function UserMenu({ user }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  let dashboardLink = "";

  if (user?.role === "user") {
    dashboardLink = "/dashboard/student";
  } else if (user?.role === "admin") {
    dashboardLink = "/dashboard/admin";
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      {/* User Image */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full focus:outline-none"
      >
        <Image
          src={user.image || "/user.png"}
          alt="user"
          width={40}
          height={40}
          className="rounded-full cursor-pointer border border-gray-300"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-gray-800 font-semibold">{user.name}</p>
          </div>

          <ul className="py-1">
            <li>
              <Link
                href={`${dashboardLink}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
