import React from "react";

function TicketItem({ ticket, toggleStatus, deleteTicket }) {
  const isOpen = ticket.status === "Open";

  return (
    <div className="ticket-card">
      <h4 className="ticket-title">{ticket.title}</h4>

      <p className={`ticket-status ${ticket.status.toLowerCase()}`}>
        Status: {ticket.status}
      </p>

      <div className="button-group">
        <button onClick={() => toggleStatus(ticket.id)}>
          {isOpen ? "Close" : "Reopen"}
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            const confirmDelete = window.confirm(
              `Delete ticket: "${ticket.title}"?`
            );
            if (confirmDelete) {
              deleteTicket(ticket.id);
            }
          }}
        >
          Delete
        </button>
      </div>


    </div>
  );
}

export default TicketItem;
