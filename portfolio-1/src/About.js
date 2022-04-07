import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="about component__space" id="About">
    <div className="container">
      <div className="row">
        <div className="col__2">
          <img src="{aboutImg}" alt="" className="about__img" />
        </div>
        <div className="col__2">
          <h1 className="about__heading">About Me</h1>
          <div className="about__meta">
            <p className="about__text p__color">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
              or randomised words which dont look even slightly believable. If
              you are going to use a passage of Lorem Ipsum,
            </p>
            <p className="about__text p__color">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
              or randomised words which dont look even slightly believable. If
              you are going to use a passage of Lorem Ipsum,
            </p>
            <p className="about__text p__color">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
            </p>
            <div className="about__button d__flex align__items__center">
              <a href="#cv">
                <button className="about btn pointer">Download Cv</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;