import {useEffect, useState} from "react";

export default function Menu({scrollToBanner, scrollToStory, scrollToAbout, scrollToGallery, scrollToEvent}: {
    scrollToBanner: () => void,
    scrollToStory: () => void,
    scrollToAbout: () => void,
    scrollToGallery: () => void,
    scrollToEvent: () => void
}) {
    const [isScroll, setIsScroll] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onOpenMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div
            className={`${isScroll ? 'bg-gradient-to-b from-[#FFFFF0] text-[#703B2B]' : 'bg-gradient-to-b from-zinc-200 text-white'} flex flex-col sm:flex-row gap-2 sm:gap-7 z-30 ${showMenu ? 'h-[260px]' : `h-[85px]`} sm:h-[85px] uppercase text-base font-medium fixed left-0 top-0 w-full justify-between px-2 sm:justify-center sm:items-center items-start border-b border-gray-300 pb-6 pt-2 sm:pt-8 backdrop-blur-2xl`}>
            <span className='hover:text-[#703B2B] hidden sm:block cursor-pointer' onClick={scrollToAbout}>ABOUT</span>
            <span className='hover:text-[#703B2B] hidden sm:block cursor-pointer' onClick={scrollToStory}>STORY</span>
            <div className='hover:text-[#703B2B] flex justify-between sm:w-auto w-full'>
                <img className={`${isScroll && 'hidden'} h-[70px] w-auto cursor-pointer`} src='/name-2.png'
                     alt='name' onClick={scrollToBanner}/>
                <img className={`${!isScroll && 'hidden'} h-[70px] w-auto cursor-pointer`} src='/name-1.png'
                     alt='name' onClick={scrollToBanner}/>
                <div className='sm:hidden flex items-center'>
                     <span
                         className='border-white border px-2 rounded cursor-pointer'
                         onClick={onOpenMenu}>☰</span>
                </div>

            </div>
            <span className='hover:text-[#703B2B] hidden sm:block cursor-pointer'
                  onClick={scrollToGallery}>GALLERY</span>
            <span className='hover:text-[#703B2B] hidden sm:block cursor-pointer' onClick={scrollToEvent}>EVENT</span>
            <div
                className={`${!showMenu && 'hidden'} sm:hidden text-center w-full mb-2 flex flex-col gap-4 items-center justify-center`}>
                <span className='hover:text-[#703B2B] cursor-pointer' onClick={() => {
                    scrollToAbout();
                    setShowMenu(false);
                }}>ABOUT</span>
                <span className='hover:text-[#703B2B] cursor-pointer' onClick={() => {
                    scrollToStory();
                    setShowMenu(false);
                }}>STORY</span>
                <span className='hover:text-[#703B2B] cursor-pointer' onClick={() => {
                    scrollToGallery();
                    setShowMenu(false);
                }}>GALLERY</span>
                <span className='hover:text-[#703B2B] cursor-pointer' onClick={() => {
                    scrollToEvent();
                    setShowMenu(false);
                }}>EVENT</span>
            </div>
        </div>
    )
}
