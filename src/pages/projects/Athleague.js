import React from 'react'

export default function Athleague() {
    return (
        <div className='flex flex-col w-full mx-2 my-auto justify-center items-center bg-white border border-slate-100 p-2 rounded-md'>
            <div className='flex space-x-8 py-2 h-full justify-around'>
                <div className='flex flex-col justify-center items-start space-y-3'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-center'>
                            <img src='https://github.com/Pryority/Athleague/raw/main/assets/images/thumbnail.png' className='object-fit h-64 w-full rounded-sm' alt='Athleague demo.' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-start mx-2'>
                        <div className='justify-center'>
                            <h1 className='text-4xl font-bold'>Athleague</h1>
                        </div>
                        <div id='description' className='flex w-full justify-center'>
                            <p className='flex flex-wrap text-start'>A mixed reality physical activity game.</p>
                        </div>
                    </div>
                    <div className='flex w-full border-b mb-4' />

                    <div className='inline-grid grid-cols-2 w-full space-y-2 p-3'>
                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Team:</p>
                            <div className='flex justify-start flex-wrap'>
                                <p className='text-blue-500 font-medium mr-2'>Solo</p>
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
