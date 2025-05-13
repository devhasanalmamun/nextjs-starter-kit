import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
      </ul>
    </nav>
  );
}
