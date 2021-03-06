import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/logo.jpg";
import whatsappLogo from "../assets/imgs/whatsapp-logo.svg";
import instagramLogo from "../assets/imgs/instagram-logo.svg";
import facebookLogo from "../assets/imgs/facebook-logo.svg";
import phoneLogo from "../assets/imgs/phone-logo.svg";
import { useLocation } from "react-router-dom";

export const AppNav = () => {
  const [isFloatNav, setIsFloatNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  useLayoutEffect(() => {
    setIsMobile(false);
  }, [location]);

  return (
    <>
      <div className="flex space-between align-center navbar">
        <NavLink activeClassName="active" to="/home">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </NavLink>
        <nav>
          <NavLink activeClassName="active" to="/home">
            <button>
              <i className="fa-solid fa-house"></i>
            </button>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <button>About</button>
          </NavLink>
          <NavLink activeClassName="active" to="/price">
            <button>price</button>
          </NavLink>
        </nav>
        <div className="mobile-nav">
          {isMobile ? (
            <div className="modal-wrapper">
              <div className="modal-content">
                <div className="flex column justify-center align-center">
                  <NavLink activeClassName="active" to="/home">
                    Home
                  </NavLink>
                  <NavLink activeClassName="active" to="/about">
                    About
                  </NavLink>
                  <NavLink activeClassName="active" to="/price">
                    Price
                  </NavLink>
                  <i
                    className="fa-solid fa-x"
                    onClick={() => setIsMobile(false)}
                  ></i>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <i
                className="fa-solid fa-bars"
                onClick={() => setIsMobile(true)}
              ></i>
            </div>
          )}
        </div>
      </div>

      <div className="float-navbar">
        {isFloatNav ? (
          <i
            className="fa-solid fa-comment-dots"
            onClick={() => setIsFloatNav(false)}
            name="open"
          ></i>
        ) : (
          <div className="flex column float-navbar-container">
            <i
              className="fa-solid fa-x"
              onClick={() => setIsFloatNav(true)}
            ></i>
            <a
              href="https://www.facebook.com/Yakir-Maman-Fashion-Hair-100739034655366/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookLogo} alt="facebookLogo" />
            </a>
            <a
              href="https://www.instagram.com/yakir_maman_fashion_hair"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramLogo} alt="instagramLogo" />
            </a>
            <a
              href="https://wa.me/+972534234428/?text=Hi Yakir"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappLogo} alt="whatsappLogo" />
            </a>
            <a href="tel: +972534234428" target="_blank" rel="noreferrer">
              <img src={phoneLogo} alt="phoneLogo" />
            </a>
          </div>
        )}
      </div>
    </>
  );
};
