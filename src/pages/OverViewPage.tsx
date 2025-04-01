import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { PersonStandingIcon, Zap, ShoppingBag } from "lucide-react";
import SalesOverview from "../components/charts/SalesOverview";
import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
import SalesChannelChart from '../components/charts/SalesChannelChart';

const gridVariants = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: {
    opacity: 0.95,
    scale: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

function OverViewPage() {
  return (
    <div className="flex flex-col h-full overflow-auto sm:-mx-full">
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-4 border-b-2 border-violet-800 text-purple-500 uppercase font-bold sticky top-0 z-10"
      >
        Overview
      </motion.h1>

      <div className="p-6 space-y-6 overflow-auto">
        {/* Stat Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-900 rounded-xl p-6"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={gridVariants}>
            <StatCard name="Total Sales" icon={<Zap />} value="₹12,345" />
          </motion.div>
          <motion.div variants={gridVariants}>
            <StatCard
              name="New Users"
              icon={<PersonStandingIcon />}
              value="8,700"
            />
          </motion.div>
          <motion.div variants={gridVariants}>
            <StatCard name="Revenue" icon={<Zap />} value="₹95,000" />
          </motion.div>
          <motion.div variants={gridVariants}>
            <StatCard name="Orders" icon={<ShoppingBag />} value="2,134" />
          </motion.div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900 rounded-xl p-6">
          <div className="md:col-span-2">
            <SalesOverview />
          </div>
          <div>
            <OrderStatusDistribution />
          </div>
          <div className="md:col-span-3">
            <SalesChannelChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverViewPage;