import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-full flex justify-between mx-auto py-2 md:py-4 px-2 md:px-10">
        <div>
          <Image
            src={"/images/logo_navbar.png"}
            alt="logo_navbar"
            width={157}
            height={32}
          />
        </div>
        <button className="flex">Đăng nhập (Admin)</button>
      </div>
    </nav>
  );
};
