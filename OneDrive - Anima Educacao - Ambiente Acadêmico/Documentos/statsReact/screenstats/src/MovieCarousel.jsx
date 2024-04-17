import React from "react";
import "./carousel.scss";
import breakingbad from "./images/Breaking Bad.jpg";
import dinossauro from "./images/dinossauro.jpg";
import velozes from "./images/velozes_e_furiosos.png";
import homemaranha from "./images/HomemAranha.png";
import toystory from "./images/Toy_Story2.png";
import carros from "./images/Cars.png";
import tigrao from "./images/Tigrao.png";
import monstros from "./images/Monstros_SA.png";

function NetflixGallery() {
  return (
    <div className="wrapper">
      <section id="section1">
        <a href="#section3" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img src={breakingbad} alt="Netflix Image 1" className="item" />
        </div>
        <div className="item">
          <img src={velozes} alt="Netflix Image 2" className="item" />
        </div>
        <div className="item">
          <img src={dinossauro} alt="" className="item" />
        </div>
        <div className="item">
          <img src={homemaranha} alt="" className="item" />
        </div>
        <div className="item">
          <img src={toystory} alt="" className="item" />
        </div>

        <a href="#section2" className="arrow__btn">
          ›
        </a>
      </section>
      <section id="section2">
        <a href="#section1" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img src={carros} alt="Netflix Image 3" className="item"/>
        </div>
        <div className="item">
          <img src={tigrao} alt="Netflix Image 4" className="item"/>
        </div>
        <div className="item">
          <img src={monstros} alt="Netflix Image 4" className="item"/>
        </div>
        <div className="item">
          <img src={tigrao} alt="Netflix Image 4" className="item"/>
        </div>
        <div className="item">
          <img src={tigrao} alt="Netflix Image 4"className="item"  />
        </div>
        <a href="#section3" className="arrow__btn">
          ›
        </a>
      </section>
      <section id="section3">
        <a href="#section2" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRr4YxdaABuAuH_3FmSQZn7BCvLp-UUPsXE9MiYpvFP3CSUHV2zOew5oVqKqqdaOd3tbFVS0Uf67uIs7_eZydlCghg4nK0nMatRpPImABwTOhnNzCLCxdKrua7pPIcPCZqBYTeAO5g.jpg"
            alt="Netflix Image 5"
          />
        </div>
        {/* Adicione as outras imagens aqui */}
        <a href="#section1" className="arrow__btn">
          ›
        </a>
      </section>
    </div>
  );
}

export default NetflixGallery;
