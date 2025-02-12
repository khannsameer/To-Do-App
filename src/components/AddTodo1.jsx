import { useRef } from "react";
// Consider whether useRef is the best approach. useState might be more suitable if the component needs to re-render on input changes.

// import { useState } from "react"
// Keeping this import commented suggests you initially used useState. If reactivity is needed, reconsider using it.

import { MdOutlineAddComment } from "react-icons/md";

function AddTodo1({ onNewItem }) {
  // const [todoName , setTodoName] = useState("");
  // const [todoDate , setTodoDate] = useState("");
  // Using useRef instead of useState means the component won’t re-render when input values change.

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //     setTodoName(event.target.value);
  // }
  // const handleDateChange = (event) => {
  //     setTodoDate(event.target.value);
  // }
  // These handlers were used for state management but are now unnecessary with useRef.

  const handleAddButtonClick = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;

    // Clearing input fields after adding a new item
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, todoDate);
    // Ensure that onNewItem is handling empty values properly.

    // setTodoName("");   // Reset input after adding
    // setTodoDate("");   // Reset input after adding
    // No longer needed since we are using refs instead of state.
  };

  return (
    <>
      <div className="container text-center">
        <div className="row itemRow">
          <div className="col">
            <input
              type="text"
              ref={todoNameElement}
              id="username"
              name="username"
              placeholder="Enter your name"
            />
            {/* Consider using label for accessibility */}
          </div>
          <div className="col">
            <input
              type="date"
              ref={dueDateElement}
              id="date-input"
              placeholder="YYYY-MM-DD"
            />
            {/* The placeholder is unnecessary for type="date" */}
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-success cunstom-btn"
              onClick={handleAddButtonClick}
            >
              <MdOutlineAddComment />
            </button>
            {/* Consider adding a title or aria-label for accessibility */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo1;
