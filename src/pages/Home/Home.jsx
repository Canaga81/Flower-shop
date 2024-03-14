import Accordion from "../../components/Accordion/Accordion";
import Choose from "../../components/Choose/Choose";
import Collections_component from "../../components/Collections_component/Collections_component";
import Hero from "../../components/Hero/Hero";
import Rated from "../../components/Rated/Rated";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {

  return (

    <div>

      <Hero />
      <Rated />
      <Collections_component />
      <Choose />
      <Subscribe />
      <Accordion />

    </div>

  );

};

export default Home;