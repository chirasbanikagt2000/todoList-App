

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "./action";  // Importing action creators
import "./styles.css";  // Importing styles

// Component for displaying the list of tasks
const TaskList = () => {

  // State to manage whether tasks should be shown or hidden
  const [showTasks, setShowTasks] = useState(false);

  // State to manage the currently viewed task 
  const [viewedTask, setViewedTask] = useState();

   // Retrieving tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);

  // Dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

   // Function to handle deleting a task
  const handleDeleteTask = (taskId) => { 
    dispatch(deleteTask(taskId));   // Dispatching deleteTask action with the task ID
  };


  // Function to handle toggling the completion status of a task
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));  // Dispatching toggleTask action with the task ID
  };

   // Effect to update localStorage when tasks change
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));   // Storing tasks in localStorage
  }, [tasks]);  

  

  // Effect to load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = window.localStorage.getItem("tasks");  // Retrieving tasks from localStorag
    if (savedTasks) {
      dispatch({ type: "LOAD_TASKS", payload: JSON.parse(savedTasks) }); // Dispatching LOAD_TASKS action with saved tasks
    }
  }, [dispatch]);

  return (
    <div className="taskheading">
      <h2>List of Tasks</h2>


  {/* Button to toggle visibility of tasks */}
      <button
        onClick={() => {
          if (viewedTask) {

             // If a single task is being viewed, go back to task list
            setViewedTask(null);
          } else {
            // Toggle visibility of task list
            setShowTasks(!showTasks);
          }
        }}
      >

         {/* Change button text based on current state */}
        {viewedTask ? "Back to Tasks" : showTasks ? <i class="fa-solid fa-eye-slash"> Hide task</i>  : <i class="fa-solid fa-eye"> View task</i>}
      </button>

      {showTasks && (
        <ul className="task-list">

           {/* Show message if no tasks are available */}
          {tasks.length === 0 ? (
            <li className="empty-task">No tasks available</li>
          ) : (

            // Otherwise, map through tasks and render each task item
            tasks.map((task) => (
              <li className="task-item" key={task.id}>

                 {/* Clicking task text toggles completion status */}
                <span
                  className={`task-text ${task.completed ? "completed" : ""}`}
                  onClick={() => handleToggleTask(task.id)}
                >
                  {task.text}
                </span>
                 {/* Button to delete task */}
                <button onClick={() => handleDeleteTask(task.id)}> <i className="fa-solid fa-trash-can"></i>

                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default TaskList;








