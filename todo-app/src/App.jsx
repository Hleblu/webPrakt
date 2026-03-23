import TodoList from './components/TodoList.jsx';
import './index.css';

const taskList = [
    { id: 1, text: 'Learn the React basics', completed: true },
    { id: 2, text: 'Complete the exercise', completed: false },  
    { id: 3, text: 'Go to sleep', completed: false }  
];

function App()
{
    return (
        <div className='app-container'>
            <h1>My todo list</h1>
            <TodoList tasks={taskList}/>
        </div>
    );
}

export default App;