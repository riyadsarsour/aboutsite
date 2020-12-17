import React, { Component } from "react";
import resume from "../resume.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    var network = resume.main.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    return (
      <header>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {resume.main.name}.</h1>
            <h3>
              I'm a {resume.main.city} based{" "}
              <span>{resume.main.occupation}</span>. {resume.main.description}.
            </h3>
            <hr />
            <ul className="social">{network}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}
