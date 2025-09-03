import React from "react";


const Header = () => {
  return (
    
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover bg-dark-blue-600"
       src="/new.mp4"
        autoPlay
        loop
        muted
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="p-4">
          <h2 className="text-4xl sm:text-6xl lg:text-9xl text-blue-50 font-bold mb-4 sm:mb-8">Let's Build Something</h2>
          <p className="text-2xl sm:text-4xl lg:text-6xl text-blue-50 font-bold mb-4">Innovative</p>
        </div>
        <button className="mt-4 sm:mt-8 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-lg rounded-full hover:bg-black">
          <a href="#registration">
            Register Now
          </a>
        </button>
      </div>
    </div>
   
  );
};

export default Header;
