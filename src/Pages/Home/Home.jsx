import React from "react";
import Banner from "../../Components/Banner";
import Categories from "./Categories";
import Speacial from "./Speacial";
import Evidnetirary from "./Evidnetirary";
import Services from "./Services";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container scroll-smooth ">
      <Banner></Banner>
      <Categories></Categories>
      <Speacial></Speacial>
      <Evidnetirary></Evidnetirary>
      <Services></Services>
    </div>
  );
};

export default Home;
