import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#1E3A8A", // Blue color
    color: "white",
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const userStyle = {
    fontSize: "1rem",
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Listify</h1>
      <div style={userStyle}>Welcome, User!</div>
    </header>
  );
};

export default Header;
