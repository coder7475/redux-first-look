// See payload in action 
/**
 * TODO: Manage products count and name states globally using redux
 * * 1. Declare Initial States
 * * 2. Create redux actions
 * * 3. Create reducer
 * * 4. Create Store
 * * 5. Subscribe to console
 * * 6. Dispatch Actions with payload
 */

// ? Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// ? Initial States
const initialProducts = {
  products: ["wood", "green sugar"],
  numOfProducts: 2,
}

// ? Redux Actions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  }
}

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  }
}

const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  }
}

