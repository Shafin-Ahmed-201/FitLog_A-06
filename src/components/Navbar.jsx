import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='py-3 sticky z-50 top-0 bg-black'>
            <nav className='flex justify-between container mx-auto'>
                <div className='flex'>
                    <Image src={Logo} alt='navlogo'></Image>
                    <p className='text-white font-bold text-xl'>FITLOG</p>
                </div>
                <div className='flex gap-5 text-white'>
                    <Link href={'/'}>Workouts</Link>
                    <Link href={''}>My Plan</Link>
                </div>
                <div className='flex gap-3 text-white'>
                    <div className='flex gap-1'>
                        <Link href={''}>Plan</Link>
                        <p className='bg-[#c2f800] text-black p-0.5 rounded-[40%]'>0</p>
                    </div>
                    <div className='flex gap-1'>
                        <Link href={''}>Saved</Link>
                        <p className='bg-gray-600 p-0.5 rounded-[40%]'>0</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;