// import React from 'react'
import {motion} from "framer-motion";


function Sales() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-2 border-b-2 border-green-800 text-green-500 uppercase font-bold"
      >
        Sales
      </motion.h1>
    </>
  )
}

export default Sales