import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import SearchItem from './components/SearchTodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const removeTodo = (index) =>{
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const updateTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="vv-toto-app"> 
      <div className='vv-toto-app-inner'> 
          <h2>Todo List</h2>
          <TodoInput addTodo={addTodo} />
          <SearchItem 
            value={searchTerm} 
            onChange={setSearchTerm} 
          />

          <TodoList todos={filteredTodos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo}
          />
      </div>
    </div>
  );
}

export default App;
