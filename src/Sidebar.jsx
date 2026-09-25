import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo / Brand */}

      <div className="sidebar-brand">

        <div className="logo">
          🏏
        </div>

        <div>
          <h2>IPL Manager</h2>
          <p>My Portfolio</p>
        </div>

      </div>


      {/* Navigation */}

      <div className="sidebar-navigation">

        <h4>NAVIGATION</h4>

        <Link to="/">
          <span>🏠</span>
          Home
        </Link>

        <Link to="/resume">
          <span>📄</span>
          Resume
        </Link>

        <Link to="/projects">
          <span>💻</span>
          Projects
        </Link>

        <Link to="/contact">
          <span>📞</span>
          Contact
        </Link>

        {/* Rick and Morty */}

        <Link to="/rickandmorty">
          <span>🧪</span>
          Rick and Morty
        </Link>

      </div>


      {/* Bottom profile */}

      <div className="sidebar-profile">

        <div className="profile-icon">
          👤
        </div>

        <div>
          <strong>Nithinkumar</strong>
          <p>React Developer</p>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;