"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductPlatformCard from "./ProductPlatformCard";
const ProductPlatformComponent = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    amount: 0.5,
    // once: true,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const cardContainerTransformWidth = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.5, 0.55, 0.6],
    ["20%", "40%", "60%", "80%", "100%"]
  );

  const x = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9],
    ["100%", "90%", "80%", "70%", "50%", "40%", "30%"]
  );

  return (
    <>
      <motion.div
        ref={containerRef}
        className="h-[300vh] px-12 relative w-[100%] flex flex-row-reverse bg-[#fff]"
      >
        <motion.div
          //   className="shadow-inner-lr"
          style={{
            width: cardContainerTransformWidth,
            height: "400px",
            background: "#eee",
            position: "sticky",
            top: "33%",
            transformOrigin: "left center",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          <motion.div
            style={{
              //   marginLeft: "10%",
              display: "flex",
              gap: "30px",
              //   padding:
              x,
            }}
          >
            <ProductPlatformCard
              platformImageUri={"/assets/images/alibaba.svg"}
              productImageUri={"/assets/images/ban-i-camera.svg"}
            />
            <ProductPlatformCard
              platformImageUri={"/assets/images/alibaba.svg"}
              productImageUri={"/assets/images/ban-i-camera.svg"}
            />
            <ProductPlatformCard
              platformImageUri={"/assets/images/alibaba.svg"}
              productImageUri={"/assets/images/ban-i-camera.svg"}
            />
            <ProductPlatformCard
              platformImageUri={"/assets/images/alibaba.svg"}
              productImageUri={"/assets/images/ban-i-camera.svg"}
            />
            <ProductPlatformCard
              platformImageUri={"/assets/images/alibaba.svg"}
              productImageUri={"/assets/images/ban-i-camera.svg"}
            />
            <ProductPlatformCard
              platformImageUri={"/assets/images/alibaba.svg"}
              productImageUri={"/assets/images/ban-i-camera.svg"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProductPlatformComponent;
