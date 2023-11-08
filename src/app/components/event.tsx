export default function Event() {
    return (
        <div className="mt-36 flex text-center flex-col justify-center items-center px-2">
            <h2 className='text-xl text-[#703B2B] uppercase'>EVENT</h2>
            <span className='text-5xl text-[#703B2B] mt-2'>𝒪𝓊𝓇 𝒲ℯ𝒹𝒹𝒾𝓃𝑔 ℰ𝓋ℯ𝓃𝓉</span>

            <div className='flex items-center sm:gap-20 gap-3 mt-20'>
                <div className='flex flex-col border-r-2 border-[#EAE7D6] pr-3 sm:pr-20'>
                    <div
                        className='bg-[#EAE7D6] shadow rounded-xl items-center justify-center h-[200px] text-[#703B2B] flex flex-col w-full gap-1 px-3'>
                        <span className='text-2xl font-bold'>Lễ Đính Hôn</span>
                        <span>Tư gia nhà gái</span>
                        <div className='grid grid-cols-2 mt-2'>
                            <span> 🕓</span>
                            <span> 🗓</span>
                            <span>09:00</span>
                            <span>3/11/2023</span>
                        </div>
                    </div>

                    <div className='w-full h-full flex flex-col mt-32'>
                        <div
                            className='bg-[#EAE7D6] shadow text-[#703B2B] items-center justify-center h-[200px] rounded-xl flex flex-col gap-1 px-3'>
                            <span className='text-2xl font-bold'>Lễ Thành Hôn</span>
                            <span>Tư gia nhà trai</span>
                            <div className='grid grid-cols-2 mt-2'>
                                <span> 🕓</span>
                                <span> 🗓</span>
                                <span>07:00</span>
                                <span>20/01/2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div
                        className='bg-[#EAE7D6] shadow items-center justify-center h-[200px] rounded-xl text-[#703B2B] flex flex-col w-full gap-1 px-3'>
                        <span className='text-2xl font-bold'>Lễ Vu Quy</span>
                        <a target="_blank" className='' href='https://maps.app.goo.gl/oBGvtsu44tH7za7x7'>Nhà Hàng Ngọc
                            Trâm ⤴️</a>
                        <div className='grid grid-cols-2 mt-2'>
                            <span> 🕓</span>
                            <span> 🗓</span>
                            <span>11:00</span>
                            <span>23-12-2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
