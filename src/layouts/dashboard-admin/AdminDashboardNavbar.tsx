import Link from "next/link";

export default function AdminDashboardNavbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>

        <li>
          <Link href="/dashboard/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
