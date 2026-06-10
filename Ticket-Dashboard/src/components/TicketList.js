import React from "react";

function TicketList({ tickets, toggleStatus, deleteTicket }) {
  return (
    <ul className="ticket-list">
      {tickets.map((t) => (
        <li key={t.id} className="ticket-item">

          {/* LEFT SIDE */}
          <div>
            <h3>{t.title}</h3>
            <p className={t.status === "Open" ? "open" : "closed"}>
              Status: {t.status}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="ticket-actions">
            <button onClick={() => toggleStatus(t.id)}>
              {t.status === "Open" ? "Close" : "Reopen"}
            </button>
            <button onClick={() => deleteTicket(t.id)}>
              Delete
            </button>
          </div>

        </li>
      ))}
    </ul>
  );
}

export default TicketList;