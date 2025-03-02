import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsEditing(false);
    setEditText(todo.text); // Reset text to original value
  };

  const handleSave = () => {
    if (!editText.trim()) return;
    
    updateTodo(todo._id, editText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo._id)}
      />
      
      {isEditing ? (
        <input
          type="text"
          className="todo-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          autoFocus
        />
      ) : (
        <span className={`todo-text ${todo.isCompleted ? 'completed' : ''}`}>
          {todo.text}
        </span>
      )}
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}><FaSave /></button>
            <button onClick={handleCancel}><FaTimes /></button>
          </>
        ) : (
          <>
            <button onClick={handleEdit}><FaEdit /></button>
            <button onClick={() => deleteTodo(todo._id)}><FaTrash /></button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;