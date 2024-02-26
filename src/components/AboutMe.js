import React, {useState} from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {FaComments} from "react-icons/fa";
import {BsUnity} from "react-icons/bs";
import {SiAdobephotoshop, SiOpensea} from "react-icons/si";
import {AiFillInstagram} from "react-icons/ai";
import Layout from "./Layout";
import avatar from '../assets/arts/arts/self-portrait.JPG';

const AboutMe = () => {
    const [works, setWorks] = useState()
    const toggleWorks = () => setWorks(!works);
    const buttonNotActive = 'text-white bg-pink-600 border-pink-600';
    const buttonIsActive = 'text-[#8892b0] bg-white border-[#ccd6f6] pb-6 pr-0';

    return (
        <Layout>
            <div className='p-4 flex-1 flex h-screen justify-center'>
                <div className='max-w-[1200px] grid md:grid-cols-6 gap-4 sm:gap-10 items-center pb-[150px]'>
                    <div className='col-span-4'>
                        <p className='text-[#8892b0] mb-3'>Hi, my name is</p>

                        <div className='grid grid-cols-4 sm:grid-cols-5'>
                            <div className='col-span-3 sm:col-span-4  py-4 sm:p-0'>
                                <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                                    Mila Halko</h1>
                                <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                                    I'm an Artist.</h2>
                            </div>
                            <div className='col-span-1 md:hidden pr-4 flex justify-center items-center'>
                                {avatar && <img src={avatar} alt='Self portrait'
                                                className='visible md:invisible rounded-full'/>}
                            </div>
                        </div>

                        <p className='text-[#8892b0] py-4 max-w-[700px]'>
                            I'm a full-stack artist specializing in character design, creating
                            illustrations and games (and occasionally designing).</p>

                        <div className='flex flex-row items-center mt-6 sm:mt-10'>
                            {/*<div className='mr-6 sm:mr-10'>*/}
                            {/*    <button*/}
                            {/*        onClick={toggleWorks}*/}
                            {/*        className={`min-w-[120px] text-lg border-2 duration-300 pl:3 sm:pl-6 py-1 sm:py-3 flex items-center */}
                            {/*        ${!works ? buttonNotActive : buttonIsActive}`}>*/}
                            {/*        <h4 className={`duration-300 text-sm ml-2 ${works ? 'pt-3' : ''}`}>View Works</h4>*/}
                            {/*        <span className={works ? 'rotate-90 duration-300 flex' : 'duration-300 '}>*/}
                            {/*        <HiArrowNarrowRight className='ml-1 sm:ml-4'/>*/}
                            {/*        </span>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <div
                                className={`transition-all duration-300 flex flex-row w-full gap-3 sm:gap-[8%] ${!works ? 'opacity-100' : 'opacity-0 -translate-x-12'}`}>
                                <SiAdobephotoshop className='size-[25px] sm:size-[30px]' color='#35ACFF'/>
                                <BsUnity className='size-[25px] sm:size-[30px]' color='#525252'/>
                                <SiOpensea className='size-[25px] sm:size-[30px]' color='#2785E3'/>
                                <AiFillInstagram className='size-[25px] sm:size-[30px]' color='#ff3f79'/>
                                <FaComments className='size-[25px] sm:size-[30px]' color='#2CD46B'/>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-2 md:mr-8 mr-4'>
                        {avatar && <img src={avatar} alt='Self portrait'
                                        className='md:w-fit invisible md:visible rounded-full'/>}
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default AboutMe;