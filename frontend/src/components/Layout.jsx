import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const isDashboard = useLocation().pathname === '/dashboard';
  
  return (
    <div>
        {!isDashboard && <Navbar/>}
          <Outlet/>
    </div>
  )
}

export default Layout