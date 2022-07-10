import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav id='navbar' className='flex items-center p-4 px-8' >
                <div className='flex w-full space-x-2 justify-start items-center'>
                    <img src='/MP.png' className='w-24' alt='Logo' />
                </div>

                <ul className='flex space-x-8 items-center list-none mr-4'>
                    <li>
                        <NavLink to="/" className='font-medium'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='font-medium'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className='font-medium'>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className='font-medium'>Contact</NavLink>
                    </li>
                </ul>
            </nav >
        );
    }
}