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
            <img className='h-screen w-screen object-center object-cover' src='/DSC06624.png' alt='banner'/>
            <div
                className="z-20 flex-col absolute bottom-16 left-0 flex w-full items-center justify-center gap-7 font-mono text-sm">
                    <span
                        className='text-white text-xl'>{`🇼‌🇪‌🇩‌🇩‌🇮‌🇳‌🇬‌ 🇮‌🇳‌🇻‌🇮‌🇹‌🇦‌🇹‌🇮‌🇴‌🇳‌`}</span>
            </div>
            <div
                className="z-20 flex-col absolute bottom-4 left-0 flex w-full items-center justify-center gap-7 font-mono text-sm">
                <span className={`${showLabel && 'hidden'} animate-bounce text-white text-2xl rotate-90`}>{`〰`}</span>
            </div>
        </div>
    )
}
