import {
  ArrowBigRightDashIcon,
  BarChart2,
  DollarSignIcon,
  ShoppingCart,
  Menu,
  PersonStanding,
  ShoppingBag,
  Settings,
  User,
} from "lucide-react";
import  { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling

function SideBar() {
  const links = [
    { name: "Overview", icon: BarChart2, color: "6366f1", path: "/" },
    { name: "Products", icon: ShoppingBag, color: "2196f3", path: "/products" },
    { name: "Users", icon: PersonStanding, color: "ff9f43", path: "/users" },
    { name: "Sales", icon: DollarSignIcon, color: "22c55e", path: "/sales" },
    { name: "Orders", icon: ShoppingCart, color: "4caf50", path: "/orders" },
    { name: "Analytics", icon: ArrowBigRightDashIcon, color: "f44336", path: "/analytics" },
    { name: "Settings", icon: Settings, color: "ffeb3b", path: "/settings" },
  ];

  const [sidebar, setSideBar] = useState(false); // Start with sidebar collapsed

  // Animation variants for the sidebar links
  const linkVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Hamburger icon animation (transform to "X" when open)
  const menuIconVariants = {
    closed: { rotate: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { rotate: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className={`relative z-10 transition-all duration-500 ease-in-out flex-shrink-0 h-screen ${
        sidebar ? "w-64" : "w-20"
      } h-full`}
      animate={{ width: sidebar ? 256 : 80 }}
    >
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 h-full bg-opacity-70 backdrop-blur-lg p-4 flex flex-col border-r border-gray-700 shadow-lg">
        {/* Hamburger Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(34, 211, 238, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="p-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-6 flex items-center justify-center"
          onClick={() => setSideBar(!sidebar)}
        >
          <motion.div
            variants={menuIconVariants}
            initial="closed"
            animate={sidebar ? "open" : "closed"}
          >
            <Menu className="w-6 h-6" />
          </motion.div>
          {sidebar && (
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="ml-3 text-lg font-semibold"
            >
              Dashboard
            </motion.span>
          )}
        </motion.button>

        {/* Sidebar Links */}
        <nav className="flex-1">
          {links.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center p-3 mb-2 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                }`
              }
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center w-full"
              >
                <link.icon className="w-6 h-6" style={{ color: `#${link.color}` }} />
                {sidebar && (
                  <motion.span
                    variants={linkVariants}
                    initial="closed"
                    animate={sidebar ? "open" : "closed"}
                    className="ml-3 text-white font-medium"
                  >
                    {link.name}
                  </motion.span>
                )}
              </motion.div>
            </NavLink>
          ))}
        </nav>

        {/* User Profile Section */}
        <motion.div
          className="mt-auto p-3 border-t border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <div className="flex items-center">
            <User className="w-6 h-6 text-gray-400" />
            {sidebar && (
              <motion.div
                variants={linkVariants}
                initial="closed"
                animate={sidebar ? "open" : "closed"}
                className="ml-3"
              >
                <p className="text-white font-medium">Sai Kumar</p>
                <p className="text-gray-400 text-sm">Admin</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SideBar;