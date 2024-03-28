import React from 'react';

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', margin: '5px 0', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <li
          style={{ textDecoration: task.completed ? 'line-through' : 'none', flexGrow: 1, cursor: 'pointer' }}
          onClick={() => onToggle(task.id)}
        >
          {task.name}
        </li>
        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px', backgroundColor: '#ff4757', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', padding: '5px 10px' }}>
          Delete
        </button>
</div>

  );
}

export default TodoItem;
