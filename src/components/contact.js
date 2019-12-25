import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Bhawana Prasain</h2>
            <img src="./bhawana.jpg" alt="avatar" />
            <p style={{ width: "75%", margin: "auto", paddingTop: "3em" }}>
              I spend more time in debugging my own code rather than writing
              code. Travelling to new places always makes me happy.I want to
              live with no excuses and travel with no regrets.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "'IBM Plex Sans', sans-serif"
                    }}
                  >
                    <i className="fa fa-phone-square" />
                    9861-583204
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "'IBM Plex Sans', sans-serif"
                    }}
                  >
                    <i className="fa fa-facebook-square" />
                    Bhawana Prasain
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "A'IBM Plex Sans', sans-serif"
                    }}
                  >
                    <i className="fa fa-envelope-square" />
                    bhawana.prs@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
