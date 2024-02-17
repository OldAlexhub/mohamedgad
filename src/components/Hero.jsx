import React from "react";
import HERO from "../images/hero1.webp";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-image" style={{ width: "100%" }}>
        <img
          src={HERO}
          alt="Hero"
          style={{ width: "100%", height: "1000px" }}
        />
      </div>
    </>
  );
};

export default Hero;
