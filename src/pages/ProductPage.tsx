// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   BatteryLow,
//   BoxIcon,
//   CircleDollarSign,
//   Edit,
//   Search,
//   SquareArrowUpRight,
//   Trash2,
// } from "lucide-react";
// import SalesOverview from "../components/charts/SalesOverview";
// import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
// import StatCard from "../components/common/StatCard";

// const ProductPage = () => {
//   const productData = [
//     {
//       id: 1,
//       name: "Wireless Earbuds",
//       category: "Electronics",
//       price: 59.99,
//       stock: 143,
//       sales: 1200,
//     },
//     {
//       id: 2,
//       name: "Leather Wallet",
//       category: "Accessories",
//       price: 39.99,
//       stock: 89,
//       sales: 880,
//     },
//     {
//       id: 3,
//       name: "Smart Watch",
//       category: "Electronics",
//       price: 199.99,
//       stock: 56,
//       sales: 650,
//     },
//     {
//       id: 4,
//       name: "Yoga Mat",
//       category: "Fitness",
//       price: 29.99,
//       stock: 210,
//       sales: 950,
//     },
//     {
//       id: 5,
//       name: "Coffee Maker",
//       category: "Home",
//       price: 79.99,
//       stock: 78,
//       sales: 720,
//     },
//   ];

//   const labels = [
//     {
//       icon: <BoxIcon />,
//       title: "Total Products",
//       value: 1234,
//     },
//     {
//       icon: <SquareArrowUpRight />,
//       title: "Top Selling",
//       value: 89,
//     },
//     {
//       icon: <BatteryLow />,
//       title: "Low Stock",
//       value: 23,
//     },
//     {
//       icon: <CircleDollarSign />,
//       title: "Total Revenue",
//       value: "$543,210",
//     },
//   ];

//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(productData);

//   const handleSearch = (e: any) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = productData.filter((product) =>
//       product.name.toLowerCase().includes(query)
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <>
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, delay: 0.5 }}
//         className="backdrop-blur-2xl bg-gray-800 text-blue-500 px-10 py-2
//                   border-b-2 border-violet-800 uppercase font-bold text-xl mb-5"
//       >
//         Products
//       </motion.h1>
//       <div className="flex flex-col h-full overflow-auto sm:-mx-full">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//           {labels.map((product, index) => (
//             <div
//               key={index}
//               className="flex gap-4 mb-4 px-10 py-5 w-fit h-full"
//             >
//               <StatCard
//                 name={product.title}
//                 icon={product.icon}
//                 value={product.value}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Search Bar */}
//         <motion.div
//           className="flex flex-col items-center p-6 backdrop-blur-lg shadow-lg rounded-lg bg-gray-800 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 2.5 }}
//         >
//           <div className="flex items-center justify-between w-full mb-4">
//             <h2 className="text-xl font-bold text-white">Product List</h2>
//             <div className="flex items-center gap-2 ring-2 ring-violet-600 backdrop-blur-lg shadow-lg shadow-violet-900  border-slate-900 text-black px-4 py-2 rounded-md  duration-300">
//               <Search size={20} className="text-gray-400" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 className="block rounded-md px-4 py-2 w-60 bg-transparent outline-none text-white placeholder-gray-300"
//                 placeholder="Search by name..."
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <table className="w-full border-collapse border border-gray-700 text-white">
//             <thead>
//               <tr className="bg-gray-700">
//                 <th className="p-3 border border-gray-600">Name</th>
//                 <th className="p-3 border border-gray-600">Category</th>
//                 <th className="p-3 border border-gray-600">Price</th>
//                 <th className="p-3 border border-gray-600">Stock</th>
//                 <th className="p-3 border border-gray-600">Sales</th>
//                 <th className="p-3 border border-gray-600">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                   <tr key={product.id} className="hover:bg-gray-700 transition">
//                     <td className="p-3 border border-gray-600">
//                       {product.name}
//                     </td>
//                     <td className="p-3 border border-gray-600">
//                       {product.category}
//                     </td>
//                     <td className="p-3 border border-gray-600">
//                       ${product.price}
//                     </td>
//                     <td className="p-3 border border-gray-600">
//                       {product.stock}
//                     </td>
//                     <td className="p-3 border border-gray-600">
//                       {product.sales}
//                     </td>
//                     <td className="p-3 border border-gray-600 flex gap-2">
//                       <button className="text-blue-400 hover:text-blue-500">
//                         <Edit size={18} />
//                       </button>
//                       <button className="text-red-400 hover:text-red-500">
//                         <Trash2 size={18} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={6} className="text-center text-gray-400 p-4">
//                     No products found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </motion.div>

