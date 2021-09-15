import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TodoLists from "./components/TodoLists/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={TodoLists} />
      </Switch>
    </Router>
  );
}

export default App;
