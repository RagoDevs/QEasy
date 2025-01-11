import React from 'react'
import './SideNav.css'
import profilepic from '../../Assets/Images/profilepic.png'
import { NavLink } from 'react-router-dom'
import AddPatient from './components/AddPatient'

function SideNav() {
  return (
    <>
      <div className="side-nav">
        <div className='sidebar--image'>
          <img src={profilepic} alt='profile-pic' />
          <h2>Dr Maxi Gamma</h2>
        </div>
        <div className="side-menu">
          <NavLink to='/dashboard' className={({ isActive }) => (isActive ? "active" : "inactive")}>
            <div className='menu-item'>
              <h4>Dashboard</h4>
            </div>
          </NavLink>
          <NavLink to='/appointments' className={({ isActive }) => (isActive ? "active" : "inactive")}>
            <div className='menu-item'>
              <h4>Appointents</h4>
            </div>
          </NavLink>
          <NavLink to='/patients' className={({ isActive }) => (isActive ? "active" : "inactive")}>
            <div className='menu-item'>
              <h4>Patients</h4>
            </div>
          </NavLink>
        </div>
        <div className="addpatient-container">
          <AddPatient />
        </div>
      </div>
    </>
  )
}

export default SideNav
