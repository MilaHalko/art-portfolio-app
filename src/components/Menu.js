import React from 'react';
import {FaGithub, FaInstagram, FaPhone, FaTelegram} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {Link} from "@react-email/link";

const Menu = (props) => {
    const iconSize = 23;
    return (
        <ul className={props.classes}>
            <li className={props.liStyles}>Portfolio</li>
            <li className={props.liStyles}>About me</li>
            <li>
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
                <Link href='https://milagalko1@gmail.com' target='_blank' rel='noreferrer'>
                    <HiOutlineMail size={iconSize}/>
                </Link>

            </li>
            <li className={props.liStyles}>
                <a href='tel:+380983222527' target='_blank' rel='noreferrer'>
                    <FaPhone size={iconSize}/>
                </a>
            </li>
        </ul>
    )
        ;
};

export default Menu;