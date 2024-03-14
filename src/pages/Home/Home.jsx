import Choose from "../../components/Choose/Choose";
import Collections_component from "../../components/Collections_component/Collections_component";
import Hero from "../../components/Hero/Hero";
import Rated from "../../components/Rated/Rated";

const Home = () => {
  
  return (

    <div>

      <Hero />
      <Rated />
      <Collections_component />
      <Choose />

    </div>

  );

};

export default Home;