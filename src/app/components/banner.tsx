import {useEffect, useState} from "react";

export default function Banner() {
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
        <div className='relative'>
            <img className='hidden sm:block h-screen w-screen object-center object-cover' src='/DSC06624-2.jpg'
                 alt='banner'/>
            <img className='sm:hidden h-screen w-screen object-center object-cover' src='/DSC06624-11.jpg'
                 alt='banner'/>
            <div
                className="z-20 flex-col absolute bottom-16 left-0 flex w-full items-center justify-center gap-7 font-mono text-sm">
                    <span
                        className='sm:block hidden text-white text-center text-xl'>{`🇼‌🇪‌🇩‌🇩‌🇮‌🇳‌🇬‌ 🇮‌🇳‌🇻‌🇮‌🇹‌🇦‌🇹‌🇮‌🇴‌🇳‌`}</span>
                <span
                    className='sm:hidden text-white text-center text-xl'>{`🇼‌🇪‌🇩‌🇩‌🇮‌🇳‌🇬‌`}<br/>{`🇮‌🇳‌🇻‌🇮‌🇹‌🇦‌🇹‌🇮‌🇴‌🇳‌`}</span>
            </div>
            <div
                className="z-20 flex-col absolute bottom-4 left-0 flex w-full items-center justify-center gap-7 font-mono text-sm">
                <span className={`${showLabel && 'hidden'} animate-bounce text-white text-2xl`}>{`〰`}</span>
            </div>
        </div>
    )
}
