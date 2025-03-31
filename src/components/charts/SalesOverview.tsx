// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
// import { motion } from "framer-motion";

// const salesData = [
//   { name: "Jul", sales: 4200 },
//   { name: "Aug", sales: 3800 },
//   { name: "Sep", sales: 5100 },
//   { name: "Oct", sales: 4600 },
//   { name: "Nov", sales: 5400 },
//   { name: "Dec", sales: 7200 },
//   { name: "Jan", sales: 6100 },
//   { name: "Feb", sales: 5900 },
//   { name: "Mar", sales: 6800 },
//   { name: "Apr", sales: 6300 },
//   { name: "May", sales: 7100 },
//   { name: "Jun", sales: 7500 },
// ];

// import React from 'react'

// function SalesOverview() {
//   return (
//     <div className="flex flex-row md:flex-1 gap-4 ">
//         <motion.div className="bg-gray-600 w-5/12 bg-opacity-50 backdrop-blur-3xl py-2 border-1 border-x-gray-100"
//         initial={{opacity: 20, y: 20}}
//         animate={{opacity: 1, y: 0}}
//         transition={{duration: 0.9, delay: 0.5}}
//         >
//             <h2 className="text-lg font-mono">Sales overview</h2>
//             <div className="h-80">
//                 <ResponsiveContainer>
//                     <LineChart width={600} height={400} data={salesData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Line type="monotone" dataKey="sales" stroke="var(--color-primary)" />
//                     </LineChart>
//                 </ResponsiveContainer>


//             </div>
//         </motion.div>
//     </div>
//   )
// }

// export default SalesOverview









import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
// import React from "react";

const salesData = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Feb", sales: 5900 },
  { name: "Mar", sales: 6800 },
  { name: "Apr", sales: 6300 },
  { name: "May", sales: 7100 },
  { name: "Jun", sales: 7500 },
];

function SalesOverview() {
  return (
    <div className="flex flex-row gap-4 p-6">
      <motion.div
        className="w-full bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-90 
                   backdrop-blur-xl p-6 rounded-xl shadow-lg border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-100 mb-4 py-2 text-center uppercase text-purple-700 font-bold">
           Sales Overview
        </h2>
        <div className="h-80 w-100">
          <ResponsiveContainer>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="#D1D5DB" />
              <YAxis stroke="#D1D5DB" />
              <Tooltip contentStyle={{ backgroundColor: "#1F2937", color: "#fff" }} />
              <Line type="monotone" dataKey="sales" stroke="#6366F1" strokeWidth={2.5} dot={{ stroke: "#6366F1", strokeWidth: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}

export default SalesOverview;
