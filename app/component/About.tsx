import React from "react";
import Left from "@/public/about/left.png";
import Center from "@/public/about/center.png";
import Right from "@/public/about/right.png";
import Image from "next/image";
import Icon from "./atom/icon/Icon";
import LeftMobile from "@/public/about/leftMobile.png";
import CentertMobile from "@/public/about/centerMobile.png";
import RightMobile from "@/public/about/rightMobile.png";

export default function About() {
  return (
    <div id="about" className="mx-5 lg:mx-20 mt-14 lg:mt-[100px]">
      <div className="flex justify-center">
        <h1 className="hidden lg:block text-4xl font-bold text-baseBlack">
          Mengenal Lebih Dekat
          <span className="text-primary"> Proposal</span>
          <span className="text-secondary"> Studio</span>
        </h1>
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
          <h2 className="text-baseBlack text-xl lg:text-3xl font-bold mt-6">
            Solusi Terbaik Proposal Anda
          </h2>
          <p className="font-medium text-base lg:text-2xl mt-5 text-justify text-baseBlack">
            Proposal Studio adalah penyedia jasa pembuatan proposal komersial
            seperti proposal bisnis, proposal kegiatan, proposal sponsorship,
            proposal kerjasama, dan proposal komersial lainnya. <br />
            Proposal Studio telah dipercaya mengerjakan proposal di berbagai
            project nasional , dan telah dipercaya mengisi materi pembuatan
            proposal di organisasi maupun komunitas di kampus ternama di
            Indonesia.
          </p>
          <div className="flex mt-5 lg:mt-12 justify-between lg:w-[477px] bg-primary/70 items-center py-2 px-8 rounded-2xl">
            <div className=" text-white">
              <h2 className="text-center font-bold text-2xl lg:text-5xl">
                200+
              </h2>
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
            <div className="text-white">
              <h2 className="text-center font-bold text-2xl lg:text-5xl">
                200+
              </h2>
              <h2 className="text-base lg:text-2xl font-semibold">
                Klien Puas
              </h2>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-4 ">
            <div className="w-[150px] h-[389px] mt-10">
              <Image src={Left} alt="about" width={1000} height={1000} />
            </div>
            <div className="w-[197px] h-[471px]">
              <Image src={Center} alt="about" width={1000} height={1000} />
            </div>
            <div className="w-[150px] h-[389px] mt-10">
              <Image src={Right} alt="about" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
