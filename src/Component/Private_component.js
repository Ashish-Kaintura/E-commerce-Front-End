import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const Private_component = () => {
  const auth=localStorage.getItem("user");
  return auth? <Outlet/>:<Navigate to="/signup"></Navigate>
}

export default Private_component;
