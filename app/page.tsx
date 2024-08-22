"use client";
import { Metadata } from 'next';
import { motion } from 'framer-motion';
//
// export const metadata: Metadata = {
//   title: 'Portfolio | Arnaud TANGUY',
// };

export default function Page() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
      <motion.div className="w-1/2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h1 className="font-bold text-3xl text-center m-4">Portfolio</h1>
      </motion.div>
      </div>
    </>
  );
}
