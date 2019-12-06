import React, { Component } from "react";
import "./styles/_global.scss";
import { Nav } from "./components/Navigation";
import { Email } from "./pages/Email";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Question } from "./pages/Question";
import { DisplayBadges } from "./pages/Badges";

class App extends Component {
  render(props) {
    return (
      <Router>
        <div className="container margin-top">
          <Nav />
          <Switch>
            <Route path="/email" render={() => <Email />} />
            <Route path="/question" render={() => <Question />} />
            <Route path="/badges" render={() => <DisplayBadges />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
