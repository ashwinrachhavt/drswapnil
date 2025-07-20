"use client";

import dynamic from "next/dynamic";

const ElegantHeroSection = dynamic(
  () => import("@/components/sections/ElegantHeroSection"),
  { ssr: false }
);

export default ElegantHeroSection;
