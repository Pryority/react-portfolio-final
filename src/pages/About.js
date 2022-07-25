import React from 'react';
import headshot from '../../src/assets/images/matt-headshot.jpg';

export default function About() {
    return (
        <div className='flex w-full items-center justify-center h-screen'>
            <div className='flex space-x-2 justify-center items-center w-3/4 h-3/4 border border-slate-100 p-8 bg-slate-50 bg-opacity-25 rounded-md shadow-sm'>
                <div className='flex flex-col w-full'>
                    <img src={headshot} className='h-128 rounded-sm object-cover' alt='Matt on a beach.' />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col justify-center p-4'>
                        <h1 className='text-3xl font-medium mb-8 text-slate-400'>Hello world.</h1>
                        <p className='text-start flex-wrap w-full text-slate-900'>
                            It's nice to meet you. My name is Matthew and I am an aspiring <b>full-stack developer</b>.
                            <br /><br />
                            Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education. I am pursueing a career in web development because of my passion for technology, for media and art.
                            <br /><br />
                            In addition to laerning about common programming languages, frameworks and libraries, I am eagerly learning about blockchain technology, smart contracts, NFTs and cryptocurrencies in general.
                        </p>
                    </div>
                    <div className='flex w-full space-x-4 justify-end md:justify-center sm:justify-center'>
                        <a href='https://github.com/Pryority'>
                            <div
                                className="flex bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded mt-8 outline-none focus:outline-none ease-linear transition-all duration-150 border shadow-sm"
                                type="submit"
                            >
                                View GitHub
                            </div>
                        </a>
                        <a href='/resume'>
                            <div
                                className="flex bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded mt-8 outline-none focus:outline-none ease-linear transition-all duration-150 border shadow-sm"
                                type="submit"
                            >
                                View Résumé
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};