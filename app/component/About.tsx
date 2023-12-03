import React from "react";
import Image from "next/image";
import Icon from "./atom/icon/Icon";
import LeftMobile from "@/public/about/leftMobile.png";
import CentertMobile from "@/public/about/centerMobile.png";
import Marketing from "@/public/about/marketing.jpg";
import Business from "@/public/about/business.jpg";
import Sponsorship from "@/public/about/sponsorship.jpg";
import Project from "@/public/about/Project Proposal.jpg";
import Company from "@/public/about/Business Company Profil Coverbook - Made with PosterMyWall.jpg";

export default function About() {
  return (
    <div id="about" className="mx-5 lg:mx-20 mt-14 lg:mt-[100px]">
      <div className="flex justify-center">
        <h1 className="block lg:hidden text-center text-xl font-bold text-baseBlack">
          Mengenal Lebih Dekat
          <br />
          <span className="text-primary"> Proposal</span>
          <span className="text-secondary"> Studio</span>
        </h1>
      </div>
      <div className=" lg:flex lg:justify-between mt-8 lg:mt-16">
        <div className="lg:w-[769px]">
          <div className="block lg:hidden">
            <div className="flex gap-2">
              <div className="w-[106px] h-[177px] mt-3">
                <Image
                  src={LeftMobile}
                  alt="about"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-[106px] h-[204px]">
                <Image
                  src={CentertMobile}
                  alt="about"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-[106px] h-[177px] mt-3">
                <Image
                  src={LeftMobile}
                  alt="about"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <h1 className="hidden lg:block text-4xl font-bold text-baseBlack">
            Mengenal Lebih Dekat
            <span className="text-primary"> Proposal</span>
            <span className="text-secondary"> Studio</span>
          </h1>
          <p className="font-medium text-base lg:text-2xl mt-5 text-justify text-baseBlack">
            Proposal Studio adalah penyedia jasa pembuatan proposal komersial
            seperti proposal bisnis, proposal kegiatan, proposal sponsorship,
            proposal kerjasama, dan proposal komersial lainnya. <br />
            Proposal Studio telah dipercaya mengerjakan proposal di berbagai
            project nasional , dan telah dipercaya mengisi materi pembuatan
            proposal di organisasi maupun komunitas di kampus ternama di
            Indonesia.
          </p>
          <div className="flex mt-5 lg:mt-7 justify-between lg:w-full bg-primary/70 items-center py-2 px-8 rounded-2xl">
            <div className="flex-1 text-white text-center">
              <h2 className="font-bold text-2xl lg:text-5xl">200+</h2>
              <h2 className="text-base lg:text-2xl font-semibold">
                Projek Selesai
              </h2>
            </div>
            <div className="hidden lg:block">
              <Icon name="line" />
            </div>
            <div className="block lg:hidden">
              <Icon name="linbeMobile" />
            </div>
            <div className="flex-1 text-white text-center">
              <h2 className="font-bold text-2xl lg:text-5xl">200+</h2>
              <h2 className="text-base lg:text-2xl font-semibold">
                Klien Puas
              </h2>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-2 h-[430px]">
            <div className="h-[430px] mt-10 ">
              <div className="w-[120px] h-[225px] flex items-center justify-center">
                <Image
                  src={Business}
                  alt="about"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              <div className="w-[120px] h-[145px] flex items-center justify-center mt-2">
                <Image
                  src={Project}
                  alt="about"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="w-[200px] h-[450px]">
              <Image
                src={Marketing}
                alt="about"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="h-[430px] mt-10">
              <div className="w-[120px] h-[145px] flex items-center justify-center">
                <Image
                  src={Sponsorship}
                  alt="about"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-[120px] h-[225px] mt-2 flex items-center justify-center">
                <Image
                  src={Company}
                  alt="about"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
