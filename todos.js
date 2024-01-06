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
 * * 5. Create the function to fetch data - async action creator
 * * 6. Apply the middleware - logger, redux-thunk
 * * 7. Dispatch the actions
 * * 8. Test the app
 */
// dependencies
const axios = require('axios').default;
const { createStore, applyMiddleware } = require('redux');
const { logger } = require("redux-logger");

// Constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

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

//? create a async action creator 
//? redux thunk allows writing a function with logic inside
//? that allows us to interact with redux dispatch and get methods
//TODO: Create a function to dispatch actions on asynchronous request state
function fetchTodosData() {
  return (dispatch) => {
    dispatch(getTodosRequest());
   axios.get(TODOS_URL) 
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(res.data);
    })
  }
}

//? Create store and subscribe it to the console
const store = createStore(todosReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(fetchTodosData());






