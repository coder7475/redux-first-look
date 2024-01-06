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

const getTodosSuccess = () => {
  return {
    type: GET_TODOS_SUCCESS
  }
}

const getTododsFailure = () => {
  return {
    type: GET_TODOS_FAILURE
  }
}
















