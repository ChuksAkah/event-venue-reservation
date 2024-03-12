import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";

const Header = ({ userData }) => {
  const [currentUser, setCurrentUser] = useState(userData ? true : false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Green Lane Event Venue
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            {currentUser ? (
              <>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/update" className="nav-link">
                    Update
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/booking" className="nav-link">
                    Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            {currentUser && (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  onClick={() => {
                    localStorage.removeItem("token");
                    dispatch({ type: "SET_USER_DATA", payload: null });

                    setCurrentUser(false);
                    navigate("/login");
                  }}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
          <span className="navbar-text">
            Welcome to the Green Lane Event Venue Reservation
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
