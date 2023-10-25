'use client';

import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap
} from "framer-motion";
import {useRef} from "react";

function ParallaxText({
                          children,
                          baseVelocity = 100
                      }: {
    children: any;
    baseVelocity: number;
}) {
    const baseX = useMotionValue(0);
    const {scrollY} = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-680, 100, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="overflow-hidden w-screen">
            <motion.div
                className="flex flex-nowrap whitespace-nowrap"
                style={{x}}
            >
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

export default function MotionSlideImage({value = false}: { value: boolean }) {
    return (
        <section className='border-dashed border-2 border-[#703B2B] py-2'>
            <ParallaxText baseVelocity={value ? 7 : -7}>
                <div className="flex items-center flex-nowrap">
                    <img
                        src='/about/3b384f8e833ee04515b8ba77bff745d8.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/37A50575-006A-4DD9-9DDB-8618C5B623DD.JPG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/465560CE-B47C-4911-A5A2-DF517B0B034E.JPG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5944.PNG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6301.PNG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6543 (1).PNG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6856.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_7111.JPG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_7614.JPG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_8284.PNG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_8285.PNG'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/A297A034-AA0C-43ED-A371-12C3937A81F5.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/FullSizeRender.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_0836.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_0835.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5189.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5407.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5565.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5576.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5632.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5666.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5707.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5865.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5898.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5955.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5970.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_5991.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6101.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6153.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6255.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6292.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6302.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6330.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6338.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6345.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6359.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6364.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6367.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6369.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6370.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6513.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6519.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6585.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6813.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6821.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6831.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6833.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6851.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6886.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6896.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6900.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6907.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_6937.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_7181.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_7530.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_7647.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_7674.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_7842.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_8157.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_8711.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_8716.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_8731.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                    <img
                        src='/about/IMG_8946.jpg'
                        alt="idimg"
                        className="h-44 px-1 py-1 bg-[#FCF5ED] rounded-xl w-auto"
                    />
                </div>
            </ParallaxText>
        </section>
    )
}
