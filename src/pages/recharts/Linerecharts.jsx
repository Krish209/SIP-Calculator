import React from "react";
import { LineChart as RechartsLineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export const LineChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <RechartsLineChart data={data}>
      {/* Define the X-axis */}
      <XAxis
        dataKey="label"
        name="Years"
        tick={{ fontSize: 10 }}
        label={{ value: "Years", position: "insideBottomRight", offset: 0 }}
      />
      {/* Define the Y-axis */}
      <YAxis
        tickFormatter={(value) => value.toLocaleString("en-IN")}
        label={{ value: "Amount (₹)", angle: -90, position: "insideLeft" }}
        tick={{ fontSize: 10 }}
      />
      {/* Grid lines */}
      <CartesianGrid strokeDasharray="3 3" />
      {/* Tooltip */}
      <Tooltip
        formatter={(value) => `₹${value.toLocaleString("en-IN")}`}
        labelFormatter={(label) => label}
      />
      {/* Legend */}
      <Legend wrapperStyle={{ fontSize: "10px" }} />
      {/* Define the Line */}
      <Line
        type="monotone"
        dataKey="investedAmount"
        stroke="#4bc0c0"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="estimatedReturns"
        stroke="#9966ff"
        activeDot={{ r: 8 }}
      />
    </RechartsLineChart>
  </ResponsiveContainer>
);
