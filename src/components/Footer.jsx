import Image from 'next/image';
import React from 'react';
import FooterLogo from '../assets/footer.png'

const Footer = () => {
    return (
        <div>
            <footer className='h-30 flex bg-black'>
                <div className='flex justify-between items-center container mx-auto'>
                <div className='flex items-center'>
                    <Image src={FooterLogo} alt='footerlogo'></Image>
                    <p className='text-white font-bold text-xl'>FITLOG</p>
                </div>
                <p className='text-white'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
             </div>
            </footer>
        </div>
    );
};

export default Footer;