import { Link } from 'react-router-dom';
import Adress from '../../components/Adress/Adress';
import Subscribe from '../../components/Subscribe/Subscribe';
import Video from '../../components/Video/Video';
import Form from '../../components/Form/Form';
import { motion } from 'framer-motion';

const Contacts = () => {

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    >
      
      <div className="flex gap-1 pl-16">

        <Link to={"/"}>

          <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-normal transition-all hover:text-red-500">Home /</h2>
          
        </Link>

        <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] text-heroText font-Montserrat font-bold"> Əlaqə</h2>

      </div>

      <Adress />

      <Video />

      <Form />

      <Subscribe />

    </motion.div>

  )

}

export default Contacts;