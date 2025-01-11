"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Python</li>
          <li>Next js</li>
          <li>Tailwind Css</li>
          <li>MySQL</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React JS</li>
          <li>Django</li>
          <li>HTML, CSS</li>
          <li>TypeScript</li>
          <li>Strapi</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>
            Secondary State Board
            <br />
            Gyan Kendra Secondary High School-<b>85.4%</b>
          </li>
          <br />
          <li>
            Higher Secondary State Board
            <br />
            Valia College of Arts,Commerce And Science, Mumbai - <b>74.1%</b>
          </li>
          <br />
          <li>
            Bachelors in Technology
            <br />
            Atharva College Of Engineering, Mumbai-<b>9.2 (2024)</b>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Django Web Framework & REST API</li>
          <li>JavaScript MERN Full Stack</li>
          <li>Machine Learning & Flask Deployment</li>
          <li>Complete Java with Desktop & Web App Development</li>
        </ul>
      ),
    },
  ];
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/coding.jpeg"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Insightful computer engineering student, in my last year of
            graduation seeking opportunity Along with pursing my B.Tech
            education I have also completed multiple certificate courses. I am
            looking for a position that will allow me to improve my current
            programming, communication and team work skills. In the process also
            aiming to learning new skills to add to my current skill-set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
