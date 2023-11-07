'use client';

import React, {useEffect, useRef, useState} from 'react';

interface MusicPlayerProps {
    src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({src}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
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

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <audio ref={audioRef} src={src}/>
            <button ref={buttonRef}
                    className={`${!showLabel ? 'text-[#fff]' : 'text-[#703B2B]'} text-2xl animate-bounce px-4 py-2`}
                    onClick={togglePlay}>
                {isPlaying ? '♪ ༘⋆' : '🎧'}
            </button>
        </div>
    );
};

export default MusicPlayer;
