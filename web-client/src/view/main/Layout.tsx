import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomeScreen from '../screens/HomeScreen';

/**
 * Layout components rendered which wraps all the routes
 * this is to persist the navbar at the top of the screen
 */
function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-0">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
