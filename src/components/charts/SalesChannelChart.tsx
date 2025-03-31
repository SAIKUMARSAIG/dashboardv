// import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 }
];

const SalesChannelChart = () => {
  return (
    <div className="w-full h-80 bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-medium text-gray-100 mb-4">Sales by Channel</h2>
      <ResponsiveContainer width="100%" height="100%" className="py-5">
        <BarChart data={SALES_CHANNEL_DATA}>
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip cursor={{ fill: "#444" }} contentStyle={{ backgroundColor: "#222", borderColor: "#555" }} />
          <Bar dataKey="value" fill="#4F46E5" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChannelChart;
