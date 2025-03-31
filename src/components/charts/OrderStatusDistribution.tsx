    // import React from "react";
    import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
    import { motion } from "framer-motion";

    const salesByCategory = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Home & Garden", value: 200 },
    { name: "Books", value: 100 },
    { name: "Others", value: 150 },
    ];

    const COLORS = ["#6366F1", "#22D3EE", "#F472B6", "#FBBF24", "#34D399"];

    function OrderStatusDistribution() {
    return (
        <div className="flex flex-col items-center p-4">
        <motion.div
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 
                    bg-opacity-90 backdrop-blur-xl p-6 rounded-xl shadow-lg 
                    border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
        >
            <h2 className="text-2xl font-semibold text-gray-100 mb-4 py-2 text-center 
                        uppercase text-purple-400 font-bold">
            Sales by Category
            </h2>
            <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie
                    data={salesByCategory}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#1108ACFF"
                    dataKey="value"
                    label
                >
                    {salesByCategory.map((_entry, index) => (
                        // <div className="hidden">{entry}</div>
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    
                    ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#005FE5FF", color: "#fff" }} />
                <Legend verticalAlign="bottom" iconSize={12} wrapperStyle={{ color: "#07295BFF" }} />
                </PieChart>
            </ResponsiveContainer>
            </div>
        </motion.div>
        </div>
    );
    }

    export default OrderStatusDistribution;
