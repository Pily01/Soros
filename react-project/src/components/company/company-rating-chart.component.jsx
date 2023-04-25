import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RatingChart = ({ rating }) => {
    const data = [
        {
            name: 'Awful 1',
            responses: (rating["1"]),
        },
        {
            name: 'OK 2',
            responses: (rating["2"]),
        },
        {
            name: 'Good 3',
            responses: (rating["3"]),
        },
        {
            name: 'Great 4',
            responses: (rating["4"]),
        },
        {
            name: 'Awesome 5',
            responses: (rating["5"]),
        }

    ];


    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 30,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="responses" fill="#9381FF" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default RatingChart;