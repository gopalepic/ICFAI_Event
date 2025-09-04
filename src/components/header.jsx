import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover bg-dark-blue-600"
        src="/new.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="p-4">
          <h2 className="text-4xl sm:text-6xl lg:text-9xl text-blue-50 font-bold mb-4 sm:mb-8">
            <Typewriter
              words={[
  "Code the Future",
  "Hack Today, Lead Tomorrow",
  "Dream. Design. Disrupt.",
  "Ideas Into Impact",
  "Your Code, Your Legacy",
  "Redefine What’s Possible",
  "Think. Create. Elevate."
]}
              loop={0} // infinite
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={5000} // waits 30s before switching text
            />
          </h2>
        </div>

        {/* Button */}
        <button className="mt-4 sm:mt-8 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-lg rounded-full hover:bg-black transition">
          <a href="#registration">Register Now</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
