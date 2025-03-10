import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const total = 0;
  const token = false;

  const formatTotal = (amount) => {
    return amount.toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand btn btn-outline-secondary me-2">
          🍕 Home
        </Link>

        <div className="d-flex">
          {token ? (
            <>
              <button className="btn btn-outline-success me-2">
                🔓 Profile
              </button>
              <button className="btn btn-outline-danger me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <Link to="/LoginSheet" className="btn btn-outline-primary me-2">
                🔐 Login
              </Link>

              <Link
                to="/RegisterSheet"
                className="btn btn-outline-secondary me-2"
              >
                🔐 Register
              </Link>
            </>
          )}
          <button className="btn btn-outline-warning">
            🛒 Total: ${formatTotal(total)}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
