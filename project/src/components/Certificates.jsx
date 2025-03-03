import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    image: "https://via.placeholder.com/400x300",
    link: "#",
  },
  {
    title: "React - The Complete Guide",
    issuer: "Coursera",
    date: "2022",
    image: "https://via.placeholder.com/400x300",
    link: "#",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    image: "https://via.placeholder.com/400x300",
    link: "#",
  },
];

const CertificateCard = ({ index, title, issuer, date, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-tertiary rounded-2xl overflow-hidden sm:w-[360px] w-full"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 text-white px-4 py-2 rounded-full"
          >
            View Certificate
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-[20px] mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-300 text-[14px]">{issuer}</p>
          <p className="text-blue-100 text-sm">{date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="relative w-full min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">My Achievements</p>
          <h2 className="section-heading">
            <span className="blue-text-gradient">Certificates</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-7">
          {certificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;