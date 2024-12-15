import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerStyle = {
    backgroundColor: "#1E3A8A", // Blue color
    color: "white",
    padding: "1rem 1.5rem",
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <footer style={footerStyle}>
      <p>
        &copy; {currentYear} To-Do App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
