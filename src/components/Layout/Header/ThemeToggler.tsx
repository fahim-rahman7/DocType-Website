"use client";

import Link from "next/link";

const ThemeToggler = () => {
  return (
    <Link
      href="/contact"
      className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
    >
      Career
    </Link>
  );
};

export default ThemeToggler;