import { useState } from "react";

export default function Navbar({ active, setActive, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    "Overview",
    "Demand Analysis",
    "Friction Analysis",
    "Crowd Prediction Map",
    "Demand Table"
  ];

  const handleNavClick = (tab) => {
    setActive(tab);
    setIsMenuOpen(false); // Close mobile menu on click
  };

  return (
    <div className="navbar-container">

      {/* LEFT: APP NAME */}
      <div className="logo-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
          alt="Aadhaar Logo"
          className="nav-logo"
        />
        <div className="brand-text">
          <h1 className="brand-title">Unique Identification Authority of India</h1>
          <span className="brandSubtitle">Government of India</span>
        </div>
      </div>

      {/* CENTER: DESKTOP MENU */}
      <div className="desktop-menu">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => handleNavClick(tab)}
            className={`nav-item ${active === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* RIGHT: LOGOUT (Desktop) */}
      <div className="desktop-menu" style={{ border: 'none', background: 'transparent' }}>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>

      {/* HAMBURGER BUTTON (Mobile) */}
      <button
        className="hamburger-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => handleNavClick(tab)}
            className={`mobile-nav-item ${active === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
        <hr style={{ width: '100%', borderColor: '#cbd5e1' }} />
        <button className="logout-btn" style={{ width: '100%' }} onClick={onLogout}>
          Logout
        </button>
      </div>

    </div>
  );
}