//         {/* Charts Section */}
//         <div className="flex flex-col md:flex-row flex-wrap">
//           <div className="flex-1 min-w-[60%]">
//             <SalesOverview />
//           </div>
//           <div className="flex-1 min-w-[40%]">
//             <OrderStatusDistribution />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductPage;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BatteryLow,
  BoxIcon,
  CircleDollarSign,
  Edit,
  Search,
  SquareArrowUpRight,
  Trash2,
} from "lucide-react";
import SalesOverview from "../components/charts/SalesOverview";
import OrderStatusDistribution from "../components/charts/OrderStatusDistribution";
import StatCard from "../components/common/StatCard";

const ProductPage = () => {
  const productData = [
    {
      id: 1,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 59.99,
      stock: 143,
      sales: 1200,
    },
    {
      id: 2,
      name: "Leather Wallet",
      category: "Accessories",
      price: 39.99,
      stock: 89,
      sales: 880,
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Electronics",
      price: 199.99,
      stock: 56,
      sales: 650,
    },
    {
      id: 4,
      name: "Yoga Mat",
      category: "Fitness",
      price: 29.99,
      stock: 210,
      sales: 950,
    },
    {
      id: 5,
      name: "Coffee Maker",
      category: "Home",
      price: 79.99,
      stock: 78,
      sales: 720,
    },
  ];

  const labels = [
    {
      icon: <BoxIcon />,
      title: "Total Products",
      value: 1234,
    },
    {
      icon: <SquareArrowUpRight />,
      title: "Top Selling",
      value: 89,
    },
    {
      icon: <BatteryLow />,
      title: "Low Stock",
      value: 23,
    },
    {
      icon: <CircleDollarSign />,
      title: "Total Revenue",
      value: "$543,210",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e: any) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="flex flex-col h-full overflow-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="backdrop-blur-2xl bg-gray-800 text-blue-500 px-10 py-2 
                  border-b-2 border-violet-800 uppercase font-bold text-xl mb-5 sticky top-0 z-10"
        >
          Products
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {labels.map((product, index) => (
            <div
              key={index}
              className="flex gap-4 mb-4 px-10 py-5 w-fit h-full"
            >
              <StatCard
                name={product.title}
                icon={product.icon}
                value={product.value}
              />
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <motion.div
          className="flex flex-col items-center p-6 backdrop-blur-lg shadow-lg rounded-lg bg-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.5 }}
        >
          <div className="flex items-center justify-between w-full mb-4">
            <h2 className="text-xl font-bold text-white">Product List</h2>
            <div className="flex items-center gap-2 ring-2 ring-violet-600 backdrop-blur-lg shadow-lg shadow-violet-900  border-slate-900 text-black px-4 py-2 rounded-md  duration-300">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="block rounded-md px-4 py-2 w-60 bg-transparent outline-none text-white placeholder-gray-300"
                placeholder="Search by name..."
              />
            </div>
          </div>

          {/* Table */}
          <table className="w-full border-collapse border border-gray-700 text-white">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 border border-gray-600">Name</th>
                <th className="p-3 border border-gray-600">Category</th>
                <th className="p-3 border border-gray-600">Price</th>
                <th className="p-3 border border-gray-600">Stock</th>
                <th className="p-3 border border-gray-600">Sales</th>
                <th className="p-3 border border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-700 transition">
                    <td className="p-3 border border-gray-600">
                      {product.name}
                    </td>
                    <td className="p-3 border border-gray-600">
                      {product.category}
                    </td>
                    <td className="p-3 border border-gray-600">
                      ${product.price}
                    </td>
                    <td className="p-3 border border-gray-600">
                      {product.stock}
                    </td>
                    <td className="p-3 border border-gray-600">
                      {product.sales}
                    </td>
                    <td className="p-3 border border-gray-600 flex gap-2">
                      <button className="text-blue-400 hover:text-blue-500">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-400 hover:text-red-500">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center text-gray-400 p-4">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>

        {/* Charts Section */}
        <div className="flex flex-col md:flex-row flex-wrap">
          <div className="flex-1 min-w-[60%]">
            <SalesOverview />
          </div>
          <div className="flex-1 min-w-[40%]">
            <OrderStatusDistribution />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
