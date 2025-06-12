import React, { useState }  from 'react';

function TodoItem({ todo, index, key, removeTodo, toggleTodo, updateTodo }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);

    const handleEdit = () =>{
        console.log("test handleEdit")
        setIsEditing(true)
    }

    const handleSave = () => {
        updateTodo(index, editValue); 
        setIsEditing(false);
    };

    return (
        <div className="todo-item" key={key}> 
            {isEditing  ? (
                <>
                    <input 
                        type="text" 
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    />
                    <button onClick={handleSave}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check h-4 w-4" __v0_r="0,4637,4646"><path d="M20 6 9 17l-5-5"></path></svg>
                    </button>
                </>
            ): (
                <>
                    <label>{todo.text}</label>
                    <div className='button'> 
                        <button  onClick={() => handleEdit()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen h-4 w-4" __v0_r="0,6034,6043"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
                        </button>
                        <button onClick={() => removeTodo(index)}>x</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default TodoItem;