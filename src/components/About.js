import React, { Component } from "react";
import resume from "/Users/riyadsarsour/Desktop/pratice/aboutsite/src/resume.json";

const About = () => {
  var profilepic = resume.main.image;
  var bio = resume.main.bio;
  var city = resume.main.city;
  var state = resume.main.state;
  var resumeDownload = resume.main.resumedownload;

  return (
    <div>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Riyad Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Riyad</h2>
            <p>{bio}</p>
            <h2>Location</h2>
            <p>
              <span>
                {city} {state}
              </span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={resumeDownload} className="button">
                <i className="fas fa-download"></i> Download Resume
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
