import React from 'react';
import { BarChart, Bar, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RatingChart = ({ rating }) => {
    const data = [
        {
            name: '1',
            responses: (rating["1"]),
        },
        {
            name: '2',
            responses: (rating["2"]),
        },
        {
            name: '3',
            responses: (rating["3"]),
        },
        {
            name: '4',
            responses: (rating["4"]),
        },
        {
            name: '5',
            responses: (rating["5"]),
        }

    ];


    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Bar dataKey="responses" fill="#087990" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default RatingChart;