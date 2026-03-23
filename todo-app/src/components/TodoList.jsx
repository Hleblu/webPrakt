import TodoItem from './TodoItem.jsx';

function TodoList({ tasks, onDelete, onUpdate }) {
    return (
        <div className='todo-list'>
            {tasks.map(task => (
                <TodoItem 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
}

export default TodoList;