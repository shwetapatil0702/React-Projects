import React, { useState, useEffect } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  /*Load data from localStorage (runs once) */
  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("tasks"));
    if (storedTask)
    {
      setList(storedTask);
    }
  }, []);

  /* Save data to localStorage whenever list changes */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list])

  const addTask = () => {
    if (task === "") return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(list[index]);
  };

  const saveEdit = () => {
    const updatedList = [...list];
    updatedList[editIndex] = editText;
    setList(updatedList);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="todo-container">
      <h2 className="title">Todo App</h2>

      <div className="input-section">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="list">
        {list.map((item, index) => (
          <div className="task" key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <div>
                  <button onClick={() => startEdit(index)}>Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;