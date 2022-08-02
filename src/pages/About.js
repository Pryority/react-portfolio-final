import React from 'react';
import headshot from '../../src/assets/images/matt-headshot.jpg';

export default function About() {
    return (
        <div className='flex-col items-center justify-center h-full space-y-4 mx-8'>
            <div className='lg:flex space-x-2 justify-center items-center h-2/3 border border-slate-100 p-8 bg-slate-50 bg-opacity-25 rounded-md shadow-sm'>
                <div className='flex flex-col w-full'>
                    <img src={headshot} className='h-128 rounded-sm object-cover' alt='Matt on a beach.' />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col justify-center p-4'>
                        <h1 className='text-3xl font-medium mb-8 text-slate-400'>Hello world.</h1>
                        <p className='text-start flex-wrap w-full text-slate-900'>
                            It's nice to meet you. My name is Matthew and I am an aspiring <b>full-stack developer</b>.
                            <br /><br />
                            Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education. I am pursuing a career in web development because of my passion for technology, for media and art.
                            <br /><br />
                            In addition to learning about common programming languages, frameworks and libraries, I am eagerly learning about blockchain technology, smart contracts, NFTs and cryptocurrencies in general.
                        </p>
                    </div>
                    <div className='flex w-full space-x-4 justify-end md:justify-center sm:justify-center'>
                        <a href='https://github.com/Pryority'>
                            <div
                                className="flex bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded mt-8 outline-none focus:outline-none ease-linear transition-all duration-150 border shadow-sm text-center"
                                type="submit"
                            >
                                View GitHub
                            </div>
                        </a>
                        <a href='/resume'>
                            <div
                                className="flex bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded mt-8 outline-none focus:outline-none ease-linear transition-all duration-150 border shadow-sm text-center"
                                type="submit"
                            >
                                View Résumé
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex-col justify-center items-center h-3/4 border border-slate-100 p-8 bg-slate-50 bg-opacity-25 rounded-md shadow-sm'>

                <div className='flex w-full items-center justify-center'>
                    <h1 className='text-3xl text-center font-bold mb-8'>🛠️ My Favorite Tools</h1>
                </div>


                <div className='flex-col w-full items-center space-y-4'>
                    <div className='flex-col space-y-2'>
                        <div className='flex w-full items-center justify-center'>
                            <h1>🔢 Programming Languages</h1>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <a href="https://github.com/Pryority">
                                <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?logo=javascript&logoColor=black" /></a>
                            <a href="https://github.com/Pryority">
                                <img alt="SQL" src="https://img.shields.io/badge/MySQL%20-%2314354C.svg?logo=mysql&logoColor=white" />
                            </a>
                            <a href="https://github.com/Pryority">
                                <img alt="Solidity" src="https://img.shields.io/badge/Solidity%20-%2314354C.svg?logo=solidity&logoColor=white" />
                            </a>
                        </div>
                    </div>

                    <div className='flex-col space-y-2'>
                        <div className='flex w-full items-center justify-center'>
                            <h1>🧰 Frameworks and Libraries</h1>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <a href="https://github.com/Pryority"><img alt="React" src="https://img.shields.io/badge/React%20-%23D00000.svg?style=flat&logo=React&logoColor=white" /></a>
                            <a href="https://github.com/Pryority"><img alt="Express" src="https://img.shields.io/badge/Express%20-%23013243.svg?style=flat&logo=Express&logoColor=white" /></a>
                            <a href="https://github.com/Pryority"><img alt="Tailwindcss" src="https://img.shields.io/badge/tailwind%20-%2314354C.svg?style=flat&logo=tailwindcss&logoColor=white" /></a>
                            <a href="https://github.com/Pryority"><img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap%20-%23150458.svg?style=flat&logo=Bootstrap&logoColor=white" /></a>
                        </div>
                    </div>

                    <div className='flex-col space-y-2'>
                        <div className='flex w-full items-center justify-center'>
                            <h1>🗄️ Databases and Cloud Hosting</h1>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <a href="https://github.com/Pryority"><img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-%23327FC7.svg?style=flat&logo=github&logoColor=white" /></a>
                            <a href="https://github.com/Pryority"><img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white" /></a>
                            <a href="https://github.com/Pryority"><img alt="Firebase" src="https://img.shields.io/badge/Firebase-%23FF6F00.svg?style=flat&logo=firebase&logoColor=white" /></a>
                        </div>
                    </div>

                    <div className='flex-col space-y-2'>
                        <div className='flex w-full items-center justify-center'>
                            <h1>💻 Software and Tools</h1>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <a href="https://github.com/Pryority"><img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=flat&logo=visual-studio-code&logoColor=white" /></a>
                            <a href="https://github.com/Pryority"><img alt="Git" src="https://img.shields.io/badge/Git%20-%23F05033.svg?style=flat&logo=git&logoColor=white" /></a>
                            <a href="https://github.com/Pryority"><img alt="Insomnia" src="https://img.shields.io/badge/Insomnia-black?style=flat&logo=insomnia&logoColor=5849BE" /></a>
                            <a href="https://github.com/Pryority"><img alt="Stack Overflow" src="https://img.shields.io/badge/-Stack%20Overflow-FE7A16.svg?style=flat&logo=stack-overflow&logoColor=white" /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};