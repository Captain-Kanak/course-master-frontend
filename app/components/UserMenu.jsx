"use client";

import { signOut, useSession } from "next-auth/react";

export default function UserMenu() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex">
      {user && (
        <button onClick={() => signOut()} className="bg-amber-600 py-2 px-3">
          Logout
        </button>
      )}
      <p className="text-black">{user?.name}</p>
    </div>
  );
}
