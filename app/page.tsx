"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Purpose from "../components/Purpose";
import QuickPaths from "../components/QuickPaths";
import CareerTree from "../components/CareerTree";
import StreamGrid from "../components/StreamGrid";
import FeaturedCareers from "../components/FeaturedCareers";
import GuidanceSection from "../components/GuidanceSection";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedLevelOneSlug, setSelectedLevelOneSlug] = useState<string>("intermediate");
  const [selectedStreamSlug, setSelectedStreamSlug] = useState<string | undefined>("mpc");

  const handleSelectLevelAndStream = (
    levelOneSlug: string,
    streamSlug?: string
  ) => {
    setSelectedLevelOneSlug(levelOneSlug);
    setSelectedStreamSlug(streamSlug);
  };

  return (
    <main>
      <Navbar />
      <Hero onSelectLevelAndStream={handleSelectLevelAndStream} />
      <Purpose />
      <QuickPaths onSelectLevelAndStream={handleSelectLevelAndStream} />
      <CareerTree
        selectedLevelOneSlug={selectedLevelOneSlug}
        selectedStreamSlug={selectedStreamSlug}
        onSelectLevelAndStream={handleSelectLevelAndStream}
      />
      <StreamGrid onSelectLevelAndStream={handleSelectLevelAndStream} />
      <FeaturedCareers />
      <GuidanceSection />
      <Footer />
    </main>
  );
}