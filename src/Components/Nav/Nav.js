import './Nav.css';
import { NavLink, useLocation } from 'react-router-dom';

function Nav({ search, searchFilter }) {
  const location = useLocation();

  return (
    <nav>
      <NavLink to='/'>
        <h1>DailyByte</h1>
      </NavLink>
      {location.pathname === '/' && (
        <form>
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