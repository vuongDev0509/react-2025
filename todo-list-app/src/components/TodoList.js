import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
    console.log(todos)
    console.log("TodoList")
    return (
        <div className="vv-toto-app__list"> 
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    index={index}
                    todo={todo} 
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    ) 
}
export default TodoList;