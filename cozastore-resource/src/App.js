import React from "react";
import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/productDetail";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Layout>
                <HomePage />
              </Layout>
            )}
          />
        </Switch>
        <Switch>
          <Route
            path="/ProductDetail/:id"
            component={() => (
              <Layout>
                <ProductDetail />
              </Layout>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
