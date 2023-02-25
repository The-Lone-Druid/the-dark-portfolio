import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Head from "next/head";
import React from "react";
import { Hero as HeroType } from "./api/hero";
import { Projects as ProjectsType } from "./api/projects";
import { Services as ServiceType } from "./api/services";
import { Skills as SkillsType } from "./api/skills";

export default function Home() {
  const [userData, setUserData] = React.useState<HeroType>();
  const [projects, setProjects] = React.useState<ProjectsType[]>([]);
  const [skills, setSkills] = React.useState<SkillsType[]>([]);
  const [services, setServices] = React.useState<ServiceType[]>([]);
  const [loading, setLoading] = React.useState(false);

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

  const fetchSkillsAsync = async () => {
    const fetchSkills = await fetch(`api/skills`);
    const skills = await fetchSkills.json();
    setSkills(skills);
  };

  const fetchServicesAsync = async () => {
    const fetchServices = await fetch(`api/services`);
    const services = await fetchServices.json();
    setServices(services);
  };

  const fetchAllData = async () => {
    setLoading(true);
    await fetchHeroDataAsync();
    await fetchProjectsAsync();
    await fetchSkillsAsync();
    await fetchServicesAsync();
    setLoading(false);
  };

  React.useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <Header />
      <Hero data={userData} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Services services={services} />
      <Contact />
      <Footer />
      {loading && <Loader />}
    </>
  );
}
