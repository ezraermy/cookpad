import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: '<' },
  ];
  return (
    <div>
      <h1>CookPad</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
