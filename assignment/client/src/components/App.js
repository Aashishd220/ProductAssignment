import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import ProductList from "./Products/ProductList";
import ProductCreate from "./Products/ProductCreate";
import ProductEdit from "./Products/ProductEdit";
import ProductDelete from "./Products/ProductDelete";

function App() {
  return (
    <div style={{ width: "70%", marginLeft: "15%" }}>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={ProductList} />
        <Route path="/products/new" exact component={ProductCreate} />
        <Route path="/products/edit/:id" exact component={ProductEdit} />
        <Route path="/products/delete/:id" exact component={ProductDelete} />
      </Router>
    </div>
  );
}

export default App;
