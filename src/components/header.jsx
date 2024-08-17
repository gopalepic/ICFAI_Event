import React from "react";

const Header = () => {
  return (

    <div className="relative h-screen overflow-hidden">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/bg22.mp4"
      autoPlay
      loop
      muted
    />
    
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <div className="p-8">
        <h2 className="text-9xl text-blue-200 font-bold mb-8">The Idea That change </h2>
        <p className="text-6xl text-blue-200 font-bold mb-4">Your Life </p>
      </div>
      <button className="mt-8 bg-blue-600 text-white px-6 py-3 text-lg rounded-full hover:bg-black">
        <a href="#registration">
          Register Now
        </a>
      </button>
    </div>
  </div>
  
  );
};

export default Header;
