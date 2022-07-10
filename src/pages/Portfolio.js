import React from 'react';
import Athleague from './projects/Athleague';
import FostonPizza from './projects/FostonPizza';
import Trekker from './projects/Trekker';

export default function Portfolio() {
    return (
        <div className='flex items-center justify-center h-screen mb-8'>
            <div className='flex mx-2 h-full'>
                <Athleague />
                <Trekker />
                <FostonPizza />
            </div>
        </div>
    );
}