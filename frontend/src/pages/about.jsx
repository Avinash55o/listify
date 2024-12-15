import Header from "../components/Header";

const About = () => {
  return (
    <div >
      <Header />
      <main style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", color: "#333" }}>About Us</h1>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
          Welcome to our application! This is a simple To-Do app designed to help you stay
          organized and manage your tasks efficiently.
        </p>
        <section style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#444" }}>Our Mission</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#666" }}>
            Our goal is to make task management simple and accessible to everyone. Whether
            you're organizing your daily chores or planning a large project, we've got you
            covered!
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
