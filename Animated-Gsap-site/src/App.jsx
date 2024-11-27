import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <div className="relate mid-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
}
