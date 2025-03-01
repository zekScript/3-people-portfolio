"use client";

import Link from "next/link";

const NavContent: React.FC = () => {
  return (
    <>
      {/* Content of the nav bar */}
      <div className="w-full flex justify-end mr-12 gap-5 h-[50px] items-center font-bold text-xl text-white">
        <Link className="text-white" href="/">
          Home
        </Link>
        <Link className="text-white" href="/wiki/eivydas">
          Eivydas
        </Link>
        <Link className="text-white" href="/wiki/danielius">
          Danielius
        </Link>
        <Link className="text-white" href="/wiki/vakaris">
          Vakaris
        </Link>
      </div>
    </>
  );
};

export default NavContent;
