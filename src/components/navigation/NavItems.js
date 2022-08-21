import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function NavItems({ props }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            style={props}
            className='fixed bg-slate-50 top-0 left-0 w-4/5 h-full z-50 p-4 shadow rounded-r-lg border-r-2'
        >
            <ul id='ul' className='lg:flex lg:space-x-8 items-center list-none mr-4 text-end lg:text-center'>
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
        </div>
    )
}
