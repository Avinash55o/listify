import React, { useState } from 'react';
import API from '../api';


const LoginPage = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/api/auth/signin', { email, password });
      console.log(response.data);
      alert('Login successful');

      // Save token and user details to localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem(
        'userDetails',
        JSON.stringify({ name: email.split('@')[0], email }) // Simulate user name from email
      );

      navigate('/profile');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert('Login failed');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

// Inline styles object
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  label: {
    marginBottom: '15px',
    fontSize: '1rem',
    color: '#555',
  },
  input: {
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LoginPage;
