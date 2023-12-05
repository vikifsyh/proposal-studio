"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Marketing from "@/public/about/marketing.jpg";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";

const swiper = [
  {
    id: 1,
    image: Marketing,
  },
  {
    id: 2,
    image: Marketing,
  },
  {
    id: 3,
    image: Marketing,
  },
  {
    id: 4,
    image: Marketing,
  },
  {
    id: 5,
    image: Marketing,
  },
];

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-8 lg:mt-16 mx-auto max-w-screen-lg overflow-hidden"
      >
        {swiper.map((items) => {
          return (
            <SwiperSlide key={items.id} className="swiper-slide">
              <div className="lg:h-[460px] lg:w-[325px] p-4 bg-white rounded-3xl shadow-md max-w-full mx-auto">
                <Image
                  alt="marketing"
                  src={items.image}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
