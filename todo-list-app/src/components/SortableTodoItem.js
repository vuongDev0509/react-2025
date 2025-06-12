import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import TodoItem from './TodoItem';

function SortableTodoItem({ id, ...props }) {
  // Destructure the properties returned by useSortable
  const {
    attributes,     // Accessibility attributes (e.g., role, aria)
    listeners,      // Event listeners for drag events (onPointerDown, etc.)
    setNodeRef,     // Ref callback to bind the drag logic to the DOM element
    transform,      // Position change during drag (x, y)
    transition,     // Smooth transition effect between positions
  } = useSortable({ id }); // Hook needs a unique ID for each item

  // Define styles for the sortable item
  const style = {
    transform: CSS.Transform.toString(transform), 
    transition,                                  
    cursor: 'grab',                             
  };

  return (
    // This wrapper div becomes the draggable element
    <div
      ref={setNodeRef}     // Connect the DOM element to drag logic
      style={style}        // Apply drag/transition styles
      {...attributes}      // Apply accessibility attributes
      {...listeners}       // Apply event listeners (drag start, move, end)
    >
      {/* Render the original TodoItem inside the draggable wrapper */}
      <TodoItem {...props} />
    </div>
  );
}

export default SortableTodoItem;
