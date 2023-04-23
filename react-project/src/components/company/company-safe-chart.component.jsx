import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const SafeChart = ({ safety }) => {
    console.log(safety["safe"]);
    const total = safety["safe"] + safety["unsafe"] + safety["moderately safe"];


    const data = [
      {
        name: 'Completely safe',
        uv: ((safety["safe"] / total) * 100),
      },
      {
        name: 'Moderately Safe',
        uv: ((safety["moderately safe"] / total) * 100),
      },
      {
        name: 'Not safe',
        uv: ((safety["unsafe"] / total) * 100),
      }
    ];

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
          <Bar dataKey="uv" fill="#9381FF" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default SafeChart