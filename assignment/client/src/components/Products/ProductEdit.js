import React from "react";
import { connect } from "react-redux";
import { fetchProduct, updateProduct } from "../../actions";
import ProductForm from "./ProductForm";
import history from "../../history";
import _ from "lodash";
class ProductEdit extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      history.push("/");
    }
  }

  onSubmit = (formValues) => {
    this.props.updateProduct(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.product) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Product</h3>
        <ProductForm
          initialValues={_.pick(
            this.props.product,
            "productName",
            "brandName",
            "price"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.id],
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchProduct, updateProduct })(
  ProductEdit
);
