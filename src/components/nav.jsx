import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-blue-500 p-4'>
            <ul className='flex justify-around text-white'>
                <li className='cursor-pointer hover:underline'>Home</li>
                <li className='cursor-pointer hover:underline'>Rules</li>
                <li className='cursor-pointer hover:underline'>Announcement</li>
                <li className='cursor-pointer hover:underline'>Registration</li>

            </ul>
        </nav>


    );
};
export default Navbar;