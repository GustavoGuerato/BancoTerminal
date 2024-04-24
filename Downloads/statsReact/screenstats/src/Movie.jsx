import React, { useEffect } from "react";
import "./movie.css"; // Importe o arquivo CSS

const Movie = () => {
  useEffect(() => {
    // indicator
    let marker = document.querySelector(".marker");
    let items = document.querySelectorAll("nav ul li");

    function indicator(e) {
      marker.style.left = e.offsetLeft + "px";
      marker.style.width = e.offsetWidth + "px";
    }

    items.forEach((link) => {
      link.addEventListener("click", (e) => {
        indicator(e.target);
      });
    });

    // for menu scroll
    let nav = document.querySelector("nav");
    let ul = document.querySelector("nav ul");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 20) {
        nav.classList.add("nav");
      } else {
        nav.classList.remove("nav");
      }

      if (window.pageYOffset >= 700) {
        nav.classList.add("navBlack");
      } else {
        nav.classList.remove("navBlack");
      }
    });

    // menu
    let menu = document.querySelector("#menu");
    let menuBx = document.querySelector("#menu-box");
    let a = true;

    menu.addEventListener("click", () => {
      if (a == true) {
        menuBx.style.display = "block";
        menu.classList.replace("fa-bars", "fa-remove");
        a = false;
      } else {
        menuBx.style.display = "none";
        menu.classList.replace("fa-remove", "fa-bars");
        a = true;
      }
    });

    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3,
          nav: true,
        },
        600: {
          items: 3,
          nav: true,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* Font icon CDN */}
      <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      {/* Carousel CDN */}

      {/* Movie site template */}
      <header>
        <div className="popular-movie-slider">
          <img
            src="https://imageio.forbes.com/blogs-images/scottmendelson/files/2014/10/2v00kg8.jpg?format=jpg&width=1200"
            className="poster"
            alt="movie poster"
          />

          <div className="popular-movie-slider-content">
            <p className="release">2017</p>
            <h2 className="movie-name">Interstellar</h2>
            <ul className="category">
              <p>Science fiction</p>
              <li>drama</li>
              <li>action</li>
            </ul>
            <p className="desc">
              Interstellar is a 2014 epic science fiction film co-written,
              directed, and produced by Christopher Nolan. It stars Matthew
              McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen
              Burstyn, Matt Damon, and Michael Caine. Set in a dystopian future
              where humanity is embroiled in a catastrophic blight and famine,
              the film follows a group of astronauts who travel through a
              wormhole near Saturn in search of a new home for humankind.
            </p>

            <div className="movie-info">
              <i className="fa fa-clock-o">
                {" "}
                &nbsp;&nbsp;&nbsp;<span>164 min.</span>
              </i>
              <i className="fa fa-volume-up">
                {" "}
                &nbsp;&nbsp;&nbsp;<span>Subtitles</span>
              </i>
              <i className="fa fa-circle">
                {" "}
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>9.1/10</b>
                </span>
              </i>
            </div>

            <div className="movie-btns">
              <button>
                <i className="fa fa-play"></i> &nbsp; Watch trailer
              </button>
              <button className="read-more">
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>&nbsp; Read more
              </button>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="movie-ticket-book">
          <div className="choose-date">
            <p className="heading">choose date:</p>
            <div className="wrapper">
              <div className="carousel owl-carousel">
                <div className="card card-1">
                  <p>JUN 1t</p>
                  <p>MON</p>
                </div>
                <div className="card card-2">
                  <p>JUN 2nd</p>
                  <p>TUE</p>
                </div>
                <div className="card card-3">
                  <p>JUN 3nd</p>
                  <p>wed</p>
                </div>
                <div className="card card-4">
                  <p>JUN 4nd</p>
                  <p>thu</p>
                </div>
              </div>
              <div className="marker"></div>
            </div>
          </div>
          <div className="choose-time">
            <p className="heading">available times:</p>
            <div className="wrapper">
              <div className="carousel owl-carousel">
                <div className="card card-1">
                  <p>3D</p>
                  <p>14:45</p>
                </div>
                <div className="card card-2">
                  <p>3D</p>
                  <p>11:45</p>
                </div>
                <div className="card card-3">
                  <p>2D</p>
                  <p>12:15</p>
                </div>
                <div className="card card-4">
                  <p>3D</p>
                  <p>13:00</p>
                </div>
              </div>
              <div className="marker"></div>
            </div>
          </div>
          <button>Buy ticket</button>
        </div>

        <div className="filter-search-box">
          <div className="filters-box">
            <div className="all-filters filters">
              All formats <i className="fa fa-angle-down"></i>
            </div>

            <div className="date-filters filters">
              By Date <i className="fa fa-angle-down"></i>
            </div>

            <div className="category-filters filters">
              By category <i className="fa fa-angle-down"></i>
            </div>

            <div className="category-filters filters">Coming soon</div>
          </div>

          <div className="search-filters">
            <input type="text" placeholder="Search by name..." />
            <i className="fa fa-search"></i>
          </div>

          <div className="search-bar">
            <div className="bar"></div>
          </div>
        </div>

        <div className="movie-card-section">
          <div className="card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCXgCV-ZNb3InBCTaLdED58dF6iZJxIvCOBurktiWxXrwGc8DB"
              alt="movie poster"
            />

            <div className="card-content">
              <p className="movie-name">the mummy</p>

              <div className="movie-info">
                <p className="time">
                  11:30{" "}
                  <span>
                    14:45<span className="d3">3D</span> 16:05
                    <span className="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="show">
          <div className="show-bar">
            <div className="bar"></div>
          </div>
          <button>Show more</button>
        </div>
      </section>

      <footer>
        <div className="logo-box">
          <p className="logo">
            multi<span>flex</span>
          </p>
          <p>
            <i className="fa fa-copyright"></i> 2001-2017, SIA Multiflex
          </p>
        </div>

        <ul>
          <li>main</li>
          <li>schedules</li>
          <li>tickets</li>
          <li>news</li>
          <li>contact</li>
        </ul>

        <div className="social-box">
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
        </div>
      </footer>
    </>
  );
};

export default Movie;
