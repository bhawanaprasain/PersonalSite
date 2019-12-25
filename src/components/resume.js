import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="./bhawana.jpg"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <div>
              <h2 style={{ paddingTop: "2em" }}>Bhawana Prasain</h2>
              <h4 style={{ color: "grey" }}>Programmer</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <p>
                Computer code might look like a foreign language, but it is a
                language anybody can pick up quickly, with a little practice!
                Learn more about coding with DK’s Computer Coding, and on
                DKfindout!
              </p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <h5>Address</h5>
              <p>Deep, Pokhara</p>
              <h5>Phone</h5>
              <p>1234567890</p>
              <h5>Email</h5>
              <p>bhawana.prs@gmail.com</p>

              <h5>Website</h5>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

              <p>mywebsite.com</p>
            </div>
          </Cell>

          <Cell className="resume-right-col" col={8}>
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
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
