import React, { Component } from "react";
import { useSpring, animated } from "react-spring";

import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

const Resume = () => {
  const Animation = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 80 },
    config: { duration: 500 }
  });
  return (
    <div>
      <Grid>
        <Cell col={3}>
          <div className="personaldetails">
            <div style={{ textAlign: "center" }}>
              <img
                src="./bhawana.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <div>
              <h2 style={{ paddingTop: "2em", color: "green" }}>
                Bhawana Prasain
              </h2>
              <h3 style={{ color: "black" }}>Traveller</h3>
              <hr style={{ borderTop: "3px solid green", width: "100%" }} />

              <div className="card">
                <Card
                  shadow={0}
                  style={{
                    width: "512px",
                    margin: "auto"
                  }}
                >
                  <CardText className="contact-details">
                    <h3>Contact Details</h3>
                    <hr style={{ borderTop: "3px solid green" }} />

                    <h4>Address</h4>
                    <p>Deep, Pokhara</p>
                    <h4>Email</h4>
                    <p>bhawana.prs@gmail.com</p>
                  </CardText>
                </Card>
              </div>
            </div>
          </div>
        </Cell>

        <Cell col={1}></Cell>
        <Cell style={Animation} className="resume-right-col" col={7}>
          <animated.div style={Animation}>
            <h2>Education</h2>
            <Education
              startYear={2008}
              endYear={2012}
              schoolName="Siddhartha Banasthali Institute"
              schoolDescription="Happiest days of my life"
            />

            <Education
              startYear={20013}
              endYear={2016}
              schoolName="Trinity International College"
              schoolDescription="Happiest days of my life"
            />
            <hr style={{ borderTop: "3px solid green" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Traineeship"
              jobDescription="Automated web testing"
            />
            <Experience
              startYear={2019}
              endYear={2020}
              jobName="React Developer"
              jobDescription="Frontend Web Developer"
            />
            <hr style={{ borderTop: "3px solid green" }} />
            <h2>Skills</h2>
            <Skills skill="JavaScript" progress={60} buffer={86} />
            <Skills skill="React" progress={50} buffer={67} />
            <Skills skill="HTML/CSS" progress={50} buffer={67} />

            <Skills skill="Python" progress={40} buffer={60} />
          </animated.div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
