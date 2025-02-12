import TodoItem1 from "./TodoItem1";
import React from "react";

function TodoContainer({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem1
            key={`${item.name} - ${item.dueDate}`} // Uses a combination of name and date as a unique key
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}

export default TodoContainer;
