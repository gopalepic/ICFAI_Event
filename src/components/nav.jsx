import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-center items-center">
      <ul className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <li><a href="#home" className="text-white text-lg">Home</a></li>
        <li><a href="#rules" className="text-white text-lg">Rules</a></li>
        <li><a href="#task" className="text-white text-lg">Task</a></li>
        <li><a href="#announce" className="text-white text-lg">Announcements</a></li>
        <li><a href="#registration" className="text-white text-lg">Register</a></li>
        <li><a href="#contact" className='text-white text-lg'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
