import React from 'react';
import TodoList from './TodoList';
// import './App.css'; // Uncomment if using CSS

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontSize: '24px', margin: '20px 0' }}>
        Michael Flourish's To-Do List
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
