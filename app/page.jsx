"use client";
import Hero from "@/components/Hero";
import MessagePage from "@/components/Message";
import Navbar from "@/components/Navbar";
import FlavourPage from "@/components/Flavour";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MessagePage />
      <FlavourPage />
      <div className="h-dvh" />
    </div>
  );
}
