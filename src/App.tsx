import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Dilemma } from "./sections/Dilemma";
import { Reframe } from "./sections/Reframe";
import { RevealBrand } from "./sections/RevealBrand";
import { WhatWeBuild } from "./sections/WhatWeBuild";
import { BigIdea } from "./sections/BigIdea";
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

        {/* SCENE — Who we are */}
        <RevealBrand />

        {/* SCENE — What we build + the content engine / digital twin */}
        <WhatWeBuild />
        <BigIdea />

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
