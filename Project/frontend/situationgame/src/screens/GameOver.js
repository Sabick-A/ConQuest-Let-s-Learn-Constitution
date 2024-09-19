import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameOverMusic from '../music/GameOver.mp3';
import gameOver from '../images/gameOver.png';

function GameOver() {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(true);

    const audioRef = useRef(null);

    // useEffect(() => {
    //     const audio =  new Audio(GameOverMusic);
    //     audio.loop = true; // Enable looping
    //
    //
    //     // Play the audio
    //     audio.play().catch((error) => {
    //         console.error('Autoplay prevented:', error);
    //     });

    //     audioRef.current = audio;   // Save the audio element in the ref. We do this to avoid starting the music from the start when the user toggles mute.
    //
    //     return () => {
    //         // Cleanup if needed
    //         audio.pause();
    //     };
    // }, [isMuted]);

    // Toggle mute state
    const toggleMute = () => {
        setIsMuted((prevIsMuted) => !prevIsMuted);
    };

    const continueButton = () => {
        navigate('/');
    };

    return (
        <div className="h-screen bg-cover flex flex-col " style={{ backgroundImage: `url(${gameOver})` }}>
            <div className='flex h-3/5 items-center justify-center'>
                <h1 className="font-serif text-center text-6xl text-white cursor-pointer sm:text-9xl sm:cursor-pointer sm:font-serif">
                    Game Over
                </h1>
            </div>

            {/* Button to Continue */}
            <div className='absolute inset-x-0 bottom-48 text-center'>
                <button
                    className='bg-gray-500 bg-opacity-70 p-2 rounded-lg font-serif text-2xl text-slate-200 sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer' onClick={continueButton}>
                    Retry
                </button>
            </div>




        </div>
    );
}


export default GameOver;
