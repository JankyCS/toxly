import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import PageNotFound from "./components/layout/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
