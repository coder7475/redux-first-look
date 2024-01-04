// See payload in action 
/** 
 * ? Products and Cart App
 * TODO: Multiple reducers Combination
 * * 1. Declare Initial States for products and carts
 * * 2. Create redux actions for products and carts
 * * 3. Create reducer for products and carts and combine them
 * * 4. Create Store - one store and pass combined reducer
 * * 5. Subscribe to console
 * * 6. Dispatch Actions with payloads to test
 */
// Import Redux 
const { createStore } = require("redux");

// ? Constants
// For Product Actions type
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// CART ACTION type
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";


// ? Initial States
// For Products
const initialProducts = {
  products: ["wood", "green sugar"],
  numOfProducts: 2,
}

// For Cart Products
const initialCartItems = {
  cart: ["rice"],
  numOfCartItems: 2,
}

// ? Redux Actions
// Product Actions
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

// Cart Actions
const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  }
}

const addCartItem = (product) => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  }
}

const removeCartItem = (product) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: product,
  }
}

// ? Redux Reducer
const productsReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
      break;
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        numOfProducts: state.numOfProducts + 1,
      }
      break;
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product !== action.payload),
        numOfProducts: state.numOfProducts - 1,
      }
      break;
    default:
      return state;
      break;
  }
}

// ? Create Store
const store = createStore(productsReducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct("kinler"));
store.dispatch(removeProduct("kinler"));