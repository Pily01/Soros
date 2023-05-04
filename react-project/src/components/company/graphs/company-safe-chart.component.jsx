import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const SafeChart = ({ safety }) => {

    const data = [
      {
        name: 'Safe',
        responses: (safety["safe"]),
      },
      {
        name: 'Moderately Safe',
        responses: (safety["moderately safe"]),
      },
      {
        name: 'Not safe',
        responses: (safety["unsafe"]),
      }
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
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

export default SafeChart