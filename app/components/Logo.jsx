import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-1">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h1 className="text-orange-600 text-2xl font-bold">Course Master</h1>
      </div>
    </Link>
  );
}
