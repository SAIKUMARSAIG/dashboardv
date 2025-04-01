import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  CalendarRange,
  DollarSign,
  ShoppingCart,
} from "lucide-react";
import StatCard from "../components/common/StatCard";
import SalesOverviewSales from "../components/charts/SalesOverviewSales";
import DailySalesTrend from "../components/charts/DailySalesTrend";
// import OrderStatusDistrubution from "../components/charts/OrderStatusDistribution";
import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";

function Sales() {
  const labels = [
    {
      icon: <DollarSign />,
      label: "Total Sales",
      value: "$1,234,567",
    },
    {
      icon: <ShoppingCart />,
      label: "Avg.Order values",
      value: "$78.90",
    },
    {
      icon: <ArrowUpRightIcon />,
      label: "Conversion Rate",
      value: "3.5%",
    },
    {
      icon: <CalendarRange />,
      label: "Sales Growth",
      value: "12.3%",
    },
  ];
  return (
    <>
      <div className="flex flex-col h-full overflow-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-2 border-b-2 border-green-800 text-green-500 uppercase font-bold"
        >
          Sales
        </motion.h1>
        <div className=" overflow-auto my-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            {labels.map((label, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 px-4 py-2 backdrop-blur-2xl"
              >
                <StatCard
                  name={label.label}
                  icon={label.icon}
                  value={label.value}
                />
              </motion.div>
            ))}
          </motion.div>

          <SalesOverviewSales />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-[50%]">
              <OrderStatusDistribution />
            </div>
            <div className="w-[50%]">
              <DailySalesTrend />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sales;
