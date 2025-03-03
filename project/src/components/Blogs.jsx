import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Getting Started with React",
    description: "Learn the basics of React and how to create your first React application.",
    date: "June 15, 2023",
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks to become proficient with Tailwind CSS framework.",
    date: "July 22, 2023",
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "The Power of Framer Motion",
    description: "How to create stunning animations in React using Framer Motion.",
    date: "August 10, 2023",
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

const BlogCard = ({ index, title, description, date, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-tertiary rounded-2xl overflow-hidden sm:w-[360px] w-full"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-5">
        <p className="text-blue-100 text-sm mb-2">{date}</p>
        <h3 className="text-white font-bold text-[20px] mb-2">{title}</h3>
        <p className="text-gray-300 text-[14px] mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-100 inline-flex items-center"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <section id="blogs" className="relative w-full min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subheading">My Articles</p>
          <h2 className="section-heading">
            <span className="blue-text-gradient">Blogs</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-7">
          {blogs.map((blog, index) => (
            <BlogCard key={`blog-${index}`} index={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;