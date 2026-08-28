import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Dilemma } from "./sections/Dilemma";
import { Reframe } from "./sections/Reframe";
import { RevealBrand } from "./sections/RevealBrand";
import { BigIdea } from "./sections/BigIdea";
import { WhatWeBuild } from "./sections/WhatWeBuild";
import { DigitalTwin } from "./sections/DigitalTwin";
import { Transformation } from "./sections/Transformation";
import { Proof } from "./sections/Proof";
import { WhoThisFor } from "./sections/WhoThisFor";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-tnk-paper font-body text-tnk-ink">
      <Navbar />

      <main>
        <Hero />

        {/* SCENE — The founder's dilemma */}
        <Dilemma />

        {/* SCENE — The reframe */}
        <Reframe />

        {/* SCENE — The TNK reveal (Answer) */}
        <RevealBrand />
        <BigIdea />

        {/* SCENE — The content engine (System) */}
        <WhatWeBuild />
        <DigitalTwin />

        {/* SCENE — The evidence (Proof) */}
        <Proof />

        {/* SCENE — The transformation */}
        <Transformation />

        {/* SCENE — The trust */}
        <WhoThisFor />

        {/* SCENE — The decision */}
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
