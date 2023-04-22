import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Completely safe',
    uv: 0,
  },
  {
    name: 'Moderately Safe',
    uv: 100,
  },
  {
    name: 'Not safe',
    uv: 0,
  }
];

const SafeChart = (chartData) => {
    console.log(chartData)
    

    return (
      <ResponsiveContainer width="80%" height="80%" aspect={1}>
        <BarChart
          width={500}
          height={300}
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
          <Legend />
          <Bar dataKey="uv" fill="#9381FF" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}

export default SafeChart