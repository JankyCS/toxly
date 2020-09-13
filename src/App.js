import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Upload from "./components/layout/Upload";
import PageNotFound from "./components/layout/PageNotFound";
import Chemicals from "./components/layout/Chemicals";
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/chemicals" component={Chemicals} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;