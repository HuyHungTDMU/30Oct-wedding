'use client';

import {useEffect, useState} from "react";

export default function Menu() {
    const [showLabel, setShowLabel] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowLabel(true);
            } else {
                setShowLabel(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`${showLabel ? 'bg-gradient-to-b from-[#FFFFF0] text-[#703B2B]' : 'bg-gradient-to-b from-zinc-200 text-white'} flex gap-7 z-30 h-[90px] uppercase text-base font-medium fixed left-0 top-0 w-full justify-center items-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl`}>
            <span>ABOUT</span>
            <span>STORY</span>
            <div className='px-7'>
                <img className={`${showLabel && 'hidden'} h-[70px] w-auto`} src='/name-2.png' alt='name'/>
                <img className={`${!showLabel && 'hidden'} h-[70px] w-auto`} src='/name-1.png' alt='name'/>
            </div>
            <span>GALLERY</span>
            <span>EVENT</span>
        </div>
    )
}
