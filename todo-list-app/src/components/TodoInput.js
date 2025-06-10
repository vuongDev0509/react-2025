import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="vv-toto-app__input">
        <input
            type="text"
            value={value}
            placeholder="Please add todo item..."
            onChange={(e) => setValue(e.target.value)}
        />
        
        <button type="submit">
            <svg svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
            </svg>
        </button>
    </form>
  );
}

export default TodoInput;

