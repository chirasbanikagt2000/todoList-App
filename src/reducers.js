

import {
  ADD_TASK,
  DELETE_TASK,
  VIEW_TASK,
  TOGGLE_TASK,
  LOAD_TASKS,
  SAVE_TASKS,
} from "./action";  // Importing action types

const initialState = {
  tasks: [],  // Initial state with an empty array of tasks
  viewedTask: null,  // Initial state for viewed task 
};


// Reducer function to manage tasks
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:   // Action to add a new task
      return {
        ...state,
        tasks: [...state.tasks, action.payload],  // Adding the new task to the tasks array
      };
    case DELETE_TASK:  // Action to delete a task
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),  // Removing the task with the specified ID
      };
    case VIEW_TASK:  // Action to view a task
      return {
        ...state,
        viewedTask: action.payload,  // Updating the viewed task ID
      };
    case TOGGLE_TASK:  // Action to toggle the completion status of a task
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }  // Toggling the completed status of the task with the specified ID
            : task
        ),
      };
    case LOAD_TASKS:  // Action to load tasks from storage
      return {
        ...state,
        tasks: [...action.payload],  // Loading tasks from the payload
      };

    case SAVE_TASKS:  // Action to save tasks to storage
      localStorage.setItem("tasks", JSON.stringify(state.tasks));   // Saving tasks to localStorage
      return state; // Returning the current state
    default:
      return state;  // Returning the current state for unknown actions
  }
};

export default taskReducer;  // Exporting the taskReducer

