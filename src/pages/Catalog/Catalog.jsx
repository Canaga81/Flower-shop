import Rated from "../../components/Rated/Rated";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Catalog = () => {

  return (
    
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    >
      <div className="flex gap-1 pl-16">
        <Link to={"/"}>
          <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-normal transition-all hover:text-red-500">
            Ana Səhifə /
          </h2>
        </Link>
        <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-bold">
          {" "}
          Katalog
        </h2>
      </div>

      <Rated />

    </motion.div>

  );

};

export default Catalog;