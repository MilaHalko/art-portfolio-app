import React from 'react';
import {FaGithub, FaInstagram, FaPhone, FaTelegram} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {NavLink, useNavigate} from "react-router-dom";

const Menu = (props) => {
    const iconSize = 23;
    const ActivePageStyles = ({isActive}) => (isActive ? 'text-[#DB2777] font-bold underline' : '');

    return (
        <ul className={props.classes}>
            <li className={props.liStyles}>
                <NavLink to={`/`} className={ActivePageStyles}>Portfolio</NavLink>
            </li>
            <li className={props.liStyles}>
                <NavLink to={`/aboutMe`} className={ActivePageStyles}>About me</NavLink>
            </li>
            <div className='flex flex-row'>
            <li className={props.liStyles}>
                <a href='https://t.me/milka_deluxe' target='_blank' rel='noreferrer'>
                    <FaTelegram size={iconSize}/>
                </a>
            </li>
            <li className={props.liStyles}>
                <a href='https://www.instagram.com/milka_deluxe' target='_blank' rel='noreferrer'>
                    <FaInstagram size={iconSize}/>
                </a>
            </li>
            <li className={props.liStyles}>
                <a href='https://github.com/MilaHalko' target='_blank' rel='noreferrer'>
                    <FaGithub size={iconSize}/>
                </a>
            </li>
            <li className={props.liStyles}>
                <a href='https://milagalko1@gmail.com' target='_blank' rel='noreferrer'>
                    <HiOutlineMail size={iconSize}/>
                </a>
            </li>
            <li className={props.liStyles}>
                <a href='tel:+380983222527' target='_blank' rel='noreferrer'>
                    <FaPhone size={iconSize}/>
                </a>
            </li>
            </div>
        </ul>
    )
        ;
};

export default Menu;