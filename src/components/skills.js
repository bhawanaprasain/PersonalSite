import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

export class Skills extends Component {
  render() {
    return (
      <div class="skills">
        <Grid>
          <Cell col={12}>
            <div style={{ display: "flex" }}>
              {this.props.skill}
              <ProgressBar
                style={{ margin: "auto", width: "75%" }}
                progress={this.props.progress}
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Skills;
