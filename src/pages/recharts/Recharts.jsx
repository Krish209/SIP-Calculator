import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
} from 'recharts';

// Donut Chart
export const DonutChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        innerRadius="50%"
        outerRadius="70%"
        label
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        content={({ payload }) => {
          if (payload && payload.length) {
            const { name, value } = payload[0];
            return <div>{`${name}: ₹${value.toLocaleString('en-IN')}`}</div>;
          }
          return null;
        }}
      />
      <Legend
        verticalAlign="top"
        height={36}
        iconType="circle"
        wrapperStyle={{
          paddingTop: '10px',
          textAlign: 'center',
          fontSize: '12px',
        }}
      />
    </PieChart>
  </ResponsiveContainer>
);

// Stacked Bar Chart
export const StackedBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
      <BarTooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
      {data.map((entry, index) => (
        <Bar
          key={index}
          dataKey={entry.name} // Directly access dataKey from the entry
          stackId="a" // Ensure that the stackId is consistent
          fill={entry.color}
        />
      ))}
    </BarChart>
  </ResponsiveContainer>
);
