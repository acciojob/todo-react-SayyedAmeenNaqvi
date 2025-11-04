import React, { useState } from "react";
import './../styles/App.css';
import Input from "./Input";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    setTodos([...todos, text]);
  }

  function handleDelete(index){
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div>
        <h1>To-Do List</h1>
        <Input onAdd={handleAddTodo} />
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default App

