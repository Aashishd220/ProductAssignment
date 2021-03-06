import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "./types";
import products from "../apis/products";

import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createProduct = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await products.post("/products/", {
      ...formValues,
      userId,
    });
    dispatch({ type: CREATE_PRODUCT, payload: response.data });
    history.push("/");
  };
};
export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await products.get("/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = await products.get(`/products/${id}`);
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  };
};

export const updateProduct = (id, formValues) => {
  return async (dispatch) => {
    const response = await products.patch(`/products/${id}`, formValues);
    dispatch({ type: EDIT_PRODUCT, payload: response.data });
    history.push("/");
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await products.delete(`/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
    history.push("/");
  };
};
