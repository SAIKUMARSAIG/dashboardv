import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { motion } from "framer-motion";
// import OrderStatusDistribution from "./OrderStatusDistribution";

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

function SalesOverviewSales() {
  return (
    <>
      <div className="flex flex-row gap-6 p-8  min-h-screen">
        <motion.div
          className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 
                   bg-opacity-95 backdrop-blur-2xl p-8 rounded-2xl 
                   shadow-2xl border border-indigo-500/20 
                   hover:shadow-indigo-500/10 transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h2
            className="text-3xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
                       mb-6 py-2 text-center uppercase tracking-wide"
          >
            Sales Overview
          </h2>
          <div className="h-96 w-full">
            <ResponsiveContainer>
              <LineChart data={salesData}>
                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="rgba(255, 255, 255, 0.05)"
                  fill="rgba(17, 24, 39, 0.2)"
                  fillOpacity={0.2}
                />
                <XAxis
                  dataKey="name"
                  stroke="#9CA3AF"
                  tick={{ fill: "#D1D5DB", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                />
                <YAxis
                  stroke="#9CA3AF"
                  tick={{ fill: "#D1D5DB", fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                    padding: "10px",
                  }}
                  cursor={{ stroke: "#6366F1", strokeWidth: 2, opacity: 0.2 }}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="none"
                  fill="#06B6D4"
                  fillOpacity={0.6}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  dot={{
                    stroke: "#8B5CF6",
                    strokeWidth: 2,
                    fill: "#fff",
                    r: 5,
                  }}
                  activeDot={{
                    r: 8,
                    stroke: "#fff",
                    strokeWidth: 2,
                    fill: "#8B5CF6",
                  }}
                  strokeLinecap="round"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default SalesOverviewSales;
