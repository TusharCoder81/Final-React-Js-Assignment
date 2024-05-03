import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./login.css";
import { users } from '../assets/Data'

let isAuthenticated = false;
let user;

let handleLogout = () => {
  isAuthenticated = false;
  const confirmBox = window.confirm("Do you really want to Log Out?");
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = users.find(
      (u) => u.username === username && u.password === password
    );

    if (success) {
      user = success.name;
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
      alert("Invalid username or password");
    }
    setUsername("");
    setPassword("");
  };

  if (isAuthenticated) {
    return <Navigate to="/success" />;
  }

  return (
    <div className="back">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login Form</h2>
            <div className="card my-5">
              <form
                className="card-body cardbody-color p-lg-5"
                onSubmit={handleLogin}
              >
                <div className="text-center mb-5">
                  <h1>Final Assignment</h1>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-100  btn-primary"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { isAuthenticated, handleLogout, user };
