import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backHero from '../assets/imgs/hero-back.jpg'
import logo from '../assets/imgs/logo.jpg'
import hero from '../assets/imgs/hero.jpg'
export default function Slidercomp() {
  return (
      <div className="carousel-wrapper slider">
          <Carousel infiniteLoop  autoFocus autoPlay   >
              <div>
                  <img src={logo} />
              </div>
              <div>
                  <img src={hero}/>
              </div>
              <div>
              <img src={backHero}/>
              </div>
          </Carousel>
      </div>
  );
}