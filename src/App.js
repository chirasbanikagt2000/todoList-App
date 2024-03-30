


import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./reducers"; // Importing the taskReducer from reducers.js
import TaskInput from "./TaskInput";// Importing the TaskInput component
import TaskList from "./TaskList";// Importing the TaskList component
import "./styles.css";// Importing styles


// Creating the Redux store with the taskReducer and applying thunk middleware
const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


// Loading saved tasks from localStorage if available and dispatching a LOAD_TASKS action
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
if (savedTasks) {
  store.dispatch({ type: "LOAD_TASKS", payload: savedTasks });
}


// Main App component
const App = () => {
  return (
    <Provider store={store}>  {/* Providing the Redux store to the entire application */}
      <div className="todo"> {/* Main container */}
        <h1>Todo App</h1> 
        <TaskInput /> {/* Component for inputting tasks */}
        <TaskList /> {/* Component for displaying task list */}
      </div>
    </Provider>
  );
};

export default App; // Exporting the App component









