// // import React from "react";
// // import { motion } from "framer-motion";

// // function Orders() {
// //   return
// //   (
// //     <>
// //       <motion.h1
// //       initial={{ opacity: 0, y: -20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.9, delay: 0.5 }}
// //       className="backdrop-blur-2xl bg-gray text-white px-10 py-2 border-b-2 border-green-800 text-green-950 uppercase font-bold"
// //     >
// //       Orders
// //     </motion.h1>
// //     </>
// // );
// // }

// // export default Orders;

// // import React from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircleIcon,
//   Clock,
//   DollarSign,
//   Search,
//   ShoppingBag,
// } from "lucide-react";

// import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
// import DailySalesTrend from "../components/charts/DailySalesTrend";
// import { useState } from "react";

// function Orders() {
//   const users = [
//     {
//       orderId: "ORD001",
//       customer: "John Doe",
//       total: "$235.40",
//       status: "Delivered",
//       date: "2023-07-01",
//     },
//     {
//       orderId: "ORD002",
//       customer: "Jane Smith",
//       total: "$412.00",
//       status: "Processing",
//       date: "2023-07-02",
//     },
//     {
//       orderId: "ORD003",
//       customer: "Bob Johnson",
//       total: "$162.50",
//       status: "Shipped",
//       date: "2023-07-03",
//     },
//     {
//       orderId: "ORD004",
//       customer: "Alice Brown",
//       total: "$750.20",
//       status: "Pending",
//       date: "2023-07-04",
//     },
//     {
//       orderId: "ORD005",
//       customer: "Charlie Wilson",
//       total: "$95.80",
//       status: "Delivered",
//       date: "2023-07-05",
//     },
//     {
//       orderId: "ORD006",
//       customer: "Eva Martinez",
//       total: "$310.75",
//       status: "Processing",
//       date: "2023-07-06",
//     },
//     {
//       orderId: "ORD007",
//       customer: "David Lee",
//       total: "$528.90",
//       status: "Shipped",
//       date: "2023-07-07",
//     },
//     {
//       orderId: "ORD008",
//       customer: "Grace Taylor",
//       total: "$189.60",
//       status: "Delivered",
//       date: "2023-07-08",
//     },
//   ];

//   const cards = [
//     {
//       icon: <ShoppingBag />,
//       name: "Total Orders",
//       value: "1,234",
//     },
//     {
//       icon: <Clock />,
//       name: "Pending Orders",
//       value: "6",
//     },
//     {
//       icon: <CheckCircleIcon />,
//       name: "Completed Orders",
//       value: "1,178",
//     },
//     {
//       icon: <DollarSign />,
//       name: "Total Revenue",
//       value: "$98,765",
//     },
//   ];


//   const [search,setSearch] = useState("");
//   const [filterd,setFilterd] = useState(users);


//   const handleSearch = () =>{
//     const filteredUsers = users.filter((user) =>
//       user.customer.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilterd(filteredUsers);
//     setSearch("");
//   }



//   return (


//     <div className="flex flex-col h-full overflow-auto sm:-mx-full md:pr-10 pt-2">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, delay: 0.5 }}
//         className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-2 border-b-2 border-green-800 text-green-400 uppercase font-bold"
//       >
//         Orders
//       </motion.h1>
//       <div className="flex flex-col">
//         <div className="flex flex-col md:flex-row justify-between ">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center gap-2 px-4 py-2 backdrop-blur-2xl"
//             >
//               <div className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center gap-2 px-14 py-5 ring-2 ring-violet-500">
//                 <div className="flex justify-between items-center gap-4">
//                   <div className="text-green-400">{card.icon}</div>
//                   <div className="text-white font-bold">{card.name}</div>
//                 </div>

//                 <div className="text-violet-600 text-center ">{card.value}</div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="w-[50%]">
//             <OrderStatusDistribution />
//           </div>
//           <div className="w-[50%]">
//             <DailySalesTrend />
//           </div>
//         </div>

//         {/*THIS IS THE TABLE  */}

