import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoList.css";

function TodoList() {
  const { tasks, addTask, completeTask, removeTask } = useContext(TodoContext);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="todo-list">
      <div className="add-task">
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Enter task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <span>{task.name}</span>
              <div className="actions">
                <button onClick={() => completeTask(task.id)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => removeTask(task.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total tasks: {tasks.length}</p>
        <p>Completed tasks: {tasks.filter((task) => task.completed).length}</p>
      </div>
    </div>
  );
}

export default TodoList;
