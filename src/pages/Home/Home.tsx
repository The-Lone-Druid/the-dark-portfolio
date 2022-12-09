import React from "react";
import { HeroImg, ProjectImg } from "../../assets/default-exports";
import { Button, Title } from "../../components/default-exports";
import data from "../../helpers/mock";
import { Page } from "../../layouts/default-exports";

type Props = {};

const Home = (props: Props) => {
  const [techStacks, setTechStacks] = React.useState<[] | null | any>(null);
  const [services, setServices] = React.useState<[] | null | any>(null);
  const [skills, setSkills] = React.useState<[] | null | any>(null);

  React.useEffect(() => {
    setTechStacks(data?.techStack);
    setServices(data?.services);
    setSkills(data?.skills);
  }, []);

  return (
    <Page>
      <div className="py-4">
        {/* hero section */}
        <section className="text-start">
          <h1 className="text-[52px] font-bold mt-[60px] leading-[60px]">
            Beautifully Crafted <br /> Web Experiences
          </h1>
          <h1 className="text-[32px] mt-6">
            Full Stack Developer, UI/UX Designer <br /> & Programmer.
          </h1>
          <div className="flex items-center gap-[20px] py-2 justify-start mt-8">
            <Button className="btn primary-btn">Projects</Button>
            <Button className="btn primary-btn">Services</Button>
          </div>
        </section>
        {/* about section */}
        <section className="mt-[150px]">
          <Title title="About Me" />
          <div className="flex items-center py-4 mt-4">
            <div>
              <img
                src={HeroImg}
                alt=""
                width={300}
                height={300}
                className="rounded-[300px] min-w-[300px] max-w-[300px]"
              />
            </div>
            <div className="ml-8">
              <h1 className="text-[36px] font-bold">Zahid Shaikh.</h1>
              <h1 className="text-[16px] mt-4">
                I have built many industry grade projects from scratch also I've
                made my own few amazing projects too... and am armed with many
                technological skills useful for tech projects. Do have a look on
                my projects below. :)
              </h1>
              <div className="flex items-center bg-gradient-to-tr from-purple-500 gap-[30px] px-6 to-blue-600 max-w-fit rounded-[20px] text-center mt-[20px]">
                <div className="py-2">
                  <h4 className="text-[26px] font-bold">8</h4>
                  <h6>Verified Skills</h6>
                </div>
                <div className="py-2">
                  <h4 className="text-[26px] font-bold">5</h4>
                  <h6>Professional Projects</h6>
                </div>
                <div className="py-2">
                  <h4 className="text-[26px] font-bold">6</h4>
                  <h6>Personal Projects</h6>
                </div>
              </div>
              <div className="my-6 flex gap-[20px]">
                <Button className="btn primary-btn btn-sm">Download CV</Button>
                <Button className="btn primary-btn btn-sm">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        {/* projects section */}
        <section className="mt-[100px]">
          <Title title="My Projects" />
          <div className="flex flex-col gap-[20px] items-center py-4 mt-4">
            <div className="rounded-[20px] bg-white bg-opacity-5 p-6 w-full flex justify-between">
              <div className="max-w-[600px]">
                <h1 className="text-[36px] font-bold">QTripStatic</h1>
                <h1 className="text-[16px] mt-2">Oct 2022</h1>
                <p className="text-[16px] mt-2">
                  QTrip is a travel website aimed at travellers looking for a
                  multitude of adventures in different cities.{" "}
                </p>
                <p className="text-[16px] mt-2">
                  During the course of this project,
                </p>
                <ul className="list-disc pl-[15px] mt-2">
                  <li>
                    Created 3 different web pages from Wireframe layout using
                    HTML and CSS
                  </li>
                  <li>Utilized Bootstrap extensively for responsive design</li>
                  <li>Deployed the website to Netlify</li>
                </ul>
                <div className="flex items-center gap-2 mt-4 flex-wrap">
                  {techStacks
                    ? techStacks.map((skill: any, index: number) => (
                        <span
                          key={index}
                          className="bg-white bg-opacity-10 text-white px-4 rounded-[5px] py-2 text-[14px]"
                        >
                          {skill?.name}
                        </span>
                      ))
                    : null}
                </div>
                <div className="mt-4">
                  <Button className="btn primary-btn btn-sm">
                    View Project Details
                  </Button>
                </div>
              </div>
              <div>
                <img src={ProjectImg} alt="" width={400} height={350} />
              </div>
            </div>
          </div>
        </section>
        {/* services section */}
        <section className="mt-[100px]">
          <Title title="My Services" />
          <div className="grid grid-cols-3 gap-[35px] py-4 mt-4">
            {services
              ? services.map((service: any, index: number) => (
                  <div
                    key={index}
                    className="rounded-[20px] bg-white bg-opacity-5 p-6 flex flex-col items-center justify-between text-center"
                  >
                    <div className="h-[100px] w-[100px] text-center flex items-center justify-center">
                      <i
                        className={`${service.serviceIcon} text-[78px] text-gradient-to-r`}
                      ></i>
                    </div>
                    <h4 className="text-[20px] font-bold mt-4">
                      {service.serviceHeading}
                    </h4>
                    <p className="mt-2">{service.serviceText}</p>
                  </div>
                ))
              : null}
          </div>
        </section>
        {/* Skills section */}
        <section className="mt-[100px]">
          <Title title="My Skills" />
          <div className="grid grid-cols-8 gap-[35px] py-4 mt-4">
            {skills
              ? skills.map((skill: any, index: number) => (
                  <div
                    key={index}
                    className="rounded-[20px] bg-white bg-opacity-5 p-6 flex flex-col items-center justify-between text-center bg-white bg-opacity-5"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-[80px] w-[80px]"
                    />
                  </div>
                ))
              : null}
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Home;
