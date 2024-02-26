import React, {useState} from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {FaComments} from "react-icons/fa";
import {BsUnity} from "react-icons/bs";
import {SiAdobephotoshop, SiOpensea} from "react-icons/si";
import {AiFillInstagram} from "react-icons/ai";

const AboutMe = () => {
    const [works, setWorks] = useState()
    const toggleWorks = () => setWorks(!works);
    const buttonNotActive = 'text-white bg-pink-600 border-pink-600';
    const buttonIsActive = 'text-[#8892b0] bg-white border-[#ccd6f6] pb-6 pr-0';

    return (
        <div name='aboutMe' className='w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-full h-full ml-4 md:ml-8'>
                <div className='max-w-[1200px] w-full grid md:grid-cols-6 gap-4 sm:gap-10'>

                    <div className='col-span-4'>
                        <p className='text-[#8892b0] pl-1 mb-3'>
                            Hi, my name is</p>

                        <div className='grid grid-cols-5'>
                            <div className='col-span-4'>
                                <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                                    Mila Halko</h1>
                                <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                                    I'm an Artist.</h2>
                            </div>
                            <div className='col-span-1 md:hidden'>
                                <img src='/images/arts/arts/self-portrait.JPG' alt='Self portrait'
                                     className='visible md:invisible rounded-full'/>
                            </div>
                        </div>

                        <p className='text-[#8892b0] pl-1 py-4 max-w-[700px]'>
                            I'm a full-stack artist specializing in character design, creating
                            illustrations and games (and occasionally designing).</p>

                        <div className='flex flex-row items-center mt-10'>
                            <div className='mr-10'>
                                <button
                                    onClick={toggleWorks}
                                    className={`min-w-[200px] text-lg border-2 duration-300 pl-6 py-3 my-2 flex items-center 
                                    ${!works ? buttonNotActive : buttonIsActive}`}>
                                    <h4 className={works ? 'pt-3 duration-300' : 'duration-300'}>View Works</h4>
                                    <span className={works ? 'rotate-90 duration-300 flex' : 'duration-300 '}>
                                    <HiArrowNarrowRight className='ml-4'/>
                                </span>
                                </button>
                            </div>
                            <div className={`transition-all duration-300 flex flex-row w-full gap-[8%] ${!works ? 'opacity-100' : 'opacity-0 -translate-x-12'}`}>
                            <SiAdobephotoshop size={30} color='#35ACFF'/>
                            <BsUnity size={30} color='#525252'/>
                            <SiOpensea size={30} color='#2785E3'/>
                            <AiFillInstagram size={30} color='#ff3f79'/>
                            <FaComments size={30} color='#2CD46B'/>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2 md:mr-8 mr-4'>
                        <img src='/images/arts/arts/self-portrait.JPG' alt='Self portrait'
                             className='md:w-fit invisible md:visible rounded-full'/>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
};

export default AboutMe;