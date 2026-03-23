function TodoItem({task}) {
    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={task.completed} readOnly />
            <span>{task.text}</span>
        </div>
    );
}

export default TodoItem;