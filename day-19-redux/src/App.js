import './App.css';
// The typical Redux flow is as follows:
// A user interacts with the View to trigger a state update
// When a state update is required, the View dispatches an action
// The reducers receive the action from the dispatch and updates the state in the Store according to what is described by the action
// The View is subscribed to the Store to listen for state changes. The changes are notified via the subscription methods and the View updates its UI accordingly
function App() {
  //   //action to add a todo item
  // { type: 'ADD_TODO', text: 'This is a new todo' } 
  // //action that pass a login payload
  // { type: 'LOGIN', payload: { username: 'foo', password: 'bar' }}
  //{ type: 'INCREASE'} 

  //takes in the current state and action
//updates the value based on the action's type
// function counterReducer(state = { value: 0 }, action) {
//   switch (action.type) {
//     case 'INCREASE':
//       return { value: state.value + 1 }
//     case 'DECREASE':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }

// const store = createStore(myComponent);

// 1. cofigureStore
// It will create the instance of the Redux store by just accepting a named object to automatically set up the Redux DevTools extension. 

// 2. createAction
// This function will accept the initial state's value and a lookup table of action types to perform better. It will then create an action for handling all the action types mentioned. 

// 3. createReducer
// This function will accept the value of the initial state and a lookup table of the action types to create a reducer for handling all types of actions. 

// 4. Createslice
// This function will accept the value of the initial state and a lookup table of reducer names and action creator function. 

  return (
    <div className="App">

    </div>
  );
}

export default App;
