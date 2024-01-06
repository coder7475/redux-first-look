/**
 * TODO: create a todo app
 * ? fetch data using axios
 * ? use redux-thunk as middleware 
 * ? handle fetched data using redux-thunk
 * * Steps:
 * * 1. Declare Initial state
 * * 2. Define the actions
 * * 3. Write the reducers
 * * 4. Create the store and subscribe
 * * 5. Create the middlewares 
 * * 6. Apply the middleware
 * * 7. Dispatch the actions
 * * 8. Test the app
 */
// dependencies
const { createStore, applyMiddleware } = require('redux');
const { logger } = require("redux-logger");

// Constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

//? Initial state
const initialTodos = {
  data: [],
  isLoading: false,
  currentError: null
}

//? Actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST
  }
}

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  }
}

const getTododsFailure = (error) => {
  return {
    type: GET_TODOS_FAILURE,
    payload: error
  }
}

//? Reducer
const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
      break;
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case GET_TODOS_FAILURE:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    default:
      return state
      break;
  }
}

//? Create store and subscribe it to the console
const store = createStore(todosReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(getTodosRequest());








