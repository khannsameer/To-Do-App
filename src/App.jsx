import "./App.css";
import TodoName from "./components/TodoName"; // Good modular structure
import AddTodo1 from "./components/AddTodo1"; //  Reusable AddTodo component
import TodoContainer from "./components/TodoContainer"; //  Displaying todo items
import { useState } from "react"; // Correct usage of useState for state management
import WelcomeMessage from "./components/WelcomeMessage"; //  Displays welcome message when no todos

function App() {
  // const initialTodoItems = [
  //   { name: "Go To Gym", dueDate: "02-11-2024" },
  //   { name: "Go To College", dueDate: "02-11-2024" }
  // ];
  const [todoItems, setTodoItems] = useState([]); //  Initializes state for todo items

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

    setTodoItems((currValue) => [
      ...currValue, //  Adds new item to the existing state
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName); //  Removes the item by name
    setTodoItems(newTodoItems); //  Updates state after deletion
    // console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <>
      <center className="Todo-container">
        {" "}
        {/*  Centering the app content */}
        <TodoName />
        <AddTodo1 onNewItem={handleNewItem} /> {/*  Add todo functionality */}
        {todoItems.length === 0 && <WelcomeMessage />}{" "}
        {/*  Conditional rendering */}
        <TodoContainer
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        />{" "}
        {/*  Displays todo items */}
      </center>
    </>
  );
}

export default App;
