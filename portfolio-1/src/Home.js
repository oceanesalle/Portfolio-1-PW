import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div classname="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src="{logo}" alt="" />
          </div>
          <div className="navigation">
            <ul className="navbar d__flex">
              <a href="#Home"><li className="nav__items mx__15">Home</li></a>
              <a href="#About"><li className="nav__items mx__15">About</li></a>
              <a href="#Services"><li className="nav__items mx__15">Services</li></a>
              <a href="#Portfolio"><li className="nav__items mx__15">Portfolio</li></a>
              <a href="#Blog"><li className="nav__items mx__15">Blog</li></a>
              <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
            </ul>
          </div>
        </div>
          {/* HOME */}
          <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY PORTFOLIO</h1>
              <h2 className="home__text pz__10">Hi, I’m Océane</h2>
              <h3 className="home__text sweet pz__10">Fullstack developer.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home; 