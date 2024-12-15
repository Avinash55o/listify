import React from "react";
import Header from "../components/Header";

const Profile = () => {
  const user = {
    name: "Avinash boruah",
    email: "avinash@example.com",
    joined: "January 2024",
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", color: "#333" }}>Profile</h1>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", color: "#444" }}>User Details</h2>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            <strong>Name:</strong> {user.name}
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            <strong>Joined:</strong> {user.joined}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
