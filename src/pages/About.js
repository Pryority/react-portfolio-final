import React from 'react';
import headshot from '../../src/assets/images/matt-headshot.jpg';

export default function About() {
    return (
        <div className='flex flex-col w-full gap-8 justify-center items-center h-full '>

            <div className='flex flex-col h-full md:flex-row items-center'>
                <div className='flex flex-col md:w-5/6 justify-center p-8'>
                    <h1 className='text-3xl font-medium mb-8 text-slate-400 mt-4'>Hello world.</h1>
                    <p className='text-start flex-wrap w-full text-slate-900'>
                        It's nice to meet you. My name is Matthew and I am an aspiring <b>full-stack developer</b>.
                        <br /><br />
                        Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education. I am pursuing a career in web development because of my passion for technology, for media and art. In my free time, you can find me flying my DJI drone, tinkering with software ideas or creating digital art.
                        <br /><br />
                        In addition to learning about common programming languages, frameworks and libraries, I am eagerly learning about blockchain technology, smart contracts, NFTs and cryptocurrencies in general.
                    </p>
                </div>
                <div className='flex flex-col h-full w-full px-8 pt-8 lg:scale-75'>
                    <img src={headshot} className='object-fill rounded-sm' alt='Matt on a beach.' />
                </div>
            </div>
            <div className='flex w-full px-8 justify-around mt-8 lg:mt-0 lg:w-1/2'>
                <a href='https://github.com/Pryority'>
                    <div
                        className="flex w-full bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded border shadow-sm text-center justify-around items-center space-x-2"
                        type="submit"
                    >
                        <p>My GitHub</p>
                        <a href='https://github.com/Pryority'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-white'>
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>

                </a>
                <a href='/resume'>
                    <div
                        className="flex w-full bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded border shadow-sm text-center justify-around items-center space-x-2"
                        type="submit"
                    >
                        <p>My Resume</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-white'>
                            <path xmlns="http://www.w3.org/2000/svg" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                        </svg>
                    </div>
                </a>
            </div>
            <div className='flex-col justify-center items-center h-3/4 mt-16 mb-32 bg-slate-50 bg-opacity-25 rounded-md'>

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