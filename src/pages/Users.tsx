// import { useState } from "react";
// import { motion } from "framer-motion";
// import { PersonStanding, PersonStandingIcon, Search } from "lucide-react";
// import UserGrowth from "../components/charts/UserGrowth";
// import UserActivity from '../components/charts/UserActivity'
// import UserDemographics from "../components/charts/UserDemographics";




// function Users() {
//   const usersInfo = [
//     { icon: <PersonStandingIcon />, message: "Total Users", value: "152,845" },
//     { icon: <PersonStanding />, message: "New Users today", value: "120" },
//     { icon: <PersonStandingIcon />, message: "Active Users", value: "98,522" },
//     { icon: <PersonStandingIcon />, message: "Churn Rate", value: "2.4%" },
//   ];

//   const users = [
//     {
//       name: "John Doe",
//       email: "john@example.com",
//       role: "Customer",
//       status: "Active",
//     },
//     {
//       name: "Jane Smith",
//       email: "jane@example.com",
//       role: "Admin",
//       status: "Active",
//     },
//     {
//       name: "Bob Johnson",
//       email: "bob@example.com",
//       role: "Customer",
//       status: "Inactive",
//     },
//     {
//       name: "Alice Brown",
//       email: "alice@example.com",
//       role: "Customer",
//       status: "Active",
//     },
//     {
//       name: "Charlie Wilson",
//       email: "charlie@example.com",
//       role: "Moderator",
//       status: "Active",
//     },
//   ];

//   const [searchName, setSearchName] = useState("");
//   const [filterName, setFilterName] = useState(users);

//   const handleSearch = (e: any) => {
//     const value = e.target.value;
//     setSearchName(value);

//     const filteredUsers = users.filter((user) =>
//       user.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilterName(filteredUsers);
//   };

//   return (
//     <>
//       <div className="flex flex-col overflow-auto flex flex-col h-full overflow-auto sm:-mx-full">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.5 }}
//           className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-2 border-b-2 border-yellow-800 text-yellow-500 uppercase font-bold"
//         >
//           Users
//         </motion.h1>

//         {/* Users Info Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-5 my-5">
//           {usersInfo.map((data, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.5 + index * 0.1 }}
//               className="flex flex-col gap-3 w-1/3 md:w-1/2 scale-100 hover:scale-105"
//             >
//               <div className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
//                 <div className="text-yellow-500 text-3xl">{data.icon}</div>
//                 <div className="flex flex-col">
//                   <span className="text-gray-300 font-semibold">
//                     {data.message}
//                   </span>
//                   <span className="text-white font-bold text-xl">
//                     {data.value}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Beautified Users Table Section */}
//         <div className="bg-slate-700 w-full mx-auto rounded-xl border border-gray-600 p-6 shadow-lg">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-white font-semibold text-xl tracking-wide">
//               Users
//             </h1>

//            <div className="flex flex-row justify-between gap-3 items-center backdrop-blur-2xl backdrop:bg-gray-700 border border-violet-600 px-4 py-2 ring-2 ring-violet-700 shadow-2xl shadow-violet-600 active:shadow-2xl active:shadow-green-400 rounded-lg active:ring-2  active:ring-green-400">
//             <Search size={20}/>
//            <input
//               type="text"
//               value={searchName}
//               onChange={handleSearch}
//               placeholder="Search users..."
//               className="outline-none bg-transparent "
//             />
//            </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse text-gray-200">
//               <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300">
//                 <tr>
//                   <th className="p-4 text-left font-semibold text-sm uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="p-4 text-left font-semibold text-sm uppercase tracking-wider">
//                     Email
//                   </th>
//                   <th className="p-4 text-left font-semibold text-sm uppercase tracking-wider">
//                     Role
//                   </th>
//                   <th className="p-4 text-left font-semibold text-sm uppercase tracking-wider">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filterName.map((user, index) => (
//                   <tr
//                     key={index}
//                     className={`${
//                       index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"
//                     } hover:bg-gray-600 transition-colors duration-200`}
//                   >
//                     <td className="p-4 border-t border-gray-600">
//                       {user.name}
//                     </td>
//                     <td className="p-4 border-t border-gray-600 font-mono text-sm">
//                       {user.email}
//                     </td>
//                     <td className="p-4 border-t border-gray-600">
//                       {user.role}
//                     </td>
//                     <td
//                       className={`p-4 border-t border-gray-600 font-medium ${
//                         user.status === "Active"
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       <span
//                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           user.status === "Active"
//                             ? "bg-green-900/50 text-green-300"
//                             : "bg-red-900/50 text-red-300"
//                         }`}
//                       >
//                         {user.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="flex justify-start items-center my-5">
//           <UserGrowth />
//           <UserActivity />
//           {/* <UserGrowth /> */}
//         </div>
//         <UserDemographics />
//       </div>
//     </>
//   );
// }

