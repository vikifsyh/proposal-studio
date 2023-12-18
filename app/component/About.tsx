import React from "react";
import Profil from "@/public/about/profil.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className="mx-20 my-[100px]">
      <div className="grid grid-cols-2 gap-40">
        <h2 className=" font-bold text-4xl text-baseBlack">
          Mengenal Proposal Studio Solusi Proposal Komersial Profesional untuk
          Sukses Bisnis Anda
        </h2>
        <p className="text-border text-xl font-medium">
          Proposal Studio adalah penyedia jasa pembuatan proposal komersial.
          Proposal Studio telah memiliki ratusan konsumen, telah dipercaya
          mengerjakan proposal di berbagai project nasional, dan telah dipercaya
          mengisi materi pembuatan proposal di organisasi maupun komunitas di
          kampus ternama di Indonesia.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[120px] mt-6">
        <Image alt="profil" src={Profil} className="rounded-2xl" />
        <div className="grid grid-cols-2 gap-40">
          <div className="justify-center items-center flex flex-col">
            <p className="font-bold text-baseBlack text-6xl">2+</p>
            <p className="mt-3 font-medium text-border text-xl">
              Years of experience
            </p>
          </div>
          <div className="justify-center items-center flex flex-col">
            <p className="font-bold text-baseBlack text-6xl">200+</p>
            <p className="mt-3 font-medium text-border text-xl">
              Project completed
            </p>
          </div>
          <div className="justify-center items-center flex flex-col">
            <p className="font-bold text-baseBlack text-6xl">100%</p>
            <p className="mt-3 font-medium text-border text-xl">
              Successfull projects
            </p>
          </div>
          <div className="justify-center items-center flex flex-col">
            <p className="font-bold text-baseBlack text-6xl">200+</p>
            <p className="mt-3 font-medium text-border text-xl">Happy client</p>
          </div>
        </div>
      </div>
    </div>
  );
}
