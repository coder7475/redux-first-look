/**
 * TODO: create a todo app
 * ? fetch data using axios
 * ? use redux-thunk as middleware 
 * ? handle fetched data using redux-thunk
 * * Steps:
 * * 1. Declare Initial state
 * * 2. Define the actions
 * * 3. Write the reducers
 * * 4. Create the store
 * * 5. Create the middlewares 
 * * 6. Apply the middleware
 * * 7. Dispatch the actions
 * * 8. Test the app
 */

//? Initial state
const initialTodos = {
  data: [],
  isLoading: false,
  currentError: null
}

