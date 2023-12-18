import React from "react";
import Carousel from "./Swiper";

// import CarouselPagination from "./CarouselPagiantion";
export default function Klien() {
  return (
    <div
      id="klien"
      className="mt-14 lg:mt-[100px] bg-cover bg-center flex items-center justify-center flex-col"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <div className="mx-5 text-center w-[375px] lg:w-[860px]">
        <h2 className="font-bold text-xl lg:text-4xl text-baseBlack">
          Kegiatan Terkini Kami
        </h2>
        <p className="text-base lg:text-xl text-baseBlack font-medium mt-3 lg:mt-6">
          Dapatkan Wawasan Mendalam melalui Serangkaian Kegiatan, Termasuk
          Webinar Terbaru Kami yang Penuh Informasi.
        </p>
      </div>
      <div className="mb-14">
        <Carousel />
      </div>
    </div>
  );
}
