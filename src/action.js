/*These action creators define the various actions that can be dispatched in the Redux application to perform tasks such as adding, deleting, toggling, loading, and saving tasks. The payload property contains the data associated with each action, such as the task object, task ID, or task list.*/




// Action type for adding a new task
export const ADD_TASK = "ADD_TASK";

// Action type for deleting a task
export const DELETE_TASK = "DELETE_TASK";

// Action type for viewing a task 
export const VIEW_TASK = "VIEW_TASK";

// Action type for toggling the completion status of a task
export const TOGGLE_TASK = "TOGGLE_TASK";

// Action type for loading tasks (for initializing the state with existing tasks)
export const LOAD_TASKS = "LOAD_TASKS";

// Action type for saving tasks (to persist tasks to storage, e.g., localStorage or a database)
export const SAVE_TASKS = "SAVE_TASKS";

// Action creator to add a new task
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Action creator to view a task
export const viewTask = (taskId, message) => ({
  type: VIEW_TASK,
  payload: taskId,
  message,
});

// Action creator to toggle the completion status of a task

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});


// Action creator to delete a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

// Action creator to load tasks (for initializing the state with existing tasks)

export const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: tasks,
});

// Action creator to save tasks (to persist tasks to storage, e.g., localStorage or a database)
export const saveTasks = () => ({
  type: SAVE_TASKS,
});
