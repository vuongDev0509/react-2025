import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import SearchItem from './components/SearchTodoItem';
import SortableTodoList from './components/SortableTodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const reorderTodos = (newOrder) => {
    setTodos(newOrder);
  };

  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
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
  
  // console.log(todos)
  // console.log("check todoss")

  return (
    <div className="vv-toto-app"> 
      <div className='vv-toto-app-inner'> 
          <h2>Todo List</h2>
          <TodoInput addTodo={addTodo} />
          <SearchItem 
            value={searchTerm} 
            onChange={setSearchTerm} 
          />

          <SortableTodoList todos={filteredTodos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo}
                    reorderTodos={reorderTodos}
                    setTodos={setTodos}
          />
      </div>
    </div>
  );
}

export default App;
