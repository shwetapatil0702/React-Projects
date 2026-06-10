import React, { useState } from "react";

function AddTicket({ addTicket }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTicket(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-ticket">
      <input
        type="text"
        placeholder="Enter ticket"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTicket;
