import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RatingChart = ({ rating }) => {
    const data = [
        {
            name: 'Awful',
            responses: (rating["1"]),
        },
        {
            name: 'Ok',
            responses: (rating["2"]),
        },
        {
            name: 'Good',
            responses: (rating["3"]),
        },
        {
            name: 'Great',
            responses: (rating["4"]),
        },
        {
            name: 'Awesome',
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