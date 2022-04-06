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
              <a href="#Home"><li className="nav__items mx__15">Home</li></a>
              <a href="#Home"><li className="nav__items mx__15">Home</li></a>
              <a href="#Home"><li className="nav__items mx__15">Home</li></a>
              <a href="#Home"><li className="nav__items mx__15">Home</li></a>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}


export default Home