import React from 'react';

export default function About() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex space-x-2 justify-center items-center w-1/2 border border-slate-100 p-8 bg-slate-50 bg-opacity-25 rounded-md'>
                <div className='flex flex-col w-full'>
                    <img src='../../matt-headshot.jpg' className='h-64 rounded-sm object-cover' alt='Matt on a beach.' />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col justify-center p-4'>
                        <h1 className='text-3xl font-medium mb-3'>Hello world.</h1>
                        <p className='text-start flex-wrap w-full'>My name is Matthew and I am an aspiring full-stack developer.<br /><br /> Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education. I am pursueing a career in web development because of my passion for technology, for media and art.</p>
                    </div>
                    <div className='flex w-full justify-end md:justify-center sm:justify-center'>
                        <button
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded mt-4 outline-none focus:outline-none w-1/2 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            View resume
                        </button>
                    </div>
                </div>



            </div>

        </div >
    );
};