import React from "react";
import MainScreen from "./screens/MainScreen";
import CountryCard from "./components/Individual Card/CountryCard";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route>
        <Route path="/" exact component={MainScreen} />
        <Route path="/:name" exact component={CountryCard} />
      </Route>
    </Router>
  );
};

export default App;
