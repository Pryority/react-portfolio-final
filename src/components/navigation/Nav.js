import React, { useState, Component, useTransition } from 'react';
import { NavLink } from "react-router-dom";
import mp from '../../../src/assets/images/MP.png'
import { useSpring, animated } from 'react-spring'

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const props = useSpring({
        left: showMenu ? window.innerWidth - 300 : window.innerWidth,
        position: "absolute",
        top: 0,
        backgroundColor: "#806290",
        height: "100vh",
        width: "300px"
    });

    return (
        <nav id='navbar' className='flex flex-col w-full md:flex-row md:items-center' >
            <div className='flex w-full justify-center items-center mt-2'>
                <div className='flex ml-8'>
                    <img src={mp} className='h-16 object-fill' alt='Logo' />
                </div>
                <div className='flex w-4/5 items-start justify-start'>
                    <img src="https://readme-typing-svg.herokuapp.com?lines=Full-Stack+Web+Developer;Outdoor+Adventure+Enthusiast;Freelancer;Seeking+Employment;Friendly;Always%20Learning&start=true&width=380&height=45" className='mt-4 pl-4' alt='About me typed' />
                </div>
            </div>

            <ul id='ul' className='flex flex-wrap gap-8 w-full justify-center mt-4'>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => setShowMenu(false)}
                        className='font-medium text-slate-900 hover:text-slate-700 text-center'
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        onClick={() => setShowMenu(false)}
                        className='font-medium text-slate-900 hover:text-slate-700 text-center'
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        onClick={() => setShowMenu(false)}
                        className='font-medium text-slate-900 hover:text-slate-700 text-center'
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        onClick={() => setShowMenu(false)}
                        className='font-medium text-slate-900 hover:text-slate-700 text-center'
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>

        </nav >
    );
}