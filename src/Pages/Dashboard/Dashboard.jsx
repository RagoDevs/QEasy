import React from 'react';
import './Dashboard.css'
import SideNav from '../../Components/SideNav/SideNav'
import Cards from '../../Components/Dashboard/Components/Cards/Cards'
import TodayAppoint from '../../Components/Dashboard/Components/Table/TodayAppoint'
import CalenderComp from '../../Components/Dashboard/Components/Calendar/CalenderComp'
import Chart from '../../Components/Dashboard/Components/Chart/Chart';


function Dashboard() {
    return (
        <>
            <div className="dashboard">
                <div className="sidenav">
                    <SideNav />
                </div>
                <div className="dash-main">
                    <div className="dash-header">
                        <h2>Overview</h2>
                        <p>Stats</p>
                    </div>
                    <div className="dash-cards">
                        <Cards />
                    </div>
                    <div className="dash-table">
                        <TodayAppoint />
                    </div>
                    <div className="right-bar">
                        <div className="rightbar-container">
                            <CalenderComp />
                            <Chart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
