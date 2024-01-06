// create a counter app state management using redux
// only for learning purpose

/**
 * ?DONE: Create redux app state management for a simple counter app
 * * 1. Initial State Declaration
 * * 2. Create pure functions for redux actions
 * * 3. Create reducer function to handle logic
 * * 4. Create Store to save states and subscribe to UI
 * * 5. Subscribe to cosole
 * * 6. Dispatch actions from store
 * ? See the output
 */
// imports
const { createStore } = require("redux");

// declare constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// ? Step 1: Declate Initial State
const initialState = {
  count: 0,
};

// ? Steps 2: Create the redux actions
const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};

const resetCount = () => {
  return {
    type: RESET,
  };
};

// ? Step 3: create reducer
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    case RESET:
      return {
        ...state,
        count: 0,
      };
      break;
    default:
      state;
      break;
  }
};

// ? Step 4: Create store
const store = createStore(countReducer);

// ? Step 5: Subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// ? Step 6: Dispatch to see output
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
