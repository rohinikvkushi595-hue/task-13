import { useState } from "react";
import "./App.css";

function App() {
  // Boolean state for conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Array of user objects for list rendering
  const users = [
    {
      id: 1,
      name: "Arun Kumar",
      age: 24,
      city: "Bangalore",
      email: "arun@gmail.com",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 23,
      city: "Mysore",
      email: "priya@gmail.com",
      role: "UI Designer",
    },
    {
      id: 3,
      name: "Rahul Singh",
      age: 25,
      city: "Chennai",
      email: "rahul@gmail.com",
      role: "Backend Developer",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      age: 22,
      city: "Hyderabad",
      email: "sneha@gmail.com",
      role: "React Developer",
    },
    {
      id: 5,
      name: "Vikram Rao",
      age: 26,
      city: "Mumbai",
      email: "vikram@gmail.com",
      role: "Full Stack Developer",
    },
  ];

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>TeamHub</h1>
        <p>Smart Team Management</p>
      </header>

      {/* Account Status */}
      <section className="login-section">

        <h2 className="status-title"></h2>

        {/* Conditional Rendering using Ternary Operator */}
        {isLoggedIn ? (
          <div className="welcome-box">

            <div className="status-content">
              <div className="status-icon">✓</div>

              <div>
                <h2>Welcome Back! 👋</h2>
                <p>You are successfully logged in.</p>
              </div>
            </div>

            <button
              className="logout-btn"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>

          </div>
        ) : (
          <div className="login-box">

            <div className="status-content">
              <div className="status-icon login-icon">!</div>

              <div>
                <h2>Please Login 🔐</h2>
                <p>You need to login to access the team portal.</p>
              </div>
            </div>

            <button
              className="login-btn"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>

          </div>
        )}

      </section>

      {/* Team Members */}
      <section className="users-section">

        <h2>Team Members</h2>

        <p className="section-description">
          Meet our talented team and explore their roles and details.
        </p>

        {/* List Rendering using map() */}
        <div className="user-grid">

          {users.map((user) => (
            <div className="user-card" key={user.id}>

              {/* User Initial */}
              <div className="user-icon">
                {user.name.charAt(0)}
              </div>

              {/* User Name */}
              <h3>{user.name}</h3>

              {/* User Role */}
              <span className="role">
                {user.role}
              </span>

              {/* User Details */}
              <div className="user-details">

                <div className="detail-row">
                  <span className="detail-label">Age</span>
                  <span>{user.age}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">City</span>
                  <span>{user.city}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">Email</span>
                  <span>{user.email}</span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">Employee ID</span>
                  <span>EMP-{user.id}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 TeamHub | Team Management Portal</p>
      </footer>

    </div>
  );
}

export default App;