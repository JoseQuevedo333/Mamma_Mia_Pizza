import React from "react";

function Navbar() {
  const total = 0;
  const token = false;

  const formatTotal = (amount) => {
    return amount.toLocaleString();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-brand btn btn-outline-secondary me-2"
          href="#"
        >
          🍕 Home
        </button>
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
              <button className="btn btn-outline-primary me-2">🔐 Login</button>
              <button className="btn btn-outline-secondary me-2">
                🔐 Register
              </button>
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
