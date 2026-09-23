import Link from 'next/link';
import React from 'react';

const NothingHere = () => {
    return (
        <div className='text-center p-17 border border-dotted border-gray-500 rounded-xl'>
            <h2 className='text-3xl'>NOTHING HERE YET</h2>
            <p className='text-gray-400 mb-12'>Browse the library and add a lift to get today moving.</p>
            <Link className='bg-[#c2f800] px-7 py-2 text-black rounded-xl' href={'/'}>Go to workouts</Link>
        </div>
    );
};

export default NothingHere;