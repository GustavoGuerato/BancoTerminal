import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import NetflixGallery from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ margin: '20px' }}> {/* Aplicando uma margem de 20px */}
      <App />
      <NetflixGallery />
    </div>
  </React.StrictMode>
);
