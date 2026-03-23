import { useState, useEffect } from 'react';
import TodoList from './components/TodoList.jsx';
import './index.css';

const API_URL = 'http://localhost:3000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Load error:", err));
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim() === '') return;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTaskTitle, completed: false })
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
      });
  };

  const deleteTask = (taskId) => {
    fetch(`${API_URL}/${taskId}`, { method: 'DELETE' })
      .then(() => {
        setTasks(tasks.filter(task => task.id !== taskId));
      });
  };

  const updateTask = (taskId, updatedData) => {
    fetch(`${API_URL}/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(updatedTask => {
        setTasks(tasks.map(task => task.id === taskId ? updatedTask : task));
      });
  };

  return (
      <div className='app-container'>
          <h1>My todo list</h1>
          <form onSubmit={addTask} className='add-form'>
            <input
              type='text'
              placeholder='Add new task..'
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>

          <TodoList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      </div>
  );
}

export default App;