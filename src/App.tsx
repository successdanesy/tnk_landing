import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Hero } from "./sections/Hero";
import { Dilemma } from "./sections/Dilemma";
import { Reframe } from "./sections/Reframe";
import { RevealBrand } from "./sections/RevealBrand";
import { Services } from "./sections/Services";
// import { Approach } from "./sections/Approach";
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

        {/* The problem */}
        <Dilemma />

        {/* Who we are */}
        <RevealBrand />
        <Reframe />

        {/* What we do + how we approach it */}
        <Services />
        {/* <Approach /> */}

        {/* Our work */}
        <Proof />

        {/* Who we work with */}
        <WhoThisFor />

        {/* The decision */}
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
