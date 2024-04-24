import React from "react";
import "./carousel.scss";
import breakingbad from "./images/Breaking Bad.jpg";
import dinossauro from "./images/dinossauro.jpg";
import velozes from "./images/velozes_e_furiosos.png";
import homemaranha from "./images/HomemAranha.png";
import toystory from "./images/Toy_Story2.png";

function SerieGaleria() {
  return (
    <div className="wrapper">
      <section id="section4">
        <a href="#section6" className="arrow__btn">
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

        <a href="#section5" className="arrow__btn">
          ›
        </a>
      </section>
      <section id="section5">
        <a href="#section4" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg"
            alt="Netflix Image 3"
          />
        </div>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTOj1-116yVcgKWMU2dI3GFR4x0fSkiGsqtLLeLUxRR7STaksjAqBTrYlTfrB8nIGnGvXksi0ewXAhVGg6-pLxpFOIfcpjK-pf8D5xehFZo5a6vJbo4L0AGbrzglbyUoq255QBJgRQ.jpg"
            alt="Netflix Image 4"
          />
        </div>
        {/* Adicione as outras imagens aqui */}
        <a href="#section6" className="arrow__btn">
          ›
        </a>
      </section>
      <section id="section6">
        <a href="#section5" className="arrow__btn">
          ‹
        </a>
        <div className="item">
          <img
            src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRr4YxdaABuAuH_3FmSQZn7BCvLp-UUPsXE9MiYpvFP3CSUHV2zOew5oVqKqqdaOd3tbFVS0Uf67uIs7_eZydlCghg4nK0nMatRpPImABwTOhnNzCLCxdKrua7pPIcPCZqBYTeAO5g.jpg"
            alt="Netflix Image 5"
          />
        </div>
        {/* Adicione as outras imagens aqui */}
        <a href="#section4" className="arrow__btn">
          ›
        </a>
      </section>
    </div>
  );
}

export default SerieGaleria;
