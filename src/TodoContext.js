import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, completeTask, removeTask }}>
      {children}
    </TodoContext.Provider>
  );
}
