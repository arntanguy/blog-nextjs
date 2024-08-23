import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-64 border-t-2 border-solid border-gray-300">
      <div className="flex justify-center items-center py-8">
      <span>&copy; {new Date().getFullYear()} Arnaud TANGUY. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
