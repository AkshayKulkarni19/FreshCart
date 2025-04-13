import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <div className="mgt-10">
      <MainBanner />
      <Categories />
      <BestSellers />
    </div>
  );
};

export default Home;
