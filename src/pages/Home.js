import React from 'react';
import ski from '../../src/assets/images/ski.jpeg';
import hike from '../../src/assets/images/hike.jpeg';
import NavButtons from '../components/NavButtons';

export default function Home() {
    return (
        <div id='main-column' className='flex flex-col w-full'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col w-full p-8 md:flex-row space-y-8 items-end m-4 pt-8'>
                    <div className='flex flex-col w-full space-y-2'>
                        <h1 className='text-2xl text-end text-slate-300 md:text-start'>Hello world.</h1>
                        <h1 className='text-3xl text-end text-slate-900 font-medium md:text-start'>My name is <b>Matthew Pryor</b></h1>
                    </div>

                    <div className='flex w-2/3 justify-center gap-2 items-center md:flex-col'>
                        <NavButtons />
                        <a href='/about' className='w-full md:w-1/2 bg-gradient-to-br from-cyan-500/80 to-blue-500/80 hover:bg-gradient-to-b hover:from-blue-500 hover:to-cyan-500 border p-1 rounded-full font-medium '>
                            <p className='text-white text-md text-center'>About Me</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col p-4 gap-8'>
                <img src={ski} className='object-fill' alt='skiing' />
                <img src={hike} className='object-fill' alt='camping' />
            </div>
        </div>
    );
};