import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <div class="experience">
        <Grid>
          <Cell col={4}>
            <p>
              {this.props.startYear} -{this.props.endYear}
            </p>
          </Cell>
          <Cell col={8}>
            <h4>{this.props.jobName}</h4>
            <p>{this.props.jobDescription}</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Experience;
