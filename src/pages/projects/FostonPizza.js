import React from 'react'

export default function FostonPizza() {
    return (
        <div className='flex flex-col w-full mx-2 my-auto justify-center items-center bg-white border border-slate-100 p-2 rounded-md'>
            <div className='flex space-x-8 py-2 h-full justify-around'>
                <div className='flex flex-col justify-center items-start space-y-3'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-center'>
                            <img src='https://user-images.githubusercontent.com/47282257/172509801-d6562062-d9c1-46cb-b784-401d94f0f5a7.png' className='object-fit h-64 w-full' alt='Matthew on a beach.' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-start mx-2'>
                        <div className='justify-center'>
                            <h1 className='text-4xl font-bold'>Foston Pizza</h1>
                        </div>
                        <div id='description' className='flex w-full justify-center'>
                            <p className='flex flex-wrap text-start'>Create, Read, Update and Delete ingredient data with this inventory management application.</p>
                        </div>
                    </div>
                    <div className='flex w-full border-b mb-4' />

                    <div className='inline-grid grid-cols-2 w-full space-y-2 p-3'>
                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Team:</p>
                            <div className='flex justify-start flex-wrap'>
                                <a href='https://github.com/ianaack'><p className='text-blue-500 font-medium mr-2'>Ian A.</p></a>
                                <a href='https://github.com/Deiondrae'><p className='text-blue-500 font-medium mr-2'>Deiondrae S.</p></a>
                                <a href='https://github.com/SwapnaMenon'><p className='text-blue-500 font-medium mr-2'>Swapna M.</p></a>
                                <a href='https://github.com/Rsmdo'><p className='text-blue-500 font-medium mr-2'>Royden S.</p></a>
                                <a href='https://github.com/project0204/reimagined-system'><p className='text-blue-500 font-medium mr-2'>Jasmine V.</p></a>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Status:</p>
                            <p className='font-medium'>Incomplete</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Stack:</p>
                            <div className='flex justify-start flex-wrap'>
                                <p className='text-sky-900 font-medium mr-2'>HTML, CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
