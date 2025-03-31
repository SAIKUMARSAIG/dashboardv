// // import { motion } from "framer-motion";
// // import StatCard from "../components/common/StatCard";
// // import { PersonStandingIcon, Zap } from "lucide-react";
// // import SalesOverview from "../components/charts/SalesOverview";
// // import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
// // import SalesChannelChart from '../components/charts/SalesChannelChart'



// // const gridVariants = {
// //   hidden: { opacity: 0, scale: 0.1 },
// //   visible: {
// //     opacity: 0.95,
// //     scale: 1,
// //     transition: { staggerChildren: 0.2, duration: 0.8 },
// //   },
// // };

// // function OverViewPage() {
// //   return (
// //     <>
// //       {/* Animated Title */}
// //       <motion.h1
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.9, delay: 0.5 }}
// //         className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-2 border-b-2 border-violet-800 text-purple-500 uppercase font-bold"
// //       >
// //         Overview
// //       </motion.h1>

// //       {/* Animated Grid Container */}
// //       {/* <motion.div
// //         // className="grid grid-cols-4 md:grid-rows-4 gap-6 p-6 bg-gray-900 rounded-xl"
// //         className="flex flex-row grid-cols-4 md:grid-rows-4 gap-6 p-6 bg-gray-900 rounded-xl"
// //         // variants={gridVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         {/* Animated Stat Card */}
// //       {/* <motion.div variants={gridVariants}>
// //           <StatCard name="Total Sales" icon={<Zap />} value="₹12,345" />
// //           <StatCard name="New Users" icon={<PersonStandingIcon />} value="₹12,345" />
// //           <StatCard name="Total Sales" icon={<Zap />} value="₹12,345" />
// //           <StatCard name="Total Sales" icon={<Zap />} value="₹12,345" />
// //         </motion.div> */}
// //       {/* </motion.div> */}
// //       <motion.div
// //         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-900 rounded-xl"
// //         variants={gridVariants}
// //         initial="hidden"
// //         animate="visible"
// //       >
// //         {/* Animated Stat Cards */}
// //         <motion.div variants={gridVariants}>
// //           <StatCard name="Total Sales" icon={<Zap />} value="₹12,345" />
// //         </motion.div>
// //         <motion.div variants={gridVariants}>
// //           <StatCard
// //             name="New Users"
// //             icon={<PersonStandingIcon />}
// //             value="8,700"
// //           />
// //         </motion.div>
// //         <motion.div variants={gridVariants}>
// //           <StatCard name="Revenue" icon={<Zap />} value="₹95,000" />
// //         </motion.div>
// //         <motion.div variants={gridVariants}>
// //           <StatCard name="Orders" icon={<Zap />} value="2,134" />
// //         </motion.div>
// //       </motion.div>

// //       {/* <div className="flex flex-1 flex-row bg-gray-900 rounded-xl">
// //             <SalesOverview></SalesOverview>
// //             <OrderStatusDistribution />
// //           </div> */}
// //       {/* <div className="flex gap-3 bg-gray-900 rounded-xl">
// //         <div className="">
// //           <SalesOverview />
// //         </div>
// //           {/* <SalesOverview /> */}
// //           {/* <div>
// //           <OrderStatusDistribution />
// //           </div>
// //       </div> */}



// // <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-900">
// //   <div className="md:col-span-2">
// //     <SalesOverview />
// //   </div>
// //   <div>
// //     <OrderStatusDistribution />
// //   </div>
// //   <div>
// //     <SalesChannelChart />
// //   </div>
// // </div>
// //     </>
// //   );
// // }

// // export default OverViewPage;
















// import { motion } from "framer-motion";
// import StatCard from "../components/common/StatCard";
// import { PersonStandingIcon, Zap } from "lucide-react";
// import SalesOverview from "../components/charts/SalesOverview";
// import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
// import SalesChannelChart from "../components/charts/SalesChannelChart";
// import SideBar from "../components/SideBar";

// const gridVariants = {
//   hidden: { opacity: 0, scale: 0.1 },
//   visible: {
//     opacity: 0.95,
//     scale: 1,
//     transition: { staggerChildren: 0.2, duration: 0.8 },
//   },
// };

// function OverViewPage() {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       {/* <SideBar /> */}
      
//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto p-6 bg-gray-900">
//         {/* Animated Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.5 }}
//           className="bg-gray-800 text-white px-10 py-2 border-b-2 border-violet-800 text-purple-500 uppercase font-bold"
//         >
//           Overview
//         </motion.h1>

//         {/* Stat Cards */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
//           variants={gridVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={gridVariants}>
//             <StatCard name="Total Sales" icon={<Zap />} value="₹12,345" />
//           </motion.div>
//           <motion.div variants={gridVariants}>
//             <StatCard name="New Users" icon={<PersonStandingIcon />} value="8,700" />
//           </motion.div>
//           <motion.div variants={gridVariants}>
//             <StatCard name="Revenue" icon={<Zap />} value="₹95,000" />
//           </motion.div>
//           <motion.div variants={gridVariants}>
//             <StatCard name="Orders" icon={<Zap />} value="2,134" />
//           </motion.div>
//         </motion.div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
//           <div className="md:col-span-2">
//             <SalesOverview />
//           </div>
//           <div>
//             <OrderStatusDistribution />
//           </div>
//           <div>
//             <SalesChannelChart />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OverViewPage;
















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