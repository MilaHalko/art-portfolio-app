import React, {useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import Menu from "./Menu";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);
    return (
        <div className='w-full h-[55px] flex justify-between items-center px-4 mt-[45px]'>
            <div>
                <h1 className='font-bold text-3xl'>MILA HALKO</h1>
                <h2 className='font-thin text-lg'>@milka_deluxe</h2>
            </div>

            <Menu classes='hidden md:flex'/>

            {/*    Mobile    */}
            <div onClick={toggleNav} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            <Menu classes={!nav ? 'hidden' : 'bg-white absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center md:hidden'}
                  liStyles='py-6 text-xl sm:text-4xl'/>
        </div>
    );
};

export default Navbar;