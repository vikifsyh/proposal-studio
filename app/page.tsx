import React from "react";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Testimoni from "./component/Testimoni";
import Cta from "./component/Cta";
import Faq from "./component/Faq";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Service />
      <Testimoni />
      <Faq />
      <Cta />
    </div>
  );
}
