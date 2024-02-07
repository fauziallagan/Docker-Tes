import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/" className='w-20 h-15 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold' whileHover={{
        scale: 1.5,
        backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],

      }}
      >AFA</MotionLink>


    </div >
  )
}

export default Logo