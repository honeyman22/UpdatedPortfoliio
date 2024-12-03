import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="npl-header px-6  sm:px-10 my-5 w-full">
      <ul className="flex ">
        <li className="px-5 py-2">
          <Link href="/teams">Home</Link>
        </li>
        <li className="px-5 py-2">
          <Link href="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
