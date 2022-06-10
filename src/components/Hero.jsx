import React from "react";
import HeroImg from "../assets/imgs/hero.jpg";

export default function Hero() {
  return (
    <section className="hero-container"> 
    <div className="hero flex wrap align-center justify-center">
        <div className="flex column">
      <span className="hero-info">Yakir Maman Fashion Hair</span>
      <button className="border-animation"> Book Now!</button>
      </div>
      <img src={HeroImg} alt="hero" />
    </div>
    </section>
  );
}
