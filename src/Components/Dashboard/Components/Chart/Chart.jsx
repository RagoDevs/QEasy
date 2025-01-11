import React from 'react'
import './Chart.css'
import { LineChart, XAxis, YAxis, Line, Legend, ResponsiveContainer } from 'recharts';


function Chart() {


    const data = [
        { day: 'Mon', patients: 2 },
        { day: 'Tue', patients: 5 },
        { day: 'Wed', patients: 2 },
        { day: 'Thur', patients: 20 },
        { day: 'Fri', patients: 5 },
    ];

    return (
        <>
            <div className="graph-container">
                <div className='graph--text'>
                    <h2> Appointments Chart</h2>
                </div>
                <div className='chart-container'>
                <ResponsiveContainer width="100%" height={309}>
                <LineChart data={data} margin={{  left:-13, right: 30, top: 50, bottom: -30 }}>
                <XAxis dataKey="day" fontFamily="Roboto" stroke='#fff'/>
                <YAxis dataKey="patients" fontFamily="Roboto" stroke='#fff'/>
                
                <Legend />
                <Line type="monotone" dataKey="patients" stroke="#fff" />
            </LineChart>
            </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default Chart
