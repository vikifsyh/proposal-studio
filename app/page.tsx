import React from "react";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Testimoni from "./component/Testimoni";
import Cta from "./component/Cta";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import About from "./component/About";
import Klien from "./component/Klien";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Hero />
      <About />
      <Service />
      <Klien />
      <Testimoni />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
