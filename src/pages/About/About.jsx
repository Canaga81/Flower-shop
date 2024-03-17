import { Link } from "react-router-dom";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import Blogs from "../../components/Blogs/Blogs";
import Subscribe from "../../components/Subscribe/Subscribe";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    >
      <div className="flex gap-1 pl-16">
        <Link to={"/"}>
          <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-normal transition-all hover:text-red-500">Ana Səhifə /</h2>
        </Link>
        <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-bold"> About</h2>
      </div>

      <AboutComponent />
      <Blogs />
      <Subscribe />
    </motion.div>
  );
};

export default About;