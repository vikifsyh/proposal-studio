import Image from "next/image";
import React from "react";
import Bisnis from "@/public/service/bisnis.png";
import Kegiatan from "@/public/service/kegiatan.png";
import Sponsorship from "@/public/service/sponsorship.png";
import Investasi from "@/public/service/investasi.png";
import Kerjasama from "@/public/service/kerjasama.png";
import Sewa from "@/public/service/sewa.png";
import Penawaran from "@/public/service/penawaran.png";
import Company from "@/public/service/company.png";
import CurriculumVitae from "@/public/service/cv.png";

const service = [
  {
    id: 1,
    title: "Proposal Bisnis",
    alt: "bisnis",
    image: Bisnis,
  },
  {
    id: 2,
    title: "Proposal Kegiatan",
    alt: "kegiatan",
    image: Kegiatan,
  },
  {
    id: 3,
    title: "Proposal Sponsorship",
    alt: "sponsorship",
    image: Sponsorship,
  },
  {
    id: 4,
    title: "Proposal Investasi",
    alt: "investasi",
    image: Investasi,
  },
  {
    id: 5,
    title: "Proposal Kerjasama",
    alt: "kerjasama",
    image: Kerjasama,
  },
  {
    id: 6,
    title: "Proposal Sewa Tempat",
    alt: "sewa",
    image: Sewa,
  },
  {
    id: 7,
    title: "Proposal Penawaran Produk",
    alt: "penawaran",
    image: Penawaran,
  },
  {
    id: 8,
    title: "Company Profile",
    alt: "companyprofile",
    image: Company,
  },
  {
    id: 9,
    title: "Curriculum Vitae",
    alt: "cv",
    image: CurriculumVitae,
  },
];

export default function Service() {
  return (
    <div className="my-14 md:my-[100px] mx-5 md:mx-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl text-baseBlack font-bold ">
          Layanan Unggulan Kami
        </h2>
        <p className="font-medium text-sm text-baseBlack mt-4 md:mt-6">
          Proposal Studio menyediakan berbagai pelayanan pembuatan proposal
          antara lain
        </p>
      </div>
      <div className="mt-8 md:mt-16 ">
        <div className="md:grid grid-cols-3 md:gap-8">
          {service.map((item) => {
            return (
              <div
                key={item.id}
                className="px-3 py-3 mb-3 shadow-md rounded-3xl justify-center items-center md:w-[416px] md:h-[349px]"
              >
                <Image alt={item.alt} src={item.image} />
                <h2 className="mt-5 text-lg md:text-2xl font-semibold text-center">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
