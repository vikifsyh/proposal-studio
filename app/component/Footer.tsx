import React from "react";
import Icon from "./atom/icon/Icon";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <div className="mx-2 md:mx-10">
      <div className="pt-14 pb-10 px-5 md:px-[120px] bg-baseBlack rounded-t-2xl md:rounded-t-3xl">
        <div className="w-[300px] md:w-[1151px]">
          <div className="justify-center items-center flex">
            <div className="hidden md:block">
              <Icon name="proposal-studio" />
            </div>

            <div className="block md:hidden ">
              <Image alt="logo" src={Logo} />
            </div>
          </div>
          <div className="md:flex md:justify-between">
            <div className="mt-8 md:mt-16">
              <h2 className="font-bold text-base md:text-lg text-white">
                Jam Kerja
              </h2>
              <div className="flex gap-3 mt-3 md:mt-6">
                <Icon name="clock" />
                <p className="text-white text-sm md:text-lg font-medium">
                  08.00 WIB - 17.00 WIB
                </p>
              </div>
              <div className="flex gap-3 mt-3 md:mt-6">
                <Icon name="calender" />
                <p className="text-white text-sm md:text-lg font-medium">
                  Sabtu, Minggu, dan Tanggal Merah Libur
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-16">
              <h2 className="font-bold text-base md:text-lg text-white">
                Kontak Kami
              </h2>
              <div className="flex gap-3 mt-3 md:mt-6">
                <Icon name="calender" />
                <p className="text-white text-sm md:text-lg font-medium">
                  Whatsapp : 0812-2683-1649
                </p>
              </div>
              <div className="flex gap-3 mt-3 md:mt-6">
                <Icon name="mail" />
                <p className="text-white text-sm md:text-lg font-medium">
                  contactproposalstudio@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-16">
              <h2 className="font-bold text-base md:text-lg text-white">
                Sosial Media
              </h2>
              <div className="flex gap-3 mt-3 md:mt-6">
                <Link href={"/"}>
                  <Icon name="instagram" />
                </Link>

                <Link href={"/"}>
                  <Icon name="facebook" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex justify-center items-center mt-16">
              <h2 className="text-base text-gray-400 text-center">
                COPYRIGHT PROPOSAL STUDIO 2023 © ALL RIGHT RESERVED
              </h2>
            </div>
          </div>

          <div className="block md:hidden mt-8">
            <h2 className="text-xs md:text-base text-gray-400 text-center">
              COPYRIGHT PROPOSAL STUDIO 2023 <br />© ALL RIGHT RESERVED
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
