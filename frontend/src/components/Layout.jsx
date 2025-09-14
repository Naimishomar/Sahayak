import React from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const isDashboard = useLocation().pathname === '/dashboard';
  const isLogin = useLocation().pathname === '/login';
  const isRegister = useLocation().pathname === '/signup';
  
  return (
    <div>
        {!isDashboard && !isLogin && !isRegister && <Navbar/>}
          <Outlet/>
    </div>
  )
}

export default Layout