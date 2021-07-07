import { Route, Switch } from "react-router-dom";
import "./App.module.scss";

import Home from "./containers/Home";
import Cart from "./containers/Cart";

import { React } from "react";

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="products/:id"></Route>

        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </>
  );
};

export default App;
