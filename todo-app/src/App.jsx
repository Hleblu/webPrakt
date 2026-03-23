import TodoList from './components/TodoList.jsx';
import './index.css';
import { useState } from 'react';

const initialTaskList = [
    { id: 1, text: 'Learn the React basics', completed: true },
    { id: 2, text: 'Complete the exercise', completed: false },  
    { id: 3, text: 'Go to sleep', completed: false }  
];

function App()
{
  const [tasks, setTasks] = useState(initialTaskList);
  const [newTaskText, setNewTaskText] = useState('');
  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
      <div className='app-container'>
          <h1>My todo list</h1>
          <form onSubmit={addTask} className='add-from'>
            <input
              type='text'
              placeholder='Add new task..'
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
          </form>

          <TodoList tasks={tasks} onDelete={deleteTask}/>
      </div>
  );
}

export default App;