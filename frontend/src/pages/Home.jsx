import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [doneStatus, setDoneStatus] = useState({});

  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = todos.length;
      setTodos([...todos, { id: newId, text: newTodo }]);
      setDoneStatus({ ...doneStatus, [newId]: false });
      setNewTodo("");
    }
  };

  const toggleDone = (id) => {
    setDoneStatus({ ...doneStatus, [id]: !doneStatus[id] });
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    const updatedStatus = { ...doneStatus };
    delete updatedStatus[id];
    setDoneStatus(updatedStatus);
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Left Side Menu */}
      <aside style={{ width: "25%", backgroundColor: "#f4f4f4", padding: "20px" }}>
        <h2>Menu</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ margin: "10px 0" ,cursor: "pointer"}}> Profile</li>
          <li style={{ margin: "10px 0" ,cursor: "pointer" }}>Calendar</li>
          <li style={{ margin: "10px 0" ,cursor: "pointer" }}>About</li>
        </ul>
      </aside>

      {/* Right Side To-Do Section */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>My To-Do App</h1>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            style={{
              padding: "10px",
              width: "70%",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={addTodo}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        {/* To-Do List */}
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            maxWidth: "90%",
            backgroundColor: "#f9f9f9",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  marginBottom: "8px",
                  backgroundColor: doneStatus[todo.id] ? "#d4edda" : "#f8d7da",
                  borderRadius: "4px",
                }}
              >
                <span
                  style={{
                    textDecoration: doneStatus[todo.id] ? "line-through" : "none",
                    color: doneStatus[todo.id] ? "gray" : "black",
                  }}
                >
                  {todo.text}
                </span>
                <div>
                  <button
                    onClick={() => toggleDone(todo.id)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      backgroundColor: doneStatus[todo.id] ? "#28a745" : "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {doneStatus[todo.id] ? "Undone" : "Done"}
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#6c757d",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
