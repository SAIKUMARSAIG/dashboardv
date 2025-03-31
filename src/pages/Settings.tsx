// import React from 'react'
import {motion} from 'framer-motion'


function Settings() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="backdrop-blur-2xl bg-gray-800 text-white px-10 py-2 border-b-2 border-amber-300 text-amber-500 uppercase font-bold"
      >
        Settings
      </motion.h1>
    </>
  )
}

export default Settings