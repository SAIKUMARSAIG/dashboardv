// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// // type StatCardProps = {
// //   name: string;
// //   icon: JSX.Element;
// //   value: string | number;
// // };

// type StatCardProps = {
//     name: string;
//     icon: ReactNode;
//     value: string | number;
//   };
  
// const StatCard: React.FC<StatCardProps> = ({ name, icon, value }) => {
//   // Animation variants for the card
//   const cardVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
//     hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
//   };

//   return (
//     <motion.div
//       className="relative bg-gray-800 bg-opacity-50 backdrop-blur-xl shadow-lg rounded-xl p-6 text-white border border-gray-700/50 overflow-hidden"
//       variants={cardVariants}
//       initial="initial"
//       animate="animate"
//       whileHover="hover"
//       transition={{ type: "spring", stiffness: 200, damping: 20 }}
//     >
//       {/* Background Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50"></div>

//       {/* Card Content */}
//       <div className="relative z-10 flex flex-col gap-3">
//         {/* Icon and Name */}
//         <div className="flex items-center gap-3">
//           <motion.div
//             className="text-blue-400"
//             whileHover={{ scale: 1.2, rotate: 10 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             {icon}
//           </motion.div>
//           <h1 className="text-lg font-semibold tracking-wide">{name}</h1>
//         </div>

//         {/* Value */}
//         <motion.h1
//           className="text-3xl font-bold"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
//         >
//           {value}
//         </motion.h1>
//       </div>

//       {/* Hover Shine Effect */}
//       <motion.div
//         className="absolute inset-0 bg-white opacity-10"
//         initial={{ x: "-100%" }}
//         whileHover={{ x: "100%", transition: { duration: 0.5, ease: "easeInOut" } }}
//       />
//     </motion.div>
//   );
// };

// export default StatCard;






import { motion } from "framer-motion";
import { ReactNode } from "react";

type StatCardProps = {
  name: string;
  icon: ReactNode;
  value: string | number;
};

const StatCard: React.FC<StatCardProps> = ({ name, icon, value }) => {
  // Animation variants for the card
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.25)" },
  };

  return (
    <motion.div
      className="relative bg-gray-900 bg-opacity-70 backdrop-blur-2xl shadow-xl rounded-2xl p-6 text-white border border-gray-700/30 overflow-hidden max-w-xs"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-60 ring-1 ring-orange-500"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon and Name */}
        <div className="flex items-center gap-4">
          <motion.div
            className="text-indigo-400 bg-indigo-950/50 p-2 rounded-full"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {icon}
          </motion.div>
          <h1 className="text-xl font-medium tracking-tight text-fuchsia-700">
            {name}
          </h1>
        </div>

        {/* Value */}
        <motion.h1
          className="text-4xl text-violet-600 font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
        >
          {value}
        </motion.h1>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
      />
    </motion.div>
  );
};

export default StatCard;