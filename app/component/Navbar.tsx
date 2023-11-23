"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./atom/icon/Icon";
import Logo from "@/public/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPostMobile, setCurrentPostMobile] = useState(0);
  return (
    <nav className="bg-transparent text-white fixed w-full">
      <div className="flex items-center justify-between md:px-20 md:py-2 px-5 py-1">
        {/* Desktop */}
        <div className="hidden md:block">
          <Link href="/">
            <Icon name="proposal-studio" />
          </Link>
        </div>

        {/* mobile */}
        <div className="block md:hidden">
          <Link href={"/"}>
            <Image alt="logo" src={Logo} width={72} />
          </Link>
        </div>
        <div className="hidden md:flex gap-10 ">
          <Link href="/">
            <div className="text-primary underline underline-offset-8">
              Beranda
            </div>
          </Link>
          <Link href="/about">
            <div className="text-baseBlack text-lg font-medium">
              Tentang Kami
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-baseBlack text-lg font-medium">Layanan</div>
          </Link>
          <Link href="/contact">
            <div className="text-baseBlack text-lg font-medium">Klien</div>
          </Link>
          <Link href="/contact">
            <div className="text-baseBlack text-lg font-medium">Kegiatan</div>
          </Link>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } hidden md:hidden md:py-4 md:px-6 bg-primary rounded-full md:text-lg font-medium text-xs py-2 px-3`}
        >
          Hubungi Kami
        </div>

        {/* Hamburger menu */}
        <div className="flex items-center gap-4">
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } block md:block md:py-4 md:px-6 bg-primary rounded-full md:text-lg font-medium text-xs py-2 px-3`}
          >
            Hubungi Kami
          </div>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`${
              isOpen && "open"
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-50`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-baseBlack rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-baseBlack rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-baseBlack rounded-full"></span>
          </div>
        </div>

        {/* Mobile */}
        <div className={`fixed w-full md:hidden top-0 z-40`}>
          <div
            className={`flex flex-col absolute top-[74px] left-0 right-0 p-5 gap-6 bg-white text-baseBlack border-t border-greyscale_label ${
              isOpen ? "translate-y-0" : "-translate-y-[130%]"
            } transition-all duration-500 ease-in-out`}
          >
            <Link
              href={"/"}
              className={`${
                currentPostMobile < 644 && "text-primary"
              } text-base font-medium hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href={"#service"}
              className={`${
                currentPostMobile >= 644 &&
                currentPostMobile < 3025 &&
                "text-primary"
              } text-base font-medium hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href={"#project"}
              className={`${
                currentPostMobile >= 3025 && "text-primary"
              } text-base font-medium hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href={"#project"}
              className={`${
                currentPostMobile >= 3025 && "text-primary"
              } text-base font-medium hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Klien
            </Link>
            <Link
              href={"#project"}
              className={`${
                currentPostMobile >= 3025 && "text-primary"
              } text-base font-medium hover:text-primary transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Kegiatan
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
