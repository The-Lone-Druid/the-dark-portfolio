import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";
import { Projects as ProjectsType } from "./api/projects";

type Props = {
  projects: ProjectsType[];
};

export default function Home({ projects }: Props) {
  return (
    <>
      <Header />
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const apiUrl = context.req.headers["referer"];
  const fetchProjects = await fetch(`${apiUrl}api/projects`);
  const projects = await fetchProjects.json();

  return {
    props: {
      projects: projects
    }
  };
}