//         <div className="flex flex-col overflow-x-auto border border-slate-400 px-5 py-3 rounded-lg">
//           <div className="flex flex-row justify-between items-center">
//             <h2 className="text-lg font-medium text-violet-600 mb-4 text-center">
//               Orders List
//             </h2>
//             <div className="flex gap-3 items-center ring-2 ring-amber-400 p-2 rounded-lg">
//               <Search size={25} className="bg-transparent" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="outline-none bg-transparent text-white p-2 rounded-lg focus:outline-none " onChange={(e)=>
//                 {
//                   setSearch(e.target.value);
//                 }
//                 }
//               />
//             </div>
//           </div>
//           <table className="w-full border-collapse border border-gray-700 text-white">
//             <tr>
//               <th className="p-3 border border-gray-600">Order ID</th>
//               <th className="p-3 border border-gray-600">Customer</th>
//               <th className="p-3 border border-gray-600">Total</th>
//               <th className="p-3 border border-gray-600">Status</th>
//               <th className="p-3 border border-gray-600">Date</th>
//             </tr>
//             {
//               users.map((user,index)=>(
//                 <tr key={index}>
//                   <td className="p-3 border border-gray-600">{user.orderId}</td>
//                   <td className="p-3 border border-gray-600">{user.customer}</td>
//                   <td className="p-3 border border-gray-600">{user.total}</td>
//                   <td className="p-3 border border-gray-600">{user.status}</td>
//                   <td className="p-3 border border-gray-600">{user.date}</td>
//                 </tr>
//               ))
//             }
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Orders;


// import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  Clock,
  DollarSign,
  Search,
  ShoppingBag,
} from "lucide-react";
import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
import DailySalesTrend from "../components/charts/DailySalesTrend";
import { useState } from "react";

function Orders() {
  const users = [
    {
      orderId: "ORD001",
      customer: "John Doe",
      total: "$235.40",
      status: "Delivered",
      date: "2023-07-01",
    },
    {
      orderId: "ORD002",
      customer: "Jane Smith",
      total: "$412.00",
      status: "Processing",
      date: "2023-07-02",
    },
    {
      orderId: "ORD003",
      customer: "Bob Johnson",
      total: "$162.50",
      status: "Shipped",
      date: "2023-07-03",
    },
    {
      orderId: "ORD004",
      customer: "Alice Brown",
      total: "$750.20",
      status: "Pending",
      date: "2023-07-04",
    },
    {
      orderId: "ORD005",
      customer: "Charlie Wilson",
      total: "$95.80",
      status: "Delivered",
      date: "2023-07-05",
    },
    {
      orderId: "ORD006",
      customer: "Eva Martinez",
      total: "$310.75",
      status: "Processing",
      date: "2023-07-06",
    },
    {
      orderId: "ORD007",
      customer: "David Lee",
      total: "$528.90",
      status: "Shipped",
      date: "2023-07-07",
    },
    {
      orderId: "ORD008",
      customer: "Grace Taylor",
      total: "$189.60",
      status: "Delivered",
      date: "2023-07-08",
    },
  ];

  const cards = [
    {
      icon: <ShoppingBag />,
      name: "Total Orders",
      value: "1,234",
    },
    {
      icon: <Clock />,
      name: "Pending Orders",
      value: "6",
    },
    {
      icon: <CheckCircleIcon />,
      name: "Completed Orders",
      value: "1,178",
    },
    {
      icon: <DollarSign />,
      name: "Total Revenue",
      value: "$98,765",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const filtered = users.filter((user) =>
      user.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="flex flex-col h-full overflow-auto sm:-mx-full">
     
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="backdrop-blur-2xl bg-gray-800 text-green-400 px-10 py-4 border-b-2 border-green-600  uppercase font-bold sticky top-0 z-10 mb-5"
      >
        ORDERS
      </motion.h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 md:p-6 hover:bg-gray-800 transition-all duration-300 shadow-lg border border-gray-700 hover:border-violet-500"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-full text-green-400">
                {card.icon}
              </div>
              <div>
                <h3 className="text-sm md:text-base text-gray-300 font-medium">
                  {card.name}
                </h3>
                <p className="text-xl md:text-2xl font-bold text-violet-400">
                  {card.value}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 md:mb-8">
        <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-gray-700">
          <OrderStatusDistribution />
        </div>
        <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-gray-700">
          <DailySalesTrend />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-violet-400">
            Orders List
          </h2>
          <div className="relative w-full sm:w-auto">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by customer..."
              className="w-full sm:w-64 bg-gray-900/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-violet-500 ring-1 ring-violet-500 shadow-xl shadow-violet-700 focus:ring-2 focus:ring-lime-300  focus:shadow-lg focus:shadow-lime-400 text-white placeholder-gray-500 transition-all duration-300"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-700/50 text-gray-300">
                <th className="p-3 text-left font-semibold">Order ID</th>
                <th className="p-3 text-left font-semibold">Customer</th>
                <th className="p-3 text-left font-semibold">Total</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <td className="p-3">{user.orderId}</td>
                  <td className="p-3">{user.customer}</td>
                  <td className="p-3 text-green-400">{user.total}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Delivered"
                          ? "bg-green-500/20 text-green-400"
                          : user.status === "Processing"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : user.status === "Shipped"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-400">{user.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;