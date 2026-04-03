"use client";
import Hero from "@/components/Hero";
import MessagePage from "@/components/Message";
import Navbar from "@/components/Navbar";
import FlavourPage from "@/components/Flavour";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NutritionPage from "@/components/Nutrition";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  });
  return (
    <div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessagePage />
          <FlavourPage />
          <NutritionPage />
          <div className="h-dvh border border-neutral-900" />
        </div>
      </div>
    </div>
  );
}
