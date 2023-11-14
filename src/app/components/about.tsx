export default function About() {
    return (
        <div className="mt-36 flex text-center flex-col justify-center items-center px-2">
            <h2 className='text-xl text-[#703B2B] uppercase'>About</h2>
            <span className='text-5xl text-[#703B2B] mt-2'>𝒢𝓇ℴℴ𝓂 & ℬ𝓇𝒾𝒹ℯ</span>
            <span className='text-[#703B2B] sm:hidden sm:pb-16 mt-10 text-2xl'>˚ʚ♡ɞ˚</span>
            <div className='flex-row flex items-center justify-center gap-2 sm:gap-10 sm:mt-10'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <img
                        className='w-40 h-40 rounded-full object-cover object-center border border-dashed p-1 border-[#703B2B]'
                        src='/groom.png' alt='groom'/>
                    <span className='hidden sm:block text-cyan-800 text-base'>🤵🏻‍The Groom</span>
                    <span className='hidden sm:block text-[#703B2B] text-2xl mt-3'>Huy Hùng</span>
                </div>

                <span className='text-[#703B2B] hidden sm:block sm:pb-16 text-2xl'>˚ʚ♡ɞ˚</span>

                <div className='flex flex-col gap-2 items-center justify-center'>
                    <img
                        className='w-40 h-40 rounded-full object-cover object-center border border-dashed p-1 border-[#703B2B]'
                        src='/bride.png' alt='bride'/>
                    <span className='text-cyan-800 text-base'>👰🏻‍The Bride</span>
                    <span className='text-[#703B2B] text-2xl sm:mt-3'>Thiên Kiều</span>
                </div>
            </div>
        </div>
    )
}
