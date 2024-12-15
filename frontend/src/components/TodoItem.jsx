import React from "react";

const TodoItem = ({ todo, onRemove }) => {
  return (
    <li>
      {todo} <button onClick={onRemove}>Delete</button>
    </li>
  );
};

export default TodoItem;
