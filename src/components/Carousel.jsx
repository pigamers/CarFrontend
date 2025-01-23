import React, { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

export default function Carousel({ car }) {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === 4 ? 0 : current + 1);
    };

    const prev = () => {
        setCurrent(current === 0 ? 4 : current - 1);
    };

    return (
        <div className="relative w-full mx-auto">
            <div className="relative h-[400px] flex justify-center items-center">
                {/* Left Arrow */}
                <button
                    className="absolute left-2 z-10 p-2 rounded-full bg-black/50 text-white cursor-pointer hover:bg-black/75 transition-all duration-300"
                    onClick={prev}
                >
                    <MdArrowBackIos className="text-2xl" />
                </button>

                {/* Image 1 */}
                <div className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                    ${current === 0 ? 'opacity-100' : 'opacity-0'}`}
                >
                    {current === 0 && (
                        <img
                            src={car.FrontView}
                            alt="Car image 1"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    )}
                </div>

                {/* Image 2 */}
                <div className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                    ${current === 1 ? 'opacity-100' : 'opacity-0'}`}
                >
                    {current === 1 && (
                        <img
                            src={car.BackView}
                            alt="Car image 2"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    )}
                </div>

                {/* Image 3 */}
                <div className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                    ${current === 2 ? 'opacity-100' : 'opacity-0'}`}
                >
                    {current === 2 && (
                        <img
                            src={car.RearSideView1}
                            alt="Car image 3"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    )}
                </div>

                {/* Image 4 */}
                <div className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                    ${current === 3 ? 'opacity-100' : 'opacity-0'}`}
                >
                    {current === 3 && (
                        <img
                            src={car.RearSideView2}
                            alt="Car image 4"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    )}
                </div>

                {/* Video */}
                <div className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                    ${current === 4 ? 'opacity-100' : 'opacity-0'}`}
                >
                    {current === 4 && (
                        <video
                            controls
                            className="w-full h-full object-cover rounded-lg"
                        >
                            <source src={car.ExteriorVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute right-2 z-10 p-2 rounded-full bg-black/50 text-white cursor-pointer hover:bg-black/75 transition-all duration-300"
                    onClick={next}
                >
                    <MdArrowForwardIos className="text-2xl" />
                </button>
            </div>
        </div>
    );
}
