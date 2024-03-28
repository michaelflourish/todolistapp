import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        style={{ padding: '10px', width: '70%', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={() => { addTask(newTaskName); setNewTaskName(''); }} style={{ padding: '10px', width: '25%', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
        Add Task
        </button>
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((task) => (
            <TodoItem key={task.id} task={task} onToggle={toggleTaskCompleted} onDelete={deleteTask} />
        ))}
        </ul>
  </div>
  
        

  );
}




export default TodoList;
