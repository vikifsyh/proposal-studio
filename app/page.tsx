import React from "react";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Testimoni from "./component/Testimoni";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Service />
      <Testimoni />
    </div>
  );
}
