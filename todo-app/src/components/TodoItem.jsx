function TodoItem({task, onDelete}) {
    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={task.completed} readOnly />
            <span className="task-text">{task.text}</span>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    );
}

export default TodoItem;