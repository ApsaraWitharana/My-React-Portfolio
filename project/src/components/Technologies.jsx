import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma } from 'react-icons/fa';

const technologies = [
  {
    name: "HTML 5",
    icon: <FaHtml5 className="w-12 h-12" />,
  },
  {
    name: "CSS 3",
    icon: <FaCss3Alt className="w-12 h-12" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-12 h-12" />,
  },
  {
    name: "React JS",
    icon: <FaReact className="w-12 h-12" />,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs className="w-12 h-12" />,
  },
  {
    name: "Databases",
    icon: <FaDatabase className="w-12 h-12" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="w-12 h-12" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="w-12 h-12" />,
  },
];

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full sm:w-[250px] bg-tertiary p-6 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black-100 text-blue-100 mb-4">
          {icon}
        </div>
        <h3 className="text-white text-xl font-bold">{name}</h3>
      </div>
    </motion.div>
  );
};

const Technologies = () => {
  return (
    <section id="technologies" className="relative w-full min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">My Skills</p>
          <h2 className="section-heading">Tech <span className="blue-text-gradient">Stack</span></h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => (
            <TechCard key={`technology-${index}`} index={index} {...technology} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;