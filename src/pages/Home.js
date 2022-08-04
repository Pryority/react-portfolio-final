import React from 'react';
import ski from '../../src/assets/images/ski.jpeg';
import hike from '../../src/assets/images/hike.jpeg';
import NavButtons from '../components/NavButtons';

export default function Home() {
    return (
        <div className='flex flex-col md:flex space-y-8 items-center justify-start min-h-full md:h-screen'>
            <div className='flex flex-col md:flex-row justify-center items-center w-full'>
                <div className='flex flex-col space-y-8 items-end m-4'>
                    <div className='flex-col w-full space-y-2'>
                        <h1 className='text-2xl text-end text-slate-400'>Hello world.</h1>
                        <h1 className='text-3xl text-end text-slate-900 font-medium'>My name is <b>Matthew Pryor</b></h1>
                    </div>

                    <div className='flex justify-center space-x-4 items-center w-full'>
                        <NavButtons />
                        <a href='/about' className='w-full bg-sky-800 hover:bg-sky-700 border p-2 px-6 rounded-full font-medium '>
                            <p className='text-white text-xl text-center'>About Me</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-2'>
                <img src={ski} className='object-contain md:h-80' alt='skiing' />
                <img src={hike} className='object-contain md:h-80' alt='camping' />
            </div>


        </div>
    );
};