import React from "react";
import Icon from "./atom/icon/Icon";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="mt-24 md:mt-[170px] w-full mx-auto flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="w-[375px] md:w-[1055px] text-center flex flex-col items-center mt-2">
        <div className="px-4 py-2 rounded-full md:px-4 md:py-3 bg-greyscale/10 w-fit">
          <p className="text-xs font-medium md:text-sm text-baseBlack">
            JASA PROPOSAL PROFESIONAL
          </p>
        </div>
        <div className="items-center mt-2">
          <h1 className="text-4xl md:text-7xl font-bold">
            Realisasikan Tujuanmu Bersama
            <span className="text-primary"> PROPOSAL</span>
            <span className="text-secondary"> STUDIO</span>
          </h1>
        </div>
        <div className="mt-[14px]">
          <p className="text-sm md:text-xl font-medium text-baseBlack">
            Percayakan kesuksesan proposal Anda kepada kami. Tim profesional dan
            berpengalaman dari kami akan membantu Anda meraih kesuksesan yang
            lebih besar
          </p>
        </div>
        <div className="mt-10">
          <Link href={"/"}>
            <div className="bg-primary hover:bg-primary/50 hover:ease-in duration-200 rounded-full flex py-4 px-6 md:py-5 md:px-8 gap-2">
              <Icon name="whatsapp" />
              <p className="font-medium text-base md:text-lg text-white">
                Konsultasi Gratis
              </p>
            </div>
          </Link>
        </div>

        {/* Keunggulan kami */}
        <div className="bg-primary/70 mb-[100px] w-[1352px] rounded-[20px] mt-[60px] p-[60px] hidden md:block">
          <h2 className="text-white text-[32px] font-semibold">
            Keunggulan Memilih Layanan Kami
          </h2>
          <div className="flex mt-10 justify-center items-center">
            <div className="p-[10px] items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                <Icon name="trusted" />
              </div>
              <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px]">
                Terpercaya
              </h2>
            </div>
            <div className="p-[10px] items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                <Icon name="tim" />
              </div>
              <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px] whitespace-nowrap">
                Tim Profesional
              </h2>
            </div>
            <div className="p-[10px] items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                <Icon name="lightning" />
              </div>
              <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px] whitespace-nowrap">
                Pengerjaan Cepat
              </h2>
            </div>
            <div className="p-[10px] items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                <Icon name="chat" />
              </div>
              <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px] whitespace-nowrap">
                Gratis Konsultasi
              </h2>
            </div>
            <div className="p-[10px] items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                <Icon name="pen" />
              </div>
              <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px] whitespace-nowrap">
                Bebas Revisi
              </h2>
            </div>
            <div className="p-[10px] items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                <Icon name="smile" />
              </div>
              <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px] whitespace-nowrap">
                Pelayanan Ramah
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="bg-primary/70 my-14 w-[327px] rounded-xl block md:hidden">
          <h2 className="text-lg font-semibold text-white px-14 py-3">
            Keunggulan Memilih Layanan Kami
          </h2>
          <div className="mt-10 mb-10">
            <div className="px-8 items-center flex-col justify-center flex">
              <div className="rounded-full bg-white p-5 gap-2 overflow-hidden w-[108px] h-[108px] items-center flex justify-center">
                <Icon name="trusted" />
              </div>
              <h2 className="font-medium text-2xl text-white justify-center items-center mt-[10px]">
                Terpercaya
              </h2>
            </div>
            <div className="justify-center flex gap-2">
              <Icon name="circle-active" />
              <Icon name="circle-nonActive" />
              <Icon name="circle-nonActive" />
              <Icon name="circle-nonActive" />
              <Icon name="circle-nonActive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
