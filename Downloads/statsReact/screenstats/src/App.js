import React, { useState } from "react";
import "./App.css"; // Importe o arquivo CSS
import logoImage from "../src/images/c5bc79f5_6741_4a9a_b167_5787cd376907_removebg_preview_1.png"; // Importe a imagem

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          {/* Navbar Logo */}
          <div className="logo">
            {/* Logo Placeholder for Illustration */}
            <a href="#home">
              <img
                src={logoImage} // Use a variável que contém o caminho da imagem
                alt=""
                style={{ width: "251px", height: "81px" }}
              ></img>
            </a>
          </div>

          {/* Navbar Links */}
          <ul id="menu">
            <li>
              <a
                href="#home"
                className={activeTab === "movies" ? "active" : ""}
                onClick={() => handleTabClick("movies")}
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeTab === "series" ? "active" : ""}
                onClick={() => handleTabClick("series")}
              >
                Series
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeTab === "watchlist" ? "active" : ""}
                onClick={() => handleTabClick("watchlist")}
              >
                Watchlist
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeTab === "news" ? "active" : ""}
                onClick={() => handleTabClick("news")}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#stats"
                className={activeTab === "stats" ? "active" : ""}
                onClick={() => handleTabClick("stats")}
              >
                Stats
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Menu Icon */}
      <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
