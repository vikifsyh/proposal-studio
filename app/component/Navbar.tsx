"use client";
import React, { useState } from "react";
import Icon from "./atom/icon/Icon";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white px-4 py-2 md:px-20 fixed top-0 w-full mx-auto">
      <nav className="flex justify-between items-center">
        {/* Icon proposal-studio */}
        <div className="hidden md:block">
          <Icon name="proposal-studio" />
        </div>

        <div className="block md:hidden ">
          <Image alt="logo" src={Logo} />
        </div>

        {/* Toggle button and Contact button for mobile */}
        <div className="md:hidden flex items-center">
          <Link href={"/"}>
            <button className="border border-primary py-3 px-4 text-primary font-medium text-sm rounded-full hover:bg-primary focus:ring-4 focus:ring-blue-300 ease-in focus:text-white hover:text-white duration-300 mr-2 ">
              Hubungi Kami
            </button>
          </Link>
          <button onClick={toggleMenu}>
            <Icon name={isMenuOpen ? "close" : "menu"} />
          </button>
        </div>

        {/* Menu items for larger screens */}
        <div className="hidden md:flex md:flex-row flex-col items-center gap-10 font-medium text-lg">
          <div className="gap-2 text-primary md:underline underline-offset-4">
            Beranda
          </div>
          <div>Tentang Kami</div>
          <div>Layanan</div>
          <div>Klien</div>
          <div>Kegiatan</div>
        </div>

        {/* Contact button for larger screens */}

        <div className="hidden md:flex">
          <Link href={"/"}>
            <button className="border border-primary py-4 px-6 text-primary font-medium text-lg rounded-full hover:bg-primary hover:text-white ease-in duration-300">
              Hubungi Kami
            </button>
          </Link>
        </div>
      </nav>

      {/* Responsive Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 mt-2 text-sm font-medium gap-6 -ml-4">
          <div className="text-primary">Beranda</div>
          <div className="mt-4">Tentang Kami</div>
          <div className="mt-4">Layanan</div>
          <div className="mt-4">Klien</div>
          <div className="mt-4">Kegiatan</div>
        </div>
      )}
    </header>
  );
}
