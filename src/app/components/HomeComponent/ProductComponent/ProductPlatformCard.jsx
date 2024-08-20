import React from "react";

const ProductPlatformCard = ({ productImageUri, platformImageUri }) => {
  return (
    <>
      <div className="w-[220px] h-[300px] rounded-[40px] shadow-xl border-2 border-pink-300 text-pink-500 px-[2rem] py-[1.5rem] grid place-items-center relarive">
        <img className="w-[120px]" src={productImageUri} alt="" />
        <img className="w-[120px]" src={platformImageUri} alt="" />
      </div>
    </>
  );
};

export default ProductPlatformCard;
