import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [];
  return (
    <div className="navbar">
      <h1 className="cookpad-title">CookPad</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className="nav-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
