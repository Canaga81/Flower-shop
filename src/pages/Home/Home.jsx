import Accordion from "../../components/Accordion/Accordion";
import Adress from "../../components/Adress/Adress";
import Blogs from "../../components/Blogs/Blogs";
import Choose from "../../components/Choose/Choose";
import Collections_component from "../../components/Collections_component/Collections_component";
import FollowSocialApp from "../../components/FollowSocialApp/FollowSocialApp";
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
      <FollowSocialApp />
      <Blogs />
      <Adress />

    </div>

  );

};

export default Home;