


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./action";


// Component for inputting tasks
const TaskInput = () => {
  const [taskText, setTaskText] = useState(""); // State for storing task input text
  const dispatch = useDispatch();    // Redux dispatch function


// Function to handle adding a new task  
  const handleAddTask = () => {
    if (taskText.trim()) {   // Check if task text is not empty or only whitespace
      dispatch(addTask({ id: Date.now(), text: taskText }));  // Dispatch addTask action with new task object
      setTaskText("");  // Clear task input text
      console.log("Tasks stored:", JSON.parse(localStorage.getItem("tasks")));  // Log tasks stored in localStorage
    }
  };

  return (
    <div className="add">  {/* Container for task input */}
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}  // Update taskText state as user types
        placeholder="Enter task..."
        id="myInput"
      />
      <button onClick={handleAddTask}> <i class="fa-solid fa-plus"></i>Add</button> {/* Button to add a new task */}
    </div>
  );
};

export default TaskInput; // Export TaskInput component