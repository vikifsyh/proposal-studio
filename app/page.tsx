import React from "react";
import Hero from "./component/Hero";
import Service from "./component/Service";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Service />
    </div>
  );
}
