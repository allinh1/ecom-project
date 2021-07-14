import { CartProvider } from "./context/context";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.module.scss";

import Home from "./containers/Home";
import Cart from "./containers/Cart";

import { React } from "react";

const App = () => {

  return (

    <Router>

        <CartProvider>
        
        <Switch>

          <Route exact path="/" component={Home}></Route>

          <Route exact path="products/:id"></Route>

          <Route path="/cart" component={Cart}></Route>

        </Switch>

        </CartProvider>

      </Router>

  );
};

export default App;
