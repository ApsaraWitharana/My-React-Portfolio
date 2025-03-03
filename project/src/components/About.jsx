import { motion } from 'framer-motion';
import profilePic from '../assecc/image/aboutpic.jpg';

const About = () => {
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
            <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden">
              <img
                  src={profilePic}
                alt="About me" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-blue-100 text-4xl font-bold">2+</span>
                <span className="text-gray-300">Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-100 text-4xl font-bold">10+</span>
                <span className="text-gray-300">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-100 text-4xl font-bold">5+</span>
                <span className="text-gray-300">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-100 text-4xl font-bold">3+</span>
                <span className="text-gray-300">Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;