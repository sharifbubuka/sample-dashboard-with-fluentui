import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'JAN', uv: '566', pv: '567', amt: '4643' },
    { name: 'FEB', uv: '344', pv: '567', amt: '4643' },
    { name: 'MAR', uv: '578', pv: '567', amt: '4643' },
    { name: 'APR', uv: '974', pv: '567', amt: '4643' },
    { name: 'MAY', uv: '128', pv: '567', amt: '4643' },
    { name: 'JUN', uv: '485', pv: '567', amt: '4643' },
    { name: 'JUL', uv: '725', pv: '567', amt: '4643' },
    { name: 'AUG', uv: '545', pv: '567', amt: '4643' },
    { name: 'SEP', uv: '594', pv: '567', amt: '4643' },
    { name: 'OCT', uv: '294', pv: '567', amt: '4643' },
    { name: 'NOV', uv: '945', pv: '567', amt: '4643' },
    { name: 'DEC', uv: '285', pv: '567', amt: '4643' },
];

const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-red-500 p-4">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        )
    }
    return (<></>)
}

export default function BarGraph() {
    return (
        <>
            <ResponsiveContainer>
                <BarChart width={150} height={40} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <Tooltip content={<CustomToolTip />} />
                    <Legend />
                    <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}
