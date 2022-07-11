import React from 'react';
import ski from './ski.jpeg';
import hike from './hike.jpeg';

export default function Home() {
    return (
        <div className='flex space-x-4 space-y-8 items-center justify-center h-screen'>
            <div className='flex flex-col mr-8'>
                <span className='h-40'></span>
                <div className='flex flex-col space-y-8 items-end'>
                    <h1 className='text-4xl'>Hi, I'm <b>Matthew Pryor</b></h1>
                    <a href='/about' className='w-1/2 bg-sky-800 p-2 px-3 rounded-full font-medium '>
                        <p className='text-white text-xl text-center'>About Me</p>
                    </a>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex space-x-1'>
                    <img src={ski} className='h-80 w-144 pb-16' alt='skiing' />
                    <img src={hike} className='h-80 w-144' alt='camping' />
                </div>
            </div>
        </div>
    );
};