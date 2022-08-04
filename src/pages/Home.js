import React from 'react';
import ski from '../../src/assets/images/ski.jpeg';
import hike from '../../src/assets/images/hike.jpeg';
import NavButtons from '../components/NavButtons';

export default function Home() {
    return (
        <div className='lg:flex space-x-4 space-y-8 items-center justify-center h-screen'>
            <div className='lg:flex flex-col mr-8'>
                <span className='h-40'></span>
                <div className='lg:flex flex-col space-y-8 items-end'>
                    <div className='flex-col space-y-2'>
                        <h1 className='text-4xl text-end text-slate-400'>Hello world.</h1>
                        <h1 className='text-4xl text-end text-slate-900 font-medium'>My name is <b>Matthew Pryor</b></h1>
                    </div>

                    <div className='flex justify-center space-x-4 items-center'>
                        <NavButtons />
                        <a href='/about' className='w-full bg-sky-800 p-2 px-6 rounded-full font-medium '>
                            <p className='text-white text-xl text-center'>About Me</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='lg:flex flex-col'>
                <div className='lg:flex space-x-1'>
                    <img src={ski} className='h-80 w-144' alt='skiing' />
                    <img src={hike} className='h-80 w-144' alt='camping' />
                </div>
            </div>
        </div>
    );
};