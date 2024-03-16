import { Link } from "react-router-dom";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import Blogs from "../../components/Blogs/Blogs";
import Subscribe from "../../components/Subscribe/Subscribe";

const About = () => {
  return (
    <>
      <div className="flex gap-1 pl-16">
        <Link to={"/"}>
          <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-normal transition-all hover:text-red-500">Ana Səhifə /</h2>
        </Link>
        <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-bold"> About</h2>
      </div>

      <AboutComponent />
      <Blogs />
      <Subscribe />
    </>
  );
};

export default About;
