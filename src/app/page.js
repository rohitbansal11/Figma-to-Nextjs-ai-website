"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import VideoShowcase from "../components/VideoShowcase.jsx";
import Features from "../components/Features.jsx";
import Idea from "../components/Idea.jsx";
import DesignElements from "../components/DesignElements.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;

        if (elementPosition < screenPosition) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check for elements in view on page load
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <VideoShowcase />
        <Features />
        <Idea />
        <DesignElements />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
