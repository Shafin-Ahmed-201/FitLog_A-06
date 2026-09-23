import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='mt-7'>
        <div className='flex justify-between container mx-auto bg-gray-800/50 rounded-2xl'>
            <div className='p-10 space-y-5'>
                <p className='text-[#c2f800]'>WORKOUT LIBRARY</p>
                <h1 className='text-5xl text-white font-bold'>TRAIN WITH INTENT. LOG<br></br>
                   EVERY SET.</h1>
                <p className='text-gray-400'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <Link href={''}><button className='bg-[#c2f800] py-2 px-7 rounded-xl'>BROWSE WORKOUTS</button></Link>
                
            </div>
            <div className='p-10'>
                <Image src={BannerImg} alt="FitLog workout banner" />
            </div>
        </div>
        </div>
    );
};

export default Banner;