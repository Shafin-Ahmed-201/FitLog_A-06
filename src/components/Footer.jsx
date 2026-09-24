import Image from 'next/image';
import React from 'react';
import FooterLogo from '../assets/footer.png'

const Footer = () => {
    return (
        <div>
            <footer className='h-30 flex bg-black'>
                <div className='md:flex justify-between items-center container mx-auto'>
                <div className='flex items-center justify-center md:justify-items-start'>
                    <Image src={FooterLogo} width='30' alt='footerlogo'></Image>
                    <p className='text-white font-bold text-xl'>FITLOG</p>
                </div>
                <p className='text-white text-center md:text-left'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
             </div>
            </footer>
        </div>
    );
};

export default Footer;