// See payload in action 
/** 
 * ? Products App
 * ? DONE: Manage products count and name states globally using redux
 * * 1. Declare Initial States
 * * 2. Create redux actions
 * * 3. Create reducer
 * * 4. Create Store
 * * 5. Subscribe to console
 * * 6. Dispatch Actions with payload
 */
// Import Redux 
const { createStore } = require("redux");

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