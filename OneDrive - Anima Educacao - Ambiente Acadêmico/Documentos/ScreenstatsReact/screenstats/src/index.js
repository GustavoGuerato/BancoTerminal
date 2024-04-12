import React from 'react';

function Home() {
  const redirectToLogin = () => {
    window.location.href = "../login/login.html"; // Redireciona para a página de login
  };

  return (
    <div className="e1_2">
      <div className="e2_2"></div>
      <div className="e106_8"></div>
      <span className="e4_17">News</span>
      <img className="e25_26" src="images/Icone Estatisticas.png" alt="Statistics Icon" />
      <span className="e4_19">Statistics</span>
      <span className="e4_14">Movies</span>
      <span className="e4_11">Watchlist</span>
      <span className="e4_9">Series</span>
      <img className="e4_7" src="images/logo.png" alt="Logo" />
      <span className="e7_2">Top movies in this Week</span>
      <span className="e18_734">Top tv shows in this Week</span>
      <div className="e7_7"></div>
      <img className="e10_10" src="images/Toy Story 2.png" alt="Toy Story 2" />
      <img className="e13_3" src="images/Dinossauro.png" alt="Dinosaur" />
      <a href="../SpiderMan/spiderman.html" className="e10_12"></a>
      <img className="e13_27" src="images/Velozes e Furiosos.jpg" alt="Fast and Furious" />
      <span className="e13_29">Homem Aranha 2</span>
      <span className="e15_41">Velozes e Furiosos</span>
      <span className="e15_39">Dinossauro</span>
      <span className="e15_78">Sons Of Anarchy</span>
      <span className="e15_79">X-Men: Evolution</span>
      <span className="e15_80">The Office</span>
      <span className="e15_40">Toy Story 2</span>
      <span className="e15_77">Breaking Bad</span>
      <img className="e15_76" src="./images/X man evolution.png" alt="X-Men Evolution" />
      <span className="e15_42">2000</span>
      <span className="e15_82">2008</span>
      <span className="e15_83">2000</span>
      <span className="e15_84">2005</span>
      <span className="e15_81">2008</span>
      <span className="e15_43">2000</span>
      <span className="e15_44">2004</span>
      <span className="e15_45">2001</span>
      <img className="e18_736" src="images/Breaking Bad.png" alt="Breaking Bad" />
      <div className="e18_737"></div>
      <div className="e18_738"></div>
      <img className="e18_738" src="images/Seta.png" alt="Arrow" />
      <img className="e18_740" src="./images/Sons OF Anarchy.png" alt="Sons Of Anarchy" />
      <img className="e18_742" src="images/The Office.png" alt="The Office" />
      <img className="e13_8" src="images/Seta.png" alt="Arrow" />
      <img className="e24_16" src="images/Icone filme.png" alt="Film Icon" />
      <img className="e25_24" src="images/Icone Noticia.png" alt="News Icon" />
      <img className="e24_19" src="images/Icone TV.png" alt="TV Icon" />
      <img className="e24_20" src="images/Icone Lupa.png" alt="Search Icon" />
      <div className="e103_430">
        <div className="ei103_430_8_614" id="signUpButtonDiv">
          <button
            type="button"
            className="btn btn-outline-danger"
            style={{ width: '200px', height: '50px' }}
          >
            <a
              href="../CriarConta/index.html"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Sign up
            </a>
          </button>
        </div>
        <div className="ei103_430_8_615" id="loginButtonDiv">
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: '200px', height: '50px' }}
            id="loginButton"
            onClick={redirectToLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
