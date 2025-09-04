import React, { useState } from "react";
import { Menu, X } from "lucide-react";



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a1625] p-4">
      <div className="flex justify-between items-center">
        {/* Logo / Brand Name */}
        <h1 className="text-white text-xl font-bold">SIH Hackathon 2025</h1>

        {/* Mobile Button */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Nav Links */}
      <ul
        className={`flex flex-col sm:flex-row gap-4 md:gap-12 justify-center items-center transition-all duration-300 ${
          isOpen ? "mt-4" : "hidden sm:flex"
        }`}
      >
        <li>
          <a
            href="#home"
            className="text-white text-lg hover:bg-[#00008B] px-3 py-1 rounded-lg"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#rules"
            className="text-white text-lg hover:bg-[#00008B] px-3 py-1 rounded-lg"
          >
            Rules
          </a>
        </li>
        <li>
          <a
            href="#announce"
            className="text-white text-lg hover:bg-[#00008B] px-3 py-1 rounded-lg"
          >
            Announcements
          </a>
        </li>
        <li>
          <a
            href="#registration"
            className="text-white text-lg hover:bg-[#00008B] px-3 py-1 rounded-lg"
          >
            Register
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white text-lg hover:bg-[#00008B] px-3 py-1 rounded-lg"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
