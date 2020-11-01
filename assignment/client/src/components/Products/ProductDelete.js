import React from "react";
import { fetchProduct, deleteStream } from "../../actions";
import { connect } from "react-redux";
import history from "../../history";

class ProductDelete extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (!this.props.isSignedIn) {
      history.push("/");
    }
  }
  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <div>
        <button
          className="ui button negative"
          onClick={() => {
            this.props.deleteStream(id);
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  render() {
    if (!this.props.selectedProduct) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>
          {`Are you sure you want to delete this product: ${this.props.selectedProduct.productName}`}
        </h2>
        {this.renderActions()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedProduct: state.products[ownProps.match.params.id],
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchProduct, deleteStream })(
  ProductDelete
);
