import { useState } from "react";
import { NavLink } from "react-router-dom";
import './SideNav.css'
import profilepic from "../../Assets/Images/profilepic.png";
import close from "../../Assets/Images/icons8-close-30.png";
import menu from "../../Assets/Images/barmenu.png";
import AddPatient from './components/AddPatient'


export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {/* Mobile Menu Button (Only Visible on Small Screens) */}
        <div className="menu-btn" onClick={() => setIsOpen(true)}>
          <img src={menu} alt="Open Menu" />
        </div>


        {/* Sidebar (Common for Both Desktop & Mobile) */}
        <div className={`side-nav ${isOpen ? "show" : ""}`}>
          <div className="close-btn" onClick={() => setIsOpen(false)}>
            <img src={close} alt="Close" />
          </div>
          <div className="sidebar--image">
            <img src={profilepic} alt="profile-pic" className="profile-pic" />
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

    
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

    </>
  );
}
