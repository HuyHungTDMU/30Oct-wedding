export default function Story() {
    return (
        <div className="mt-36 flex text-center flex-col justify-center items-center">
            <h2 className='text-xl text-[#703B2B] uppercase'>STORY</h2>
            <span className='text-5xl text-[#703B2B] mt-2'>𝒪𝓊𝓇 ℒℴ𝓋ℯ 𝒮𝓉ℴ𝓇𝓎</span>

            <div className='flex items-center sm:gap-20 gap-3 mt-20'>
                <div className='flex flex-col border-r-2 border-[#703B2B] pr-3 sm:pr-20 gap-10 items-center'>
                    <div className='w-[170px] h-[170px] flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-[#703B2B] '>First Meet</span>
                        <span>Chillies Coffee</span>
                        <span>__/__/2020</span>
                    </div>

                    <img
                        className='object-center border transition duration-300 ease-in-out border-[#703B2B] object-cover w-[170px] h-[170px] rounded-xl'
                        src='/firstdate.png'
                        alt='first-date'/>

                    <div className='w-[170px] h-[170px] flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-[#703B2B]'>Confess</span>
                        <span>Landmark 81</span>
                        <span>30/10/2022</span>
                    </div>

                    <img
                        className='object-center border transition duration-300 ease-in-out border-[#703B2B] object-cover w-[170px] h-[170px] rounded-xl'
                        src='/propose.png'
                        alt='first-meet'/>
                </div>
                <div className='flex flex-col gap-10'>
                    <img
                        className='object-center border transition duration-300 ease-in-out border-[#703B2B] object-cover w-[170px] h-[170px] rounded-xl'
                        src='/first-meet.png'
                        alt='first-meet'/>

                    <div className='w-[170px] h-[170px] flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-[#703B2B]'>First Date</span>
                        <span>Hồ con rùa</span>
                        <span>09-10-2021</span>
                    </div>

                    <img
                        className='object-center border transition duration-300 ease-in-out border-[#703B2B] object-cover w-[170px] h-[170px] rounded-xl'
                        src='/love.jpg'
                        alt='first-meet'/>

                    <div className='w-[170px] h-[170px] flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-[#703B2B]'>Propose</span>
                        <span>Phố Đi Nguyễn Huệ</span>
                        {/*<span className='text-sm'>Lyys Store Eyewear 👓</span>*/}
                        <span>30-9-2023</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
