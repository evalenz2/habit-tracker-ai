import Link from 'next/link';

// This is like making a menu for your website
export default function SimpleNav() {
  return (
    <nav className="p-4 bg-gray-100">
      {/* Link is like <a> but better for Next.js apps */}
      <Link href="/" className="mr-4">
        Home
      </Link>
      <Link href="/about" className="mr-4">
        About
      </Link>
      <Link href="/dashboard">
        Dashboard
      </Link>
    </nav>
  );
}