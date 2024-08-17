import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Head = () => {
  useEffect(() => {
    const races = document.querySelector(".races");
    let racesWidth = races.scrollWidth;
    let amountToScroll = racesWidth - window.innerWidth;

    const tween = gsap.to(races, {
      x: -amountToScroll,
      duration: 3,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: ".raceWrapper",
      start: "top 20%",
      end: "+=" + amountToScroll,
      pin: true,
      animation: tween,
      scrub: 1,
      
    });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen text-white bg-black">
      <div className="space-30vh lightBG"></div>
      <div className="raceWrapper overflow-hidden">
        <div className="races flex space-x-4 text-6xl text-blue-800 font-bold mb-10 whitespace-nowrap">
          <h2>THE ICFAI</h2>
          <h2>UNIVERSITY</h2>
          <h2>PRESENT ,</h2>
          <h2>HACKATHON</h2>
          <h2>2024</h2>
        </div>
      </div>
      <div className="space-20vh lightBG"></div>
    </div>
  );
};

export default Head;
