'use client';

import {useEffect, useState} from "react";

const images = [
    {
        original: "/images/1.jpg",
        thumbnail: "/images/1.jpg",
    },
    {
        original: "/images/-_01.jpg",
        thumbnail: "/images/-_01.jpg",
    },
    {
        original: "/images/-_02.jpg",
        thumbnail: "/images/-_02.jpg",
    },
    {
        original: "/images/-_03.jpg",
        thumbnail: "/images/-_03.jpg",
    },
    {
        original: "/images/-_04.jpg",
        thumbnail: "/images/-_04.jpg",
    },
    {
        original: "/images/-_05.jpg",
        thumbnail: "/images/-_05.jpg",
    },
    {
        original: "/images/-_06.jpg",
        thumbnail: "/images/-_06.jpg",
    },
    {
        original: "/images/-_07.jpg",
        thumbnail: "/images/-_07.jpg",
    },
    {
        original: "/images/-_08.jpg",
        thumbnail: "/images/-_08.jpg",
    },
    {
        original: "/images/-_09.jpg",
        thumbnail: "/images/-_09.jpg",
    },
    {
        original: "/images/-_10.jpg",
        thumbnail: "/images/-_10.jpg",
    },
    {
        original: "/images/-_11.jpg",
        thumbnail: "/images/-_11.jpg",
    },
    {
        original: "/images/-_12.jpg",
        thumbnail: "/images/-_12.jpg",
    },
    {
        original: "/images/-_13.jpg",
        thumbnail: "/images/-_13.jpg",
    },
    {
        original: "/images/-_14.jpg",
        thumbnail: "/images/-_14.jpg",
    },
    {
        original: "/images/-_15.jpg",
        thumbnail: "/images/-_15.jpg",
    }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string>(images[0].original);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        interval = setInterval(() => {
            const currentIndex = images.findIndex((item) => item.original === selectedImage);
            const nextIndex = (currentIndex + 1) % images.length;
            setSelectedImage(images[nextIndex].original);
        }, 3000);

        return () => clearInterval(interval);
    }, [images, selectedImage]);

    const changeImage = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    return (
        <div className="mt-36 flex text-center flex-col justify-center items-center">
            <h2 className='text-xl text-[#703B2B] uppercase'>GALLERY</h2>
            <span className='text-5xl text-[#703B2B] mt-2'>𝒪𝓊𝓇 𝒫𝒽ℴ𝓉ℴ 𝒢𝒶𝓁𝓁ℯ𝓇𝓎</span>

            <div className='flex flex-col items-center gap-4 my-7'>
                <div className='w-screen p-4 bg-[#fff] flex justify-center items-center'>
                    <img src={selectedImage} alt="Main Image"
                         className='rounded w-full max-w-2xl object-cover object-center'/>
                </div>

                <div
                    className="flex max-w-lg px-2 sm:max-w-2xl xl:max-w-4xl flex-row items-center justify-center flex-wrap gap-2 sm:gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.thumbnail}
                            alt={`Thumbnail ${index + 1}`}
                            className='h-[40px] xl:h-[50px] object-center object-cover rounded'
                            onClick={() => changeImage(image.original)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
