import './Nav.css';
import { NavLink, useLocation } from 'react-router-dom';

function Nav({ search, searchFilter }) {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      <NavLink to='/' className="nav-link">
        <h1 className="title-logo">DailyByte</h1>
      </NavLink>
      {location.pathname === '/' && (
        <form className="form">
          <input
            id="search-input"
            className="search-input"
            type="text"
            placeholder="search for articles..."
            name={search}
            value={search}
            onChange={searchFilter}
          />
        </form>
      )}
    </nav>
  )
}

export default Nav;