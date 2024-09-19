import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameOverMusic from '../music/GameOver.mp3';
import gameOver from "./GameOver";
import gameWon from "../images/gameWon.jpg";

function GameWon() {
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
    //
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
        <div className="h-screen bg-cover flex flex-col " style={{ backgroundImage: `url(${gameWon})` }}>
            <div className='flex flex-col h-3/5 items-start ml-24 mt-40'>
                <h1 className="font-serif text-left  text-white cursor-pointer sm:text-9xl sm:hover:text-gray-500 sm:cursor-pointer sm:font-serif">
                    You
                </h1>
                <h1 className="font-serif text-left text-white cursor-pointer sm:text-9xl sm:hover:text-gray-500 sm:cursor-pointer sm:font-serif mt-4">
                    Won!
                </h1>
            </div>


            {/* Button to Continue */}
            <div className='absolute inset-x-0 bottom-48 text-center'>
                <button
                    className='bg-gray-500 bg-opacity-70 p-2 rounded-lg font-serif text-2xl text-slate-200 sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer'
                    onClick={continueButton}>
                    Return to HomeScreen
                </button>
            </div>




        </div>
    );
}


export default GameWon;
