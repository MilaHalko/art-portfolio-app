import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";

const AboutMe = () => {
    return (
        <div name='aboutMe' className='w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='flex flex-row md:flex-col'>
                    <div className='md:flex-2'>
                        <p className='text-[#8892b0]'>
                            Hi, my name is</p>
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                            Mila Halko</h1>
                        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>
                            I'm an Artist.</h2>
                        <p className='text-[#8892b0] py-4 max-w-[700px]'>
                            I'm a full-stack artist specializing in character design, creating
                            illustrations and games (and occasionally designing).</p>
                        <div>
                            <button
                                className='group border-[#ccd6f6] border-2 px-8 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                                See My Works
                                <span className='group-hover:rotate-90 duration-300'>
                         <HiArrowNarrowRight className='ml-4'/>
                        </span>
                            </button>
                        </div>
                    </div>
                    <div className='md:flex-1'>
                        {/*<img rel=/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;