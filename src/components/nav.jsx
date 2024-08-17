import React from 'react';
// import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className='bg-black p-4'>
            <div className='flex-item-center'>
                {/* <img src={logo} alt="Innozenta Club Logo"className='h-10 mr-4' /> */}
                {/* <span className='text-white text-2xl font-bold'>Innozenta club</span> */}
            </div>
            <ul className='flex justify-around text-white'>
                <li className='cursor-pointer hover:underline'><a href="#home">Home</a></li>
                <li className='cursor-pointer hover:underline'><a href="#rules">Rules</a></li> 
                <li className='cursor-pointer hover:underline'><a href="#announce">Announcement</a></li>
                <li className='cursor-pointer hover:underline'><a href="#registration">Registration</a></li> 
                <li className='cursor-pointer hover:underline'><a href="#contact">Contact</a></li> 
            </ul>
        </nav>
    );
};

export default Navbar;
