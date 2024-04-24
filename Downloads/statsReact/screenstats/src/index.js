import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import NetflixGallery from "./MovieCarousel";
import SerieGaleria from "./SerieCarousel";
import Movie from "./Movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ margin: "20px" }}>
      {" "}
      {/* Aplicando uma margem de 20px */}
      <App />
      <NetflixGallery />
      <SerieGaleria />
      
    </div>
  </React.StrictMode>
);
