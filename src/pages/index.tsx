import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
