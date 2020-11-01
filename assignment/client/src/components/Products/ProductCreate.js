import React from "react";
import { connect } from "react-redux";
import { createProduct } from "../../actions";
import ProductForm from "./ProductForm";
import { Redirect, Link } from "react-router-dom";
import history from "../../history";
class ProductCreate extends React.Component {
  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      console.log("ch2");
      history.push("/");
    }
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createProduct(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a product</h3>
        <ProductForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { createProduct })(ProductCreate);