// export default Users;






import { useState } from "react";
import { motion } from "framer-motion";
import { PersonStanding, PersonStandingIcon, Search } from "lucide-react";
import UserGrowth from "../components/charts/UserGrowth";
import UserActivity from '../components/charts/UserActivity'
import UserDemographics from "../components/charts/UserDemographics";

function Users() {
  const usersInfo = [
    { icon: <PersonStandingIcon />, message: "Total Users", value: "152,845" },
    { icon: <PersonStanding />, message: "New Users today", value: "120" },
    { icon: <PersonStandingIcon />, message: "Active Users", value: "98,522" },
    { icon: <PersonStandingIcon />, message: "Churn Rate", value: "2.4%" },
  ];

  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Customer",
      status: "Inactive",
    },
    {
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Moderator",
      status: "Active",
    },
  ];

  const [searchName, setSearchName] = useState("");
  const [filterName, setFilterName] = useState(users);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchName(value);

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterName(filteredUsers);
  };

  return (
    <>
      <div className="flex flex-col overflow-auto h-full w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="backdrop-blur-2xl bg-gray-800 text-white px-4 sm:px-10 py-2 border-b-2 border-yellow-800 text-yellow-500 uppercase font-bold"
        >
          Users
        </motion.h1>

        {/* Users Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 my-5 px-4 sm:px-0">
          {usersInfo.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 + index * 0.1 }}
              className="flex flex-col gap-3 w-full scale-100 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-2 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
                <div className="text-yellow-500 text-3xl">{data.icon}</div>
                <div className="flex flex-col">
                  <span className="text-gray-300 font-semibold">
                    {data.message}
                  </span>
                  <span className="text-white font-bold text-xl">
                    {data.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beautified Users Table Section */}
        <div className="bg-slate-700 w-full mx-auto rounded-xl border border-gray-600 p-3 sm:p-6 shadow-lg m-4 sm:m-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-white font-semibold text-xl tracking-wide">
              Users
            </h1>

            <div className="flex flex-row justify-between gap-3 items-center backdrop-blur-2xl backdrop:bg-gray-700 border border-violet-600 px-4 py-2 ring-2 ring-violet-700 shadow-2xl shadow-violet-600 active:shadow-2xl active:shadow-green-400 rounded-lg active:ring-2 active:ring-green-400 w-full sm:w-auto">
              <Search size={20}/>
              <input
                type="text"
                value={searchName}
                onChange={handleSearch}
                placeholder="Search users..."
                className="outline-none bg-transparent w-full"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-gray-200">
              <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300">
                <tr>
                  <th className="p-2 sm:p-4 text-left font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Name
                  </th>
                  <th className="p-2 sm:p-4 text-left font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Email
                  </th>
                  <th className="p-2 sm:p-4 text-left font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Role
                  </th>
                  <th className="p-2 sm:p-4 text-left font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterName.map((user, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"
                    } hover:bg-gray-600 transition-colors duration-200`}
                  >
                    <td className="p-2 sm:p-4 border-t border-gray-600 text-sm sm:text-base">
                      {user.name}
                    </td>
                    <td className="p-2 sm:p-4 border-t border-gray-600 font-mono text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
                      {user.email}
                    </td>
                    <td className="p-2 sm:p-4 border-t border-gray-600 text-sm sm:text-base">
                      {user.role}
                    </td>
                    <td
                      className={`p-2 sm:p-4 border-t border-gray-600 font-medium ${
                        user.status === "Active"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      <span
                        className={`inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-900/50 text-green-300"
                            : "bg-red-900/50 text-red-300"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="flex flex-col lg:flex-row justify-start items-center gap-4 my-5 px-4 sm:px-0">
          <div className="w-full lg:w-1/2">
            <UserGrowth />
          </div>
          <div className="w-full lg:w-1/2">
            <UserActivity />
          </div>
        </div>
        
        {/* Demographics Section */}
        <div className="px-4 sm:px-0 mb-6">
          <UserDemographics />
        </div>
      </div>
    </>
  );
}

export default Users;