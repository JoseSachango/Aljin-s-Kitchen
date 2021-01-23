import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <MainPage />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
