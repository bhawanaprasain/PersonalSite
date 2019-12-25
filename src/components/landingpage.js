import React from "react";
import { Grid, Cell } from "react-mdl";

function LandingPage() {
  return (
    <div className="landing-grid">
      <div style={{ width: "100%", margin: "auto" }}>
        <Cell col={12}>
          <img src="/bhawana.jpg" alt="avatar" className="avatar" />
        </Cell>
        <div className="banner-text">
          <h1>Full Stack Web Developer</h1>
          <hr />
          <p>
            HTML/CSS | Mongoose | React | NodeJs | Express | Python | C | C++
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bhawana-prasain-8555b9168/">
              <i className="fa fa-linkedin-square" />
            </a>

            <a href="https://github.com/bhawanaprasain">
              <i className="fa fa-github-square" />
            </a>

            <a href="https://www.facebook.com/bhabana.prasain.1">
              <i className="fa fa-facebook-square" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
