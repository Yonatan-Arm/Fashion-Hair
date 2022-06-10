import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/logo.jpg";
import whatsappLogo from "../assets/imgs/whatsapp-logo.svg";
import instagramLogo from "../assets/imgs/instagram-logo.svg";
import facebookLogo from "../assets/imgs/facebook-logo.svg";
import phoneLogo from "../assets/imgs/phone-logo.svg";

export const AppNav = () => {
  const [isFloatNav, setIsFloatNav] = useState(true);
  return (
    <>
      <div className="flex space-between align-center navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <NavLink activeClassName="active" to="/home">
            <button>
              <i className="fa-solid fa-house"></i>
            </button>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <button>About</button>
          </NavLink>
          <NavLink activeClassName="active" to="/code">
            <button>Work</button>
          </NavLink>
        </nav>
      </div>

      <div className="float-navbar">
        {isFloatNav ? 
        <i className="fa-solid fa-bars" onClick={()=> setIsFloatNav(false)} name="open"></i>
        : 
          <div className="flex column float-navbar-container">
            <i className="fa-solid fa-x" onClick={()=> setIsFloatNav(true)}></i>
            <a
              href="https://www.facebook.com/Yakir-Maman-Fashion-Hair-100739034655366/"
              target="_blank"
            >
              <img src={facebookLogo} alt="facebookLogo" />
            </a>
            <a
              href="https://www.instagram.com/yakir_maman_fashion_hair"
              target="_blank"
            >
              <img src={instagramLogo} alt="instagramLogo" />
            </a>
            <a
              href="https://wa.me/+972534234428/?text=Hi Yakir"
              target="_blank"
            >
              <img src={whatsappLogo} alt="whatsappLogo" />
            </a>
            <a
              href="tel: +972534234428"
              target="_blank"
            >
              <img src={phoneLogo} alt="phoneLogo" />
            </a>
          </div>
        }
      </div>
    </>
  );
};
