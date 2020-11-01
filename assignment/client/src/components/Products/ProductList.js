import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";
import { Link } from "react-router-dom";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderAdmin = (product) => {
    if (product.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/products/edit/${product.id}`}
            className="ui button primary"
          >
            Edit
          </Link>
          <Link
            to={`/products/delete/${product.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderCreate(stream) {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/products/new" className="ui button primary">
            Create Product
          </Link>
        </div>
      );
    }
  }

  renderList = () => {
    return this.props.products.map((product) => {
      return (
        <div className="item" key={product.id}>
          {this.renderAdmin(product)}

          <div className="content">
            <div className="title">{product.productName}</div>
            <div className="description">{product.brandName}</div>
            <div className="description">Rs.{product.price}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    if (this.props.products.length === 0 && !this.props.isSignedIn) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>No products available. You need to sign in to add products</h2>
        </div>
      );
    }
    return (
      <div>
        <h2>Products</h2>
        {this.props.products.length === 0 && <h3>Add New Products</h3>}
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchProducts })(ProductList);
