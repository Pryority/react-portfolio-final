import React from 'react'

export default function Resume() {
    return (
        <div className='flex w-full justify-center'>
            <div className='flex flex-col items-center justify-center w-1/2 h-screen'>
                <div className='flex space-x-2 justify-center h-4/5 items-center w-full border border-slate-100 p-2 bg-slate-50 bg-opacity-25 rounded-md'>

                    <embed src="mp-resume-2022.pdf#toolbar=0" className='overflow flex w-full h-full' />
                </div>
                <div className='flex w-full justify-center md:justify-center sm:justify-center mb-4'>
                    <a href='/resume'>
                        <div
                            className="flex bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded mt-4 outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Contact
                        </div>
                    </a>
                </div>
            </div >
        </div>
    );
}
