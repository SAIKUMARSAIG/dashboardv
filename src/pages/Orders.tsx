// import React from "react";
// import { motion } from "framer-motion";

// function Orders() {
//   return
//   (
//     <>
//       <motion.h1
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.9, delay: 0.5 }}
//       className="backdrop-blur-2xl bg-gray text-white px-10 py-2 border-b-2 border-green-800 text-green-950 uppercase font-bold"
//     >
//       Orders
//     </motion.h1>
//     </>
// );
// }

// export default Orders;

// import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, Clock, DollarSign, Search, ShoppingBag } from "lucide-react";


import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
import DailySalesTrend from "../components/charts/DailySalesTrend";

function Orders() {

  const users = [
    {
        orderId: "ORD001",
        customer: "John Doe",
        total: "$235.40",
        status: "Delivered",
        date: "2023-07-01"
    },
    {
        orderId: "ORD002",
        customer: "Jane Smith",
        total: "$412.00",
        status: "Processing",
        date: "2023-07-02"
    },
    {
        orderId: "ORD003",
        customer: "Bob Johnson",
        total: "$162.50",
        status: "Shipped",
        date: "2023-07-03"
    },
    {
        orderId: "ORD004",
        customer: "Alice Brown",
        total: "$750.20",
        status: "Pending",
        date: "2023-07-04"
    },
    {
        orderId: "ORD005",
        customer: "Charlie Wilson",
        total: "$95.80",
        status: "Delivered",
        date: "2023-07-05"
    },
    {
        orderId: "ORD006",
        customer: "Eva Martinez",
        total: "$310.75",
        status: "Processing",
        date: "2023-07-06"
    },
    {
        orderId: "ORD007",
        customer: "David Lee",
        total: "$528.90",
        status: "Shipped",
        date: "2023-07-07"
    },
    {
        orderId: "ORD008",
        customer: "Grace Taylor",
        total: "$189.60",
        status: "Delivered",
        date: "2023-07-08"
    }
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

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-2 border-b-2 border-green-800 text-green-400 uppercase font-bold"
      >
        Orders
      </motion.h1>
      <div className="flex flex-col overflow-auto mt-5">
        <div className="flex flex-col md:flex-row justify-between ">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 px-4 py-2 backdrop-blur-2xl"
            >
              <div className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center gap-2 px-14 py-5 ring-2 ring-violet-500">
                <div className="flex justify-between items-center gap-4">
                  <div className="text-green-400">{card.icon}</div>
                  <div className="text-white font-bold">{card.name}</div>
                </div>

                <div className="text-violet-600 text-center ">{card.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-[50%]">
            <OrderStatusDistribution />
          </div>
          <div className="w-[50%]">
            <DailySalesTrend />
          </div>
        </div>


          {/*THIS IS THE TABLE  */}

          <div className="flex flex-col overflow-x-auto border border-slate-400 px-5 py-3 rounded-lg">

            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-medium text-violet-600 mb-4 text-center">Orders List</h2>
              <div className="flex gap-3 items-center">
                <Search size={25} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-700 text-white p-2 rounded-lg focus:outline-none shadow-2xl shadow-violet-700 ring-2 ring-violet-500"
                  />
                  </div>
            </div>
              
                
          </div>




      </div>
    </>
  );
}

export default Orders;
