import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "A modern e-commerce platform with product listings, shopping cart, and secure checkout functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/500x300",
    source_code_link: "#",
    live_demo_link: "#",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and professional experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/500x300",
    source_code_link: "#",
    live_demo_link: "#",
  },
  {
    name: "Task Management App",
    description:
      "A comprehensive task management application with features like task creation, assignment, and progress tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/500x300",
    source_code_link: "#",
    live_demo_link: "#",
  },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 gap-2">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaGithub className="w-1/2 h-1/2 text-white" />
          </div>
          <div
            onClick={() => window.open(live_demo_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaExternalLinkAlt className="w-1/2 h-1/2 text-white" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-gray-300 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">My Work</p>
          <h2 className="section-heading">
            <span className="blue-text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;