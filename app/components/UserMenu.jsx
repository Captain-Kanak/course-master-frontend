"use client";

import { useSession } from "next-auth/react";

export default function UserMenu() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="text-black">
      <p>{user?.email}</p>
    </div>
  );
}
