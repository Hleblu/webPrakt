import TodoItem from './TodoItem.jsx';

function TodoList({ tasks, onDelete }) {
    return (
        <div className='todo-list'>
            {tasks.map(task => (
                <TodoItem 
                    key = {task.id} 
                    task = {task} 
                    onDelete = {onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;