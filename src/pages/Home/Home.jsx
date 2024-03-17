import Accordion from "../../components/Accordion/Accordion";
import Adress from "../../components/Adress/Adress";
import Blogs from "../../components/Blogs/Blogs";
import Choose from "../../components/Choose/Choose";
import Collections_component from "../../components/Collections_component/Collections_component";
import FollowSocialApp from "../../components/FollowSocialApp/FollowSocialApp";
import Hero from "../../components/Hero/Hero";
import Rated from "../../components/Rated/Rated";
import Subscribe from "../../components/Subscribe/Subscribe";
import { motion } from 'framer-motion';

const Home = () => {

  return (

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    >
      <Hero />
      <Rated />
      <Collections_component />
      <Choose />
      <Subscribe />
      <Accordion />
      <FollowSocialApp />
      <Blogs />
      <Adress />

    </motion.div>

  );

};

export default Home;