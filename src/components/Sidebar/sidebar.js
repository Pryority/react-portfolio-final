import { React } from 'react';
import { Link } from "react-router-dom";

const Sidebar = ({ closeSideBar }) => {
    return (
        <div className="header-subcontainer hide">
            <nav className="burger-nav" >
                <ul id='ul' className='lg:flex lg:space-x-8 items-center list-none mr-4 text-end lg:text-center'>
                    <li>
                        <Link
                            to="/"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className='font-medium text-slate-900 hover:text-slate-700 text-center'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;
