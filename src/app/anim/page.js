import React from "react";
import HeroComponent from "../components/HomeComponent/HeroComponent";
import Navbar from "../components/shared/navbar";
import ProductPlatformCard from "../components/HomeComponent/ProductComponent/ProductPlatformCard";
import ProductPlatformComponent from "../components/HomeComponent/ProductComponent";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <ProductPlatformComponent />
      <div className="h-[100vh] w-full bg-[#fff]"></div>
    </>
  );
};

export default page;
