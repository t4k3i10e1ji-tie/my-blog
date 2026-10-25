"use client"

import Link from "next/link";

function Header() {
  return (
    <header className="bg-[#333333] flex justify-between p-[16px_24px] text-white font-semibold">
      <Link href="/">Blog</Link>
      <Link href="/contact">お問い合わせ</Link>
    </header>
  );
}

export default Header;