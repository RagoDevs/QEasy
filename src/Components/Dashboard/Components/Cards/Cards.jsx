import React from 'react'
import './Cards.css'

function Cards() {
    return (
        <>
            <div className="cards-container">
                <div className="card">
                    <h2>Total <br />Number of<br />Patients</h2>
                    <p>289</p>
                </div>
                <div className="card">
                    <h2>Total <br />Number of<br />Appointments</h2>
                    <p>289</p>
                </div>
                <div className="card">
                    <h2>Today's <br />Number of<br />Appointments</h2>
                    <p>289</p>
                </div>
            </div>
        </>
    )
}

export default Cards
