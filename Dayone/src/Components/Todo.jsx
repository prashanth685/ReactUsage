import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState([]);
  const [input, setinput] = useState("");
  const addTask = () => {
    if (input === "") return;
    setTask([...task, input]);
    setinput("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your task"
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {task.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
