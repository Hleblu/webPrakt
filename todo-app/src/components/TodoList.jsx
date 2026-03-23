import TodoItem from './TodoItem.jsx';

function TodoList({ tasks }) {
    return (
        <div className='todo-list'>
            {tasks.map(task => (
                <TodoItem key={task.id} task = {task}/>
            ))}
        </div>
    );
}

export default TodoList;