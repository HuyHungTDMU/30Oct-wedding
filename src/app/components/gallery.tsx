export default function Gallery() {
    return (
        <div className="mt-36 flex text-center flex-col justify-center items-center">
            <h2 className='text-xl text-[#703B2B] uppercase'>GALLERY</h2>
            <span className='text-5xl text-[#703B2B] mt-2'>𝒪𝓊𝓇 𝒫𝒽ℴ𝓉ℴ 𝒢𝒶𝓁𝓁ℯ𝓇𝓎</span>

            <div className='flex flex-col items-center gap-4 mt-7'>
                <div className="flex overflow-x-auto gap-4 h-auto px-20">
                    <img
                        src='/wedding/DSC06831.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-48 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07008.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-48 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC06824.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-48 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07354.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-48 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07133.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-48 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07292.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-48 object-center object-cover"
                    />
                </div>
                <div className="flex overflow-x-auto gap-4 h-auto max-w-md">
                    <img
                        src='/wedding/DSC06831.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-24 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07008.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-24 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC06824.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-24 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07354.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-24 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07133.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-24 object-center object-cover"
                    />
                    <img
                        src='/wedding/DSC07292.JPG'
                        alt="GALLERY"
                        className="h-auto rounded-xl w-24 object-center object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
