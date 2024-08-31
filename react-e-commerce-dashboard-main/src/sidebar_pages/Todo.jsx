import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './todo.css';
import '../Pages/login.css'

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text
    };
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div className='outer'>
    <div className="todo">
      <h1>Todo </h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
    </div>
  );
};

export default Todo;
