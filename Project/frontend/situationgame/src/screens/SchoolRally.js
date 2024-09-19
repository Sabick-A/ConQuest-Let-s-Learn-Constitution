import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import houseOnHill from '../music/houseOnHill.mp3';
import school from '../images/schoolRally.png';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import doorKnock from '../soundEffects/doorKnock.mp3';
import doorCreak from '../soundEffects/doorCreaking.mp3';


const SchoolRally = () => {
    const navigate = useNavigate();
    // const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [tookAction, setTookAction] = useState(false);
    const audioRef = useRef(null);

    const location = useLocation();

    // From here we access the multiple variables passed from the previous screen.
    // Provide fallback values if location.state is null or undefined
    const calledOut = location.state?.calledOut || false;
    const findShelter = location.state?.findShelter || false;


    // useEffect(() => {
    //     const audio = new Audio(houseOnHill);
    //     audio.loop = true; // Enable looping
    //
    //     // Play the audio
    //     audio.play().catch((error) => {
    //         console.error('Autoplay prevented:', error);
    //     });
    //
    //     return () => {
    //         // Cleanup if needed
    //         audio.pause();
    //     };
    // }, []);

    const continueButton = () => {
        setIsSelected1(false);
        setIsSelected2(false);
        setStoryIndex((prevIndex) => prevIndex + 1);

    };

    // const toggleMute = () => {
    //     // Toggle mute state
    //     setIsMuted((prevIsMuted) => !prevIsMuted);
    // };

    // First Choice
    const frontEntrance = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setTookAction(true);
    }

    const backEntrance = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setTookAction(false);
    }

    // const knock = () => {
    //     const knocking = new Audio(doorKnock);
    //     knocking.play();
    //
    //     return "Knock";
    // }

    // const creak = () => {
    //     const creaking = new Audio(doorCreak);
    //     creaking.play();
    //
    //     return "creaks";
    // }


    return (

        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${school})` }}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">
                {storyIndex === 0 && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-white mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:inline-block"

                        sequence={[
                            "Occurrence 2: The School Protest",
                            2000,
                            "After resolving the well issue, you head to the village centre, where you find a group of parents gathering in protest",
                            2000,
                            "They are demanding that Mr. Singh and his allies are not allowing their children to attend the local school, which has been reserved only for the rich families. ",
                            3000,
                            "The protesters are peaceful, but some of Mr. Singh’s men want to shut the rally down, fearing it will lead to trouble.",
                            3000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 1 && (
                    <div className='justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48'>
                        <h1 className='ml-2 text-justify font-serif text-4xl text-slate-200 sm:text-justify sm:font-serif sm:text-7xl sm:text-slate-200 '>You...</h1>
                        <div className=' mt-20 sm:mt-28'>
                            <button
                                className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 font-serif text-left text-xl text-slate-200 sm:mr-20 sm:font-serif sm:text-3xl sm:text-white sm:cursor-pointer sm:inline-block 
                                     ${isSelected1 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => frontEntrance()}
                            >
                                Allow the rally to continue and ensure it remains peaceful
                            </button>

                            <button
                                className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 mt-14 font-serif text-left text-xl sm:ml-20 sm:font-serif sm:text-3xl sm:text-white sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => backEntrance()}
                            >
                                Shut the rally down to avoid any potential disruption
                            </button>
                        </div>
                    </div>
                )}

                {storyIndex === 2 && tookAction == true && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-white mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:inline-block"
                        sequence={[
                            ` (Article 19: Right to Assemble)`,
                            2000,
                            "Right Choice: You defend the villagers' right to protest, reminding them that Article 19: Right to Assemble protects their right to peaceful gatherings.",
                            2000,
                            "The rally remains peaceful, and the village council agrees to meet with the parents to discuss opening the school to all children.",
                            2000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 2 && tookAction == false && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-white mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:inline-block"
                        sequence={[
                            ` (Violation of Article 19: Right to Assemble)`,
                            2000,
                            `By shutting down the rally, you silence the villagers' voices and deny them their right to protest`,
                            2000,
                            "The villagers feel betrayed, and unrest spreads",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}


                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 3 && tookAction == false && (
                    navigate('/GameOver', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}

                {storyIndex === 4 && tookAction == true && (
                    navigate('/RoadBlock', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}


            </div>

            {/* Button to Continue */}
            <div className='absolute inset-x-0 bottom-32 text-center'>
                <button className='bg-gray-700 bg-opacity-100 p-2 rounded-lg font-serif text-2xl text-slate-200 sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer' onClick={continueButton}>
                    Continue
                </button>
            </div>



        </div >
    );
};

export default SchoolRally;
