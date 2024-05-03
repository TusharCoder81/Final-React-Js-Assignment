import { Link } from "react-router-dom";
import { handleLogout, isAuthenticated, user } from "./Login";
import "./Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <Link className="nav-link" to="/fetchdata">
                  Fetch Data
                </Link>
              ) : (
                <Link className="nav-link" to="/failed">
                  Fetch Data
                </Link>
              )}
            </li>
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <>
                <div className="navbar-text text-white me-3"> {user}</div>
                <Link to='/' > <button className="btn btn-outline-light" type="submit" 
                 onClick={handleLogout} >LogOut</button></Link>
              </>
            ) : (
              <Link to="/login" className="btn btn-outline-light">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
