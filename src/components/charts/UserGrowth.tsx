// import { LineChart } from "@mui/x-charts";
// import { motion } from "framer-motion";

// function UserGrowth() {
//   const userGrowthData = [
//     { month: "Jan", users: 1000 },
//     { month: "Feb", users: 1500 },
//     { month: "Mar", users: 2000 },
//     { month: "Apr", users: 3000 },
//     { month: "May", users: 4000 },
//     { month: "Jun", users: 5000 },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       className="w-full flex justify-center items-center py-10"
//     >
//       <div className="w-[550px] bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-800 transition-transform duration-300 hover:scale-105">
//         <h2 className="text-center text-xl font-bold text-yellow-400 mb-5 drop-shadow-lg">
//           📊 User Growth Chart
//         </h2>

//         <div className="rounded-lg overflow-hidden bg-gradient-to-tr from-gray-950 via-gray-800 to-gray-900 p-4 shadow-lg ring-2 ring-violet-600 shadow-5xl shadow-violet-800 text-white">
//           <LineChart
//             xAxis={[
//               {
//                 data: userGrowthData.map((data) => data.month.toUpperCase()),
//                 scaleType: "band",
//                 tickLabelStyle: {
//                   fill: "white",
//                 },
//                 label: "Month",
//                 labelStyle: {
//                   fill: "white",
//                 },
//               },
//             ]}
//             yAxis={[
//               {
//                 tickLabelStyle: {
//                   fill: "white",
//                 },
//                 label: "Users (thousands)",
//                 labelStyle: {
//                   fill: "white",
//                 },
//               },
//             ]}
//             series={[
//               {
//                 data: userGrowthData.map((data) => data.users),
//                 color: "#facc15", // Neon yellow for high contrast
//               },
//             ]}
//             width={500}
//             height={300}
//             sx={{
//               backgroundColor: "transparent",
//               "& .MuiLineElement-root": { strokeWidth: 3 },
//               "& .MuiXAxis-root, & .MuiYAxis-root": { stroke: "#facc15" },
//               "& .MuiChartsAxis-tickLabel": {
//                 fill: "white",
//               },
//               "& .MuiChartsAxis-line": {
//                 stroke: "white",
//               },
//             }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default UserGrowth;

import { LineChart } from "@mui/x-charts";
import { motion } from "framer-motion";

function UserGrowth() {
  const userGrowthData = [
    { month: "Jan", users: 1000 },
    { month: "Feb", users: 1500 },
    { month: "Mar", users: 2000 },
    { month: "Apr", users: 3000 },
    { month: "May", users: 4000 },
    { month: "Jun", users: 5000 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex justify-center items-center py-10"
    >
      <div className="w-[550px] bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-800 transition-transform duration-300 hover:scale-105">
        <h2 className="text-center text-xl font-bold text-yellow-400 mb-5 drop-shadow-lg">
          📊 User Growth Chart
        </h2>

        <div className="rounded-lg overflow-hidden bg-gradient-to-tr from-gray-950 via-gray-800 to-gray-900 p-4 shadow-lg ring-2 ring-violet-600 shadow-5xl shadow-violet-800 text-white">
          <LineChart
            xAxis={[
              {
                data: userGrowthData.map((data) => data.month.toUpperCase()),
                scaleType: "band",
                tickLabelStyle: { fill: "white" },
                label: "Month",
                labelStyle: { fill: "white" },
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: { fill: "white" },
                label: "Users (thousands)",
                labelStyle: { fill: "white" },
              },
            ]}
            series={[
              {
                data: userGrowthData.map((data) => data.users),
                color: "#facc15", // Neon yellow for high contrast
              },
            ]}
            width={500}
            height={450}
            sx={{
              backgroundColor: "transparent",
              "& .MuiLineElement-root": { strokeWidth: 3 },
              "& .MuiXAxis-root, & .MuiYAxis-root": { stroke: "#facc15" },
              "& .MuiChartsAxis-tickLabel": { fill: "white" },
              "& .MuiChartsAxis-line": { stroke: "white" },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default UserGrowth;