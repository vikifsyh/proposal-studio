"use client";
import { useState } from "react";
import Icon from "./atom/icon/Icon";
import Image from "next/image";
import Marketing from "@/public/proposal/marketing.jpg";
import Sponsorship from "@/public/proposal/sponsorship.jpg";
import CompanyProfile from "@/public/proposal/Business Company Profil Coverbook - Made with PosterMyWall.jpg";
import Business from "@/public/proposal/business.jpg";
import Project from "@/public/proposal/Project Proposal.jpg";

const images = [
  {
    image: Marketing,
  },
  {
    image: Business,
  },
  {
    image: Sponsorship,
  },
  {
    image: CompanyProfile,
  },

  {
    image: Project,
  },
];
export default function Proposal() {
  return (
    <div className="mx-20 mt-[100px]">
      <div className="flex justify-between">
        <div className="w-[695px] h-[117px]">
          <h2 className="text-4xl text-baseBlack font-bold">
            Preview Proposal High Quality
          </h2>
          <p className="font-medium text-xl text-baseBlack mt-3">
            Sebuah Kilas Balik pada Proyek-proyek Berkualitas yang Telah Kami
            Selesaikan dengan Penuh Keberhasilan.
          </p>
        </div>
        <div className="flex gap-6">
          <button>
            <Icon name="arrow-left" />
          </button>
          <button>
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden overflow-y-hidden overflow-x-scroll scrollbar-hide">
        <div className="mt-8 md:mt-16 flex gap-6">
          {images.map((data) => {
            return (
              <div className="w-[300px] h-[424px]">
                <Image
                  alt="proposal"
                  src={data.image}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
