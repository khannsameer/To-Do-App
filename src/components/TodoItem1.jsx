import { MdDeleteForever } from "react-icons/md";

function TodoItem1({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row itemRow">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button
            type="button"
            className="btn btn-outline-danger custom-btn"
            onClick={() => onDeleteClick(todoName)} // ⚠️ Consider passing an object if `todoName` is not unique
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
