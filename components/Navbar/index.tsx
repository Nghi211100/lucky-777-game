"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Login } from "../Login";
import CheckLogin from "@/app/features/checkLogin";

export const Navbar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const checkLogin = CheckLogin();

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
        {checkLogin ? (
          <p>Đã đăng nhập</p>
        ) : (
          <button className="flex" onClick={() => setOpenLoginModal(true)}>
            Đăng nhập (Admin)
          </button>
        )}
      </div>
      <Login open={openLoginModal} setOpen={setOpenLoginModal} />
    </nav>
  );
};
