import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];

const Example = () => {
  const [hoveringDataKey, setHoveringDataKey] = useState(null);

  const getOpacity = (key) => {
    if (!hoveringDataKey) return 1;
    return hoveringDataKey === key ? 1 : 0.4;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Statistik Interaktif</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            onMouseEnter={(e) => setHoveringDataKey(e.dataKey)}
            onMouseLeave={() => setHoveringDataKey(null)}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            strokeOpacity={getOpacity('pv')}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            strokeOpacity={getOpacity('uv')}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-500 mt-2 text-center italic">Tips: Hover pada legenda untuk fokus ke salah satu garis.</p>
    </div>
  );
};

export default Example;
