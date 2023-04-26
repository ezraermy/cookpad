import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper" data-testid="layout">
    <Navbar data-testid="navbar" />
    <Outlet />
  </div>
);

export default Layout;
