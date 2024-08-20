import React from "react";
import Navbar from "../shared/navbar";
import HeroComponent from "./HeroComponent";
import ProductPlatformComponent from "./ProductComponent";

const HomeComponent = () => {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <ProductPlatformComponent />
      <div className="h-[100vh] w-full bg-[#fff]"></div>
    </>
  );
};

export default HomeComponent;
