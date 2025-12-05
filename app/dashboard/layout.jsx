"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const role = session?.user?.role || "user";

  useEffect(() => {
    if (status === "loading") return;

    const role = session?.user?.role;

    if (!role) {
      router.push("/login");
      return;
    }

    // Role protection
    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
      router.push("/dashboard/student");
    }

    if (pathname.startsWith("/dashboard/student") && role !== "user") {
      router.push("/dashboard/admin");
    }
  }, [session, status, pathname, router]);

  const sidebarLinks = {
    user: [
      { label: "Overview", href: "/dashboard/student" },
      { label: "My Courses", href: "/dashboard/student/courses" },
      { label: "Assignments", href: "/dashboard/student/assignments" },
      { label: "Profile", href: "/dashboard/student/profile" },
    ],
    admin: [
      { label: "Admin Panel", href: "/dashboard/admin" },
      { label: "Manage Courses", href: "/dashboard/admin/courses" },
      { label: "Enrollments", href: "/dashboard/admin/enrollments" },
      { label: "Assignments Review", href: "/dashboard/admin/review" },
    ],
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-orange-600">Dashboard</h2>

        <ul className="space-y-2">
          {sidebarLinks[role].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md font-medium transition ${
                  pathname === item.href
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded-md shadow-sm">{children}</div>
      </main>
    </div>
  );
}
