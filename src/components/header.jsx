import React from "react";

const Header = () => {
    return(
        <div className="relative h-screen bg-color bg-center" style={{backgroundImage: "url('/public/bg-video.mp4')"}}>
            <div className="absolute inset-0 flex justify-center item-center">
                <button className="bg-white 5-- text-black px-6 py-3 text-lg rounded-full hover:bg-red-600">
                    Registration Now
                </button>
            </div>
        </div>


    );
};
export default Header;