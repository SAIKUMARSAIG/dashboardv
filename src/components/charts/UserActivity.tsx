// import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// const userActivityData = [
//     { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
//     { name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
//     { name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
//     { name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
//     { name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
//     { name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
//     { name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 }
//   ];

// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];

// export default function StackedBarChart() {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       series={[
//         { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
//         { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
//       ]}
//       xAxis={[{ data: xLabels, scaleType: 'band' }]}
//     />
//   );
// }



// import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { color } from "framer-motion";

// // Sample data: user activity across time slots for each day
// const userActivityData = [
//   {
//     name: "Mon",
//     "0-4": 20,
//     "4-8": 40,
//     "8-12": 60,
//     "12-16": 80,
//     "16-20": 100,
//     "20-24": 30,
//   },
//   {
//     name: "Tue",
//     "0-4": 30,
//     "4-8": 50,
//     "8-12": 70,
//     "12-16": 90,
//     "16-20": 110,
//     "20-24": 40,
//   },
//   {
//     name: "Wed",
//     "0-4": 40,
//     "4-8": 60,
//     "8-12": 80,
//     "12-16": 100,
//     "16-20": 120,
//     "20-24": 50,
//   },
//   {
//     name: "Thu",
//     "0-4": 50,
//     "4-8": 70,
//     "8-12": 90,
//     "12-16": 110,
//     "16-20": 130,
//     "20-24": 60,
//   },
//   {
//     name: "Fri",
//     "0-4": 60,
//     "4-8": 80,
//     "8-12": 100,
//     "12-16": 120,
//     "16-20": 140,
//     "20-24": 70,
//   },
//   {
//     name: "Sat",
//     "0-4": 70,
//     "4-8": 90,
//     "8-12": 110,
//     "12-16": 130,
//     "16-20": 150,
//     "20-24": 80,
//   },
//   {
//     name: "Sun",
//     "0-4": 80,
//     "4-8": 100,
//     "8-12": 120,
//     "12-16": 140,
//     "16-20": 160,
//     "20-24": 90,
//   },
// ];

// // Extract days for x-axis
// const days = userActivityData.map((item) => item.name);

// // Extract data for each time slot
// const timeSlots = [
//   {
//     data: userActivityData.map((item) => item["0-4"]),
//     label: "0-4 hrs",
//     id: "slot0-4",
//     stack: "total",
//   },
//   {
//     data: userActivityData.map((item) => item["4-8"]),
//     label: "4-8 hrs",
//     id: "slot4-8",
//     stack: "total",
//   },
//   {
//     data: userActivityData.map((item) => item["8-12"]),
//     label: "8-12 hrs",
//     id: "slot8-12",
//     stack: "total",
//   },
//   {
//     data: userActivityData.map((item) => item["12-16"]),
//     label: "12-16 hrs",
//     id: "slot12-16",
//     stack: "total",
//   },
//   {
//     data: userActivityData.map((item) => item["16-20"]),
//     label: "16-20 hrs",
//     id: "slot16-20",
//     stack: "total",
//   },
//   {
//     data: userActivityData.map((item) => item["20-24"]),
//     label: "20-24 hrs",
//     id: "slot20-24",
//     stack: "total",
//   },
// ];

// export default function StackedBarChart() {
//   return (
//     <>
//       <div className="px-5 pb-5 rounded-md py-2 border border-slate-600 ">
//         <h1 className="text-center py-2">User Activity Over Time Slots</h1>
//         <div className="border border-violet-800 shadow-2xl ring-2 ring-violet-700 rounded-md shadow-violet-700 backdrop-blur-3xl backdrop:bg-slate-600 ">
//           <BarChart
//             width={600} // Adjusted for better visibility
//             height={400}
//             series={timeSlots} // Stacked series for each time slot
//             xAxis={[{ data: days, scaleType: "band" }]}
//             sx={{
//               backgroundColor: "transparent",
//               "& .MuiLineElement-root": { strokeWidth: 3 },
//               "& .MuiXAxis-root, & .MuiYAxis-root": { stroke: "#facc15" },
//               "& .MuiChartsAxis-tickLabel": { fill: "white" },
//               "& .MuiChartsAxis-line": { stroke: "white" },
//             }} // Days of the week on x-axis
//           />
//         </div>
//       </div>
//     </>
//   );
// }









// import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { motion } from "framer-motion";

