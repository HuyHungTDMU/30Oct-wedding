export default function Event() {
    return (
        <div className="mt-36 flex text-center flex-col justify-center items-center">
            <h2 className='text-xl text-[#703B2B] uppercase'>EVENT</h2>
            <span className='text-5xl text-[#703B2B] mt-2'>𝒪𝓊𝓇 𝒲ℯ𝒹𝒹𝒾𝓃𝑔 ℰ𝓋ℯ𝓃𝓉</span>

            <div className='flex items-center gap-20 mt-20'>
                <div className='flex flex-col border-r-2 border-[#703B2B] pr-20 gap-3'>
                    <span className='text-2xl font-bold text-[#703B2B] '>Lễ hỏi</span>
                    <span>Tư gia nhà gái</span>
                    <span>3/11/2023</span>

                    <span className='text-2xl font-bold text-[#703B2B] mt-32'>Lễ Thành Hôn</span>
                    <span>Tư gia nhà trai</span>
                    <span>20/01/2024</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-2xl font-bold text-[#703B2B]'>Lễ Vu Quy</span>
                    <span>Nhà Hàng Ngọc Trâm</span>
                    <span>23-12-2023</span>
                </div>
            </div>
        </div>
    )
}
