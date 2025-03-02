import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

const API_URL = '/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(API_URL);
        setTodos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch todos. Please try again later.');
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    try {
      const response = await axios.post(API_URL, { text });
      setTodos([response.data, ...todos]);
    } catch (err) {
      setError('Could not add todo. Please try again.');
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todoToToggle = todos.find(todo => todo._id === id);
      const response = await axios.patch(`${API_URL}/${id}`, {
        isCompleted: !todoToToggle.isCompleted
      });

      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
    } catch (err) {
      setError('Could not update todo. Please try again.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Could not delete todo. Please try again.');
    }
  };

  const updateTodo = async (id, newText) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, { text: newText });
      setTodos(todos.map(todo => 
        todo._id === id ? response.data : todo
      ));
    } catch (err) {
      setError('Could not update todo. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>MERN Todo List</h1>
      {error && <div className="error">{error}</div>}
      <TodoForm addTodo={addTodo} />
      {loading ? (
        <div className="loader">Loading todos...</div>
      ) : (
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
}

export default App;




