import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Card
          shadow={0}
          style={{ width: "650px", height: "500px", margin: "auto" }}
        >
          <CardText>
            <p>
              Travelling to places of natural beauty always amuses me . I either
              get lost in Nature or while surfing the internet .I like
              literature . Reading novels always inspires me to think in all
              possible ways according to society. Movies based on true stories
              has helped me a lot to know about our human civilization, history
              and trend of development trends.I always like to keep my mind
              occupied with new stories about innovations and technology.
            </p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default About;
