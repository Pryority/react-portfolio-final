import React from 'react';
import ContactForm from '../components/ContactForm';
import headshot from '../../src/assets/images/matt-headshot.jpg'

export default function Contact() {

    return (
        <div className='flex w-full flex-col items-end py-8'>
            <div className='flex w-full flex-col  p-8 bg-white rounded-md'>
                <div className='p-2 flex justify-center'>
                    <h1 className='text-4xl font-medium'>Contact Me</h1>
                </div>
                <div className='flex w-full  h-1 rounded-full mb-4' />
                <div className='flex space-x-8 justify-around items-center'>
                    <ContactForm />
                    <div className='flex p-8'>
                        <img src={headshot} className='h-80 rounded-sm object-cover' alt='Matt on beach' />
                    </div>
                </div>
                <div className='flex flex-col w-full space-y-4 justify-center items-center'>
                    <div className='flex w-2/3 space-x-2'>
                        <p className='font-medium'>Email:</p>
                        <p>matthewapryor@gmail.com</p>
                    </div>
                    <div className='flex w-2/3 space-x-2'>
                        <p className='font-medium'>Phone:</p>
                        <p>647-705-7708</p>
                    </div>
                </div>
            </div>
        </div>
    );
};