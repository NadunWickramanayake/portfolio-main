"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Welcome to my portfolio :) ",
    techStack: "Tech stack :- React, Next.js, Tailwind CSS, TypeScript",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NadunWickramanayake/portfolio-main.git",
    previewUrl: "https://nadun-portfolio.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "homteq is a highly specialised retailer that offers a wide range of devices at the most competitive prices to make home and life SMART. homteq retails many smart products to the general public and to corporate business organisations.",
    techStack: "Tech Stack :- PHP, MySQL, HTML, CSS",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NadunWickramanayake/Projects/tree/main/Web%20Development%20Projects/Hometeq-main",
    previewUrl: "https://hometeq.000webhostapp.com/index.php",
  },
  {
    id: 3,
    title: "Tour-Guide Application",
    description: "Visit Thambapanni website that aims to help people who are interested to travel in Sri Lanka. This website will basically recommend amazing places to visit in Sri Lanka and gives users the option to place orders for Sri Lankan unique items such as spices, herbs, and travel products. ",
    techStack: " Tech Stack :- JavaScript, HTML, and CSS",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NadunWickramanayake/Projects/tree/main/Web%20Development%20Projects/Visit%20Thambapanni",
    previewUrl: "https://visit-thambapanni.netlify.app",
  },
  {
    id: 4,
    title: "MindGuard - Depression Screening Application",
    description: "Two options for screening depression status ; Quick Screening and In Depth Screening Quick Screening includes with a questionnaire ,In Depth Screening includes a chatbot feature",
    techStack: "Tech Stack :- Node.js , HTML, CSS, Javascript, Python, Flask, Google Firebase ",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NadunWickramanayake/SE-87_SDGP_Project",
    previewUrl: "https://drive.google.com/file/d/1afc-eqlu4i52AdmrSFLzjB0txcxEcGyl/view?usp=sharing",
  },
  {
    id: 5,
    title: "Math Game",
    description: "The game goal is for the user to fill in the blank with the appropriate number or operator to complete the equation.",
    techStack: "Tech Stack :- Javascript,HTML, CSS",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NadunWickramanayake/Projects/tree/main/Web%20Development%20Projects/Math-Game",
    previewUrl: "https://nadunwickramanayake.github.io/Projects/Web%20Development%20Projects/Math-Game/",
  },
  {
    id: 6,
    title: "To-Do-App",
    description: "To Do is a task management app that makes it easy to stay organized and manage your life. ",
    techStack: "Tech Stack :- React.js , Node.js, HTML, SCSS",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NadunWickramanayake/To-Do-App",
    previewUrl: "https://to-do-app-nadun.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStack={project.techStack}

            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
