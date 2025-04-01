// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const SALES_CHANNEL_DATA = [
//   { name: "MON", value: 950 },
//   { name: "TUE", value: 1200 },
//   { name: "WED", value: 750 },
//   { name: "THU", value: 890 },
//   { name: "FRI", value: 1250 },
//   { name: "SAT", value: 1600 },
//   { name: "SUN", value: 1400 },
// ];

// const SalesChannelChart = () => {
//   return (
//     <div className="w-full h-100 md:py-10 bg-gray-800 md:p-6 rounded-xl shadow-lg ring-2 ring-violet-600 my-2">
//       <h2 className="text-lg font-medium text-gray-100 mb-4 text-center">Sales by Channel</h2>
//       <ResponsiveContainer width="100%" height="100%" className="py-5">
//         <BarChart data={SALES_CHANNEL_DATA}>
//           <XAxis dataKey="name" stroke="#ffffff" />
//           <YAxis stroke="#ffffff" />
//           <Tooltip cursor={{ fill: "#444" }} contentStyle={{ backgroundColor: "#222", borderColor: "#555" }} />
//           <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default SalesChannelChart;






import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const SALES_CHANNEL_DATA = [
  { name: "MON", value: 950 },
  { name: "TUE", value: 1200 },
  { name: "WED", value: 750 },
  { name: "THU", value: 890 },
  { name: "FRI", value: 1250 },
  { name: "SAT", value: 1600 },
  { name: "SUN", value: 1400 },
];

const SalesChannelChart = () => {
  return (
    <div className="w-full max-w-4xl mx-auto h-auto min-h-[300px] bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg ring-2 ring-violet-600 my-2">
      <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-100 mb-4 text-center">
        Sales by Channel
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={SALES_CHANNEL_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: '12px' }} />
          <YAxis stroke="#ffffff" tick={{ fontSize: '12px' }} />
          <Tooltip
            cursor={{ fill: "#444" }}
            contentStyle={{ backgroundColor: "#222", borderColor: "#555", fontSize: '14px' }}
          />
          <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChannelChart;