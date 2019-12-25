import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";
import ReactProject from "./react";
import AngularJSProject from "./angular";
import MONGODBProject from "./mongodb";
import VueJsProject from "./vuejs";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <ReactProject />;
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <AngularJSProject />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <VueJsProject />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <MONGODBProject />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>REACT</Tab>
          <Tab>ANGULAR</Tab>
          <Tab>VUEJS</Tab>
          <Tab>MONGODB</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
