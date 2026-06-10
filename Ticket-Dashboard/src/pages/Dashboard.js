import React, { useState, useEffect } from "react";
import ticketsData from "../data/tickets";
import TicketList from "../components/TicketList";
import AddTicket from "../components/AddTicket";
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);


  const [tickets, setTickets] = useState(ticketsData);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTickets = tickets.filter((t) => {
    if (filter === "All") return true;
    return t.status === filter;
  })

    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    );




  const addTicket = (title) => {
    const newTicket = {
      id: tickets.length + 1,
      title,
      status: "Open"
    };
    setTickets([...tickets, newTicket]);
  };

  const toggleStatus = (id) => {
    const updated = tickets.map((t) =>
      t.id === id
        ? { ...t, status: t.status === "Open" ? "Closed" : "Open" }
        : t
    );
    setTickets(updated);
  };

  const deleteTicket = (id) => {
    const updated = tickets.filter((t) => t.id !== id);
    setTickets(updated);
  };

  //loads the data
  useEffect(() => {
    const savedTickets = localStorage.getItem("tickets");
    if (savedTickets) {
      setTickets(JSON.parse(savedTickets));
    }
  }, []);

  //save data

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);


  return (
    <div className="dashboard">
       <div className="dashboard-card">



      <div className="filter-buttons">
        <button className="" onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Open")}>Open</button>
        <button onClick={() => setFilter("Closed")}>Closed</button>
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
          }}
        >
          Logout
        </button>
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <AddTicket addTicket={addTicket} />
      <TicketList
        tickets={filteredTickets}
        toggleStatus={toggleStatus}
        deleteTicket={deleteTicket}
      />
      </div>
    </div>
  );
}

export default Dashboard;
