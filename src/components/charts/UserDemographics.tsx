import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";
  import { motion } from "framer-motion";
  import { useState } from "react";
  
  // User demographics data
  const userDemographicsData = [
    { name: "18-24", value: 20 },
    { name: "25-34", value: 30 },
    { name: "35-44", value: 25 },
    { name: "45-54", value: 15 },
    { name: "55+", value: 10 },
  ];
  
  // Enhanced color palette with gradients
  const COLORS = ["#6366F1", "#22D3EE", "#F472B6", "#FBBF24", "#34D399"];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: "easeOut" 
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.3,
        ease: "easeOut" 
      }
    }
  };
  
  function UserDemographics() {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleMouseEnter = (index:any) => {
      setActiveIndex(index);
    };
    
    const handleMouseLeave = () => {
      setActiveIndex(null);
    };
  
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }:  {
      cx: number;
      cy: number;
      midAngle: number;
      innerRadius: number;
      outerRadius: number;
      percent: number;
      index: number;
      name: string;
    }) => {
      const RADIAN = Math.PI / 180;
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
      return (
        <text 
          x={x} 
          y={y} 
          fill="white" 
          textAnchor={x > cx ? 'start' : 'end'} 
          dominantBaseline="central"
          fontWeight={activeIndex === index ? "bold" : "normal"}
          fontSize={activeIndex === index ? "14" : "12"}
        >
          {`${name}: ${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
  
    // Calculate total users
    const totalUsers = userDemographicsData.reduce((sum, entry) => sum + entry.value, 0);
  
    return (
      <div className="flex flex-col items-center p-4 border border-slate-700 rounded-3xl p-6 md:mx-5 ">
        <motion.div
          className="w-full bg-gradient-to-r from-gray-800 to-gray-900 
                    bg-opacity-90 backdrop-blur-xl p-6 rounded-xl shadow-lg 
                    border border-gray-700 ring-2 ring-fuchsia-500 shadow-2xl shadow-fuchsia-700"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={titleVariants}>
            <h2 className="text-2xl font-bold text-center mb-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              User Demographics
            </h2>
            <p className="text-gray-400 text-sm text-center mb-6">
              Age distribution of {totalUsers} total users
            </p>
          </motion.div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userDemographicsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  animationBegin={300}
                  animationDuration={1500}
                >
                  {userDemographicsData.map((_entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke={activeIndex === index ? "#fff" : "transparent"}
                      strokeWidth={activeIndex === index ? 2 : 0}
                      style={{
                        filter: activeIndex === index ? "brightness(1.2)" : "brightness(1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(30, 41, 59, 0.9)", 
                    color: "#fff",
                    borderRadius: "8px",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    padding: "8px 12px",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  formatter={(value : any) => [`${value} (${((value/totalUsers)*100).toFixed(1)}%)`, "Users"]}
                />
                <Legend 
                  verticalAlign="bottom"
                  height={36}
                  iconSize={10}
                  iconType="circle"
                  layout="horizontal"
                  wrapperStyle={{ 
                    paddingTop: "20px", 
                    color: "#e2e8f0" 
                  }}
                  formatter={(value) => (
                    <span style={{ color: "#e2e8f0", fontSize: "14px" }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <motion.div 
            className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {userDemographicsData.map((entry, index) => (
              <div 
                key={`stat-${index}`}
                className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 flex flex-col items-center"
                style={{ 
                  borderLeft: `3px solid ${COLORS[index % COLORS.length]}`,
                }}
              >
                <span className="text-sm text-gray-400">{entry.name}</span>
                <span className="text-xl font-semibold text-white">{entry.value}</span>
                <span className="text-xs text-gray-500">{((entry.value/totalUsers)*100).toFixed(1)}%</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }
  
  export default UserDemographics;