// Sample data: user activity across time slots for each day
const userActivityData = [
  {
    name: "Mon",
    "0-4": 20,
    "4-8": 40,
    "8-12": 60,
    "12-16": 80,
    "16-20": 100,
    "20-24": 30,
  },
  {
    name: "Tue",
    "0-4": 30,
    "4-8": 50,
    "8-12": 70,
    "12-16": 90,
    "16-20": 110,
    "20-24": 40,
  },
  {
    name: "Wed",
    "0-4": 40,
    "4-8": 60,
    "8-12": 80,
    "12-16": 100,
    "16-20": 120,
    "20-24": 50,
  },
  {
    name: "Thu",
    "0-4": 50,
    "4-8": 70,
    "8-12": 90,
    "12-16": 110,
    "16-20": 130,
    "20-24": 60,
  },
  {
    name: "Fri",
    "0-4": 60,
    "4-8": 80,
    "8-12": 100,
    "12-16": 120,
    "16-20": 140,
    "20-24": 70,
  },
  {
    name: "Sat",
    "0-4": 70,
    "4-8": 90,
    "8-12": 110,
    "12-16": 130,
    "16-20": 150,
    "20-24": 80,
  },
  {
    name: "Sun",
    "0-4": 80,
    "4-8": 100,
    "8-12": 120,
    "12-16": 140,
    "16-20": 160,
    "20-24": 90,
  },
];

// Custom color palette
const colorPalette = [
  "#8b5cf6", // violet-500
  "#a78bfa", // violet-400
  "#c4b5fd", // violet-300
  "#ddd6fe", // violet-200
  "#ede9fe", // violet-100
  "#7c3aed", // violet-600
];

// Extract days for x-axis
const days = userActivityData.map((item) => item.name);

// Extract data for each time slot
const timeSlots = [
  {
    data: userActivityData.map((item) => item["0-4"]),
    label: "0-4 hrs",
    id: "slot0-4",
    stack: "total",
    color: colorPalette[0],
  },
  {
    data: userActivityData.map((item) => item["4-8"]),
    label: "4-8 hrs",
    id: "slot4-8",
    stack: "total",
    color: colorPalette[1],
  },
  {
    data: userActivityData.map((item) => item["8-12"]),
    label: "8-12 hrs",
    id: "slot8-12",
    stack: "total",
    color: colorPalette[2],
  },
  {
    data: userActivityData.map((item) => item["12-16"]),
    label: "12-16 hrs",
    id: "slot12-16",
    stack: "total",
    color: colorPalette[3],
  },
  {
    data: userActivityData.map((item) => item["16-20"]),
    label: "16-20 hrs",
    id: "slot16-20",
    stack: "total",
    color: colorPalette[4],
  },
  {
    data: userActivityData.map((item) => item["20-24"]),
    label: "20-24 hrs",
    id: "slot20-24",
    stack: "total",
    color: colorPalette[5],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function StackedBarChart() {
  return (
    <motion.div
      className="p-6 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="px-6 py-8 rounded-xl border border-violet-500/30 bg-gray-900/60 backdrop-blur-lg shadow-2xl"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          User Activity Over Time Slots
        </motion.h1>
        
        <motion.div 
          className="border border-violet-500/20 rounded-lg shadow-lg shadow-violet-500/10 overflow-hidden bg-gray-800/40 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ 
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          <BarChart
            width={500}
            height={400}
            series={timeSlots}
            xAxis={[{ 
              data: days, 
              scaleType: "band",
              tickLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
              }
            }]}
            margin={{ top: 30, right: 40, bottom: 50, left: 50 }}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "bottom", horizontal: "middle" },
                padding: 20,
                labelStyle: {
                  fontSize: 12,
                  fill: "#e5e7eb", // gray-200
                },
              },
            }}
            sx={{
              backgroundColor: "transparent",
              "& .MuiLineElement-root": { strokeWidth: 3 },
              "& .MuiXAxis-root, & .MuiYAxis-root": { stroke: "#a78bfa" }, // violet-400
              "& .MuiChartsAxis-tickLabel": { fill: "#e5e7eb", fontWeight: 500 }, // gray-200
              "& .MuiChartsAxis-line": { stroke: "#7c3aed" }, // violet-600
              "& .MuiChartsAxis-tick": { stroke: "#7c3aed" }, // violet-600
              "& .MuiChartsSeries-root": { opacity: 0.9 },
              "& .MuiChartsLegend-label": { fill: "#e5e7eb" }, // gray-200
              "& .MuiBarElement-root:hover": { 
                filter: "brightness(1.2)",
                cursor: "pointer"
              },
            }}
          />
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Interactive dashboard showing user activity patterns throughout the week
        </motion.div>
      </motion.div>
    </motion.div>
  );
}