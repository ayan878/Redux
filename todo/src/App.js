import React, { useState } from "react";
import "./App.css";
import { AiFillCheckCircle, AiOutlineDelete } from "react-icons/ai";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    // Add a new todo item to the list
    const newTodo = { title, description };
    setTodoList([...todoList, newTodo]);

    // Clear the input fields after adding
    setTitle("");
    setDescription("");
  };

  const handleDel = (indexToDelete) => {
    const updatedTodoList = todoList.filter(
      (_, index) => index !== indexToDelete
    );
    setTodoList(updatedTodoList);
  };

  const handleComplete = (indexToComplete) => {
    const updatedTodoList = todoList.map((todo, index) =>
      index === indexToComplete ? { ...todo, completed: true } : todo
    );
    setTodoList(updatedTodoList);
  };

  return (
    <div className="app">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              placeholder="What's the task title?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              placeholder="What's the task description?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="todo-input-item">
            <button className="primaryBtn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen ? "" : "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            To do
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen ? "active" : ""}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>
        {isCompleteScreen ? (
          <div className="todo-list">
            {todoList
              .filter((todo) => todo.completed)
              .map((todo, index) => (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      className="icon icon-delete"
                      onClick={() => handleDel(index)}
                    />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="todo-list">
            {todoList
              .filter((todo) => !todo.completed)
              .map((todo, index) => (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>
                  <div className="icon-container">
                    <AiOutlineDelete
                      className="icon icon-delete"
                      onClick={() => handleDel(index)}
                    />
                    {!todo.completed ? (
                      <AiFillCheckCircle
                        className="icon icon-check"
                        onClick={() => handleComplete(index)}
                      />
                    ) : null}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
