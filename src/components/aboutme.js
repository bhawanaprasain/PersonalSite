import React, { Component } from "react";
import { useSpring, animated } from "react-spring";

import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

const About = () => {
  const multiAnimation = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 120 },
    config: { duration: 500 }
  });

  return (
    <div className="about">
      <Card
        shadow={0}
        style={{ width: "650px", height: "500px", margin: "auto" }}
      >
        <CardText>
          <animated.p style={multiAnimation}>
            Travelling to places of natural beauty always amuses me . I either
            get lost in Nature or while surfing the internet .I like literature
            . Reading novels always inspires me to think in all possible ways
            according to society. Movies based on true stories has helped me a
            lot to know about our human civilization, history and trend of
            development trends.I always like to keep my mind occupied with new
            stories about innovations and technology.
          </animated.p>
        </CardText>
      </Card>
    </div>
  );
};

export default About;
