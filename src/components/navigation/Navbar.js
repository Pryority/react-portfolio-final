import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import mp from '../../../src/assets/images/MP.png'

export default class Nav extends Component {
    render() {
        return (
            <nav id='navbar' className='flex items-center p-4 px-8' >
                <div className='flex w-full space-x-2 justify-start items-center '>
                    <img src={mp} className='w-24' alt='Logo' />
                    <img src="https://readme-typing-svg.herokuapp.com?lines=Full-Stack+Web+Developer;Outdoor+Adventure+Enthusiast;Freelancer;Seeking+Employment;Friendly;Always%20Learning&start=true&width=380&height=45" className='mt-4 pl-4' alt='About me typed' />
                </div>

                <ul className='lg:flex lg:space-x-8 items-center list-none mr-4 text-end lg:text-center'>
                    <li>
                        <NavLink
                            to="/"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav >
        );
    }
}