import React from 'react';
import Projects from '../assets/json/projects.json'

export default function Portfolio() {
    return (
        <div className='flex items-center justify-center mb-8 w-full'>
            <div className='flex flex-col md:grid gap-4 grid-cols-2  h-full w-5/6'>
                {Projects.map(project => {
                    return (
                        <a key={project.id} href={project.deployedUrl}>
                            <div className='flex flex-col h-full w-full justify-center items-center bg-white border border-slate-100 p-2 rounded-md'>
                                <div className='flex space-x-8 py-2 h-full justify-around'>
                                    <div className='flex flex-col justify-center items-start space-y-3'>
                                        <div className='flex flex-col w-full'>
                                            <div className='flex w-full justify-center'>
                                                <img src={project.imageUrl} className='object-fit w-full rounded-sm' alt='Space Jetters demo.' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start mx-2'>
                                            <div className='justify-center'>
                                                <h1 className='text-4xl font-bold'>{project.title}</h1>
                                            </div>
                                            <div id='description' className='flex w-full justify-center'>
                                                <p className='flex flex-wrap text-start'>{project.description}</p>
                                            </div>
                                        </div>
                                        <div className='flex w-full border-b mb-4' />

                                        <div className='inline-grid grid-cols-2 w-full space-y-2 p-3'>
                                            <div className='flex flex-col'>
                                                <p className='text-sm font-light'>Team:</p>
                                                <div className='flex justify-start flex-wrap w-full'>
                                                    {project.team.map((member, i) => {
                                                        return (
                                                            <p key={i} className='text-blue-500 font-medium mr-2'>{member.member}</p>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='text-sm font-light'>Status:</p>
                                                <p className='font-medium'>{project.status}</p>
                                            </div>
                                            <div className='flex flex-col'>
                                                <p className='text-sm font-light'>Stack:</p>
                                                <div className='flex justify-start flex-wrap'>
                                                    {project.stack.map((stack, i) => {
                                                        return (
                                                            <p key={i} className='text-sky-900 font-medium mr-2'>{stack.tech}</p>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}