import { useState } from 'react';

function TodoItem({ task, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleToggleCompleted = () => {
        onUpdate(task.id, { completed: !task.completed });
    };

    const handleSaveEdit = () => {
        if (editTitle.trim() !== '') {
            onUpdate(task.id, { title: editTitle });
        }
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={task.completed || false} 
                onChange={handleToggleCompleted} 
            />
            
            {isEditing ? (
                <input 
                    type="text" 
                    className="edit-input"
                    value={editTitle} 
                    onChange={(e) => setEditTitle(e.target.value)}
                    autoFocus
                />
            ) : (
                <span className="task-text">{task.title}</span>
            )}
            
            <div className="item-actions">
                {isEditing ? (
                    <button className="save-btn" onClick={handleSaveEdit}>Save</button>
                ) : (
                    <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;