import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";
import { Hero as HeroType } from "./api/hero";
import { Projects as ProjectsType } from "./api/projects";

export default function Home() {
  const [projects, setProjects] = React.useState<ProjectsType[]>([]);
  const [userData, setUserData] = React.useState<HeroType>();

  const fetchHeroDataAsync = async () => {
    const fetchHeroData = await fetch(`api/hero`);
    const heroData = await fetchHeroData.json();
    setUserData(heroData);
  };

  const fetchProjectsAsync = async () => {
    const fetchProjects = await fetch(`api/projects`);
    const projects = await fetchProjects.json();
    setProjects(projects);
  };

  React.useEffect(() => {
    fetchHeroDataAsync();
    fetchProjectsAsync();
  }, []);

  return (
    <>
      <Header />
      <Hero data={userData} />
      <Projects projects={projects} />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
