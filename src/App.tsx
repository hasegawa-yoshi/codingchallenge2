import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main ";
import Search from "./components/pages/Search";
import { useSelector } from "react-redux";
import Loading from "./components/pages/Loading ";
import Error from "./components/pages/Error";

function App() {
  const latlngSelector = useSelector((state: any) => state.LatLngReducer);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {latlngSelector.lat === 999 ? <Loading /> : <Main />}
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
