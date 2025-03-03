import { motion } from 'framer-motion';
import {FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact} from "react-icons/fa";
import {
  SiBootstrap,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiPython,
  SiSpring,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const About = () => {
  const skills = [
    { name: 'Java', icon: <FaJava size={40} className="text-red-600" /> },
    { name: 'Python', icon: <SiPython size={40} className="text-yellow-400" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={40} className="text-purple-600" /> },
    { name: 'React', icon: <FaReact size={40} className="text-blue-400" /> },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-600" /> },
    { name: 'Spring Boot', icon: <SiSpring size={40} className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql size={40} className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-red-500" /> },
    { name: 'GitHub', icon: <FaGithub size={40} className="text-gray-500" /> },
    { name: 'Figma', icon: <SiFigma size={40} className="text-pink-500" /> },
  ];

  return (
      <section id="about" className="relative w-full min-h-screen">
        <div className="section-container">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <p className="section-subheading">Introduction</p>
            <h2 className="section-heading">About <span className="blue-text-gradient">Me</span></h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-4 text-text">Who I Am</h3>
              <div className="space-y-4 text-textLight">
                <p>
                  Hello! I'm Sachini Apsara, a passionate web developer with a focus on creating beautiful, functional, and
                  user-friendly websites. I enjoy turning complex problems into simple, elegant solutions.
                </p>
                <p>
                  My journey in web development started in 2023, and since then, I've been continuously learning and
                  improving my skills. I specialize in frontend development, but I'm also comfortable working with backend
                  technologies.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or enjoying outdoor activities. I believe in continuous learning and staying updated with the latest
                  industry trends.
                </p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center"
                  >
                    <div className="bg-secondary p-4 rounded-lg mb-2 hover:bg-secondary/80 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-textLight">{skill.name}</span>
                  </motion.div>
              ))}
            </motion.div>
          </div>

          {/* My Journey Section */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
          >
            <h3 className="text-2xl font-semibold mb-4 text-text">My Journey</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-medium text-text">G.C.E Advanced Level Examination (Maths-2020)</h4>
                <p className="text-accent">2018-2020 - Present</p>
                <p className="text-textLight mt-2">
                  St.Thomas' Girl's College
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-medium text-text">Graduate Diploma The Beeline Campus</h4>
                <p className="text-accent">2022 - 2023</p>
                <p className="text-textLight mt-2">
                  The Beeline English Academy & SDFL
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-accent">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-medium text-text">Graduate Diploma in Software Engineering</h4>
                <p className="text-accent">2023 - 2025</p>
                <p className="text-textLight mt-2">
                  Institute of Java Software Engineering
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;
