import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class ProductForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <div>
        <form
          className="ui form error "
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="productName"
            component={this.renderInput}
            label="Product Name"
          />
          <Field
            name="brandName"
            component={this.renderInput}
            label=" Brand Name"
          />
          <Field name="price" component={this.renderInput} label=" Price" />

          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.productName) {
    errors.productName = "You must enter a product name";
  }
  if (!formValues.brandName) {
    errors.brandName = "You must enter a brand name";
  }
  if (!formValues.price) {
    errors.price = "You must enter a price";
  }

  return errors;
};
export default reduxForm({
  form: "Product Form",
  validate,
})(ProductForm);
