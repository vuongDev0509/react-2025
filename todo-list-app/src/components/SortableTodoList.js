// Import necessary hooks and components from dnd-kit core
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';
  
  // Import helpers for sortable lists
  import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
  
  // Import custom sortable item component
  import SortableTodoItem from './SortableTodoItem';
  
  function SortableTodoList({ todos, setTodos, removeTodo, toggleTodo, updateTodo }) {
    // Define drag-and-drop sensors: mouse/touch (Pointer) and keyboard
    const sensors = useSensors(
      useSensor(PointerSensor, {
        activationConstraint: {
          distance: 5, //enable drag if mouse moves >= 5px
        },
      }),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );
    
  
    // Callback when drag ends
    const handleDragEnd = (event) => {
      const { active, over } = event;
  
      // Only update if item was dropped on a different item
      if (active.id !== over?.id) {
        // Find current and new index of the dragged item
        const oldIndex = todos.findIndex(todo => todo.id === active.id);
        const newIndex = todos.findIndex(todo => todo.id === over.id);
  
        // Reorder the todos array using arrayMove and update state
        setTodos((todos) => arrayMove(todos, oldIndex, newIndex));
      }
    };
  
    return (
      // DndContext wraps the entire drag-and-drop system
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter} // determines drop target based on center proximity
        onDragEnd={handleDragEnd} // function triggered when item is dropped
      >
        {/* SortableContext enables sorting among children */}
        <SortableContext
          items={todos.map(todo => todo.id)} // must be unique ids
          strategy={verticalListSortingStrategy} // items are sorted vertically
        >
          {/* Main container for the todo list */}
          <div className="vv-toto-app__list">
            {/* Map through todos and render SortableTodoItem for each */}
            {todos.map((todo, index) => (
              <SortableTodoItem
                key={todo.id}     // unique React key
                id={todo.id}      // id for dnd-kit
                index={index}     // index in the list
                todo={todo}    
                removeTodo={removeTodo}    
                toggleTodo={toggleTodo}       
                updateTodo={updateTodo}  
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    );
  }
  
  export default SortableTodoList;
  