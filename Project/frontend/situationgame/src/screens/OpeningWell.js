import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import openingWell from '../images/openingWell.jpg';
import { useNavigate } from 'react-router-dom';
import walkBushes from '../soundEffects/walkBushes.mp3';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';
// import villagebgm from '../music/village-sound-effect-no-copyright_6sKoJUU9.mp3';
const OpeningWell = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
    const [calledOut, setCalledOut] = useState(false);
    const [findShelter, setFindShelter] = useState(false);
    const audioRef = useRef(null);
    // useEffect(() => {
    //     const audio = new Audio(villagebgm);
    //     audio.loop = true; // Enable looping
    //
    //     // Play the audio
    //     audio.play().catch((error) => {
    //         console.error('Autoplay prevented:', error);
    //     });
    //     return () => {
    //         // Cleanup if needed
    //         audio.pause();
    //     };
    // }, []);
    const plummeted = () => {

    }


    const continueButton = () => {


        //Resetting states
        setIsSelected1(false);
        setIsSelected2(false);

        //Incrementing storyIndex for next sequence
        setStoryIndex((prevIndex) => prevIndex + 1);

        if (storyIndex === 4 && calledOut === true) {
            navigate('/SchoolRally');
        } else if (storyIndex === 5 && calledOut === false) {
            // Navigate to GameOver if the wrong choice was made
            navigate('/GameOver');
        }

    };

    // const toggleMute = () => {
    //     // Toggle mute state
    //     setIsMuted((prevIsMuted) => !prevIsMuted);
    // };

    // First Choice
    const callOut = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setCalledOut(true);
    }

    const stayQuiet = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setCalledOut(false);
    }

    // Second Choice
    const weapon = () => {
        setIsSelected1(true);
        setIsSelected2(false);
        setFindShelter(false);
    }

    const shelter = () => {
        setIsSelected2(true);
        setIsSelected1(false);
        setFindShelter(true);

    }

    //Callout sound
    const call = () => {
        const callout = new Audio(callOut);
        callout.play();
        return "call";
    }

    const walking = () => {
        const walk = new Audio(walkBushes);
        walk.play();
        return "walking";
    }


    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${openingWell})` }}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">

                {/* Story Sequence starts here */}
                {storyIndex === 0 && (
                    <TypeAnimation
                        className="bg-gray-700 bg-opacity-60 p-6 text-2xl text-center text-white mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-white sm:inline-block"
                        sequence={[
                            "You are Officer Arjun, a young, passionate police officer assigned to Nirajpur, a quiet village oppressed by a powerful landlord, Mr. Singh. The village head, Mr. Desai, has called you to investigate and restore peace and justice.",
                            1000,

                             "Your ultimate goal: to restore equality and protect the villagers' rights as per the Constitution of India.\n" +
                             "As you begin your journey, your decisions will either bring justice or allow injustice to thrive. "
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 1 && (
                    <TypeAnimation
                        className="bg-gray-700 bg-opacity-60 p-6 text-2xl text-center text-white mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:inline-block"

                        sequence={[
                            "Scene 1: The Well of Discrimination ",
                            2000,
                            "While walking through the village, you hear loud voices near the communal well. A group of villagers is arguing. Families from lower castes have been denied access to the well by Mr. Singh's guards, who say it is reserved for the upper-caste families",
                            2000,
                             "The lower-caste families are desperate, as they have no other nearby water source."

                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {storyIndex === 2 && (
                    <div className='justify-center items-center mt-28 sm:justify-center sm:items-center sm:mt-48'>
                        <h1 className='ml-2 text-justify font-serif text-4xl text-white sm:text-justify sm:font-serif sm:text-7xl '>You...</h1>
                        <div className=' mt-20 sm:mt-28'>
                            <button
                                className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 font-serif text-left text-2xl text-white sm:mr-20 sm:font-serif sm:text-4xl sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => callOut()}
                            >
                                Demand that the well be open to everyone
                            </button>

                            <button
                                className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 mt-14 font-serif text-left text-2xl text-white sm:ml-20 sm:font-serif sm:text-4xl sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => stayQuiet()}
                            >
                                Suggest that affected families find a different well
                            </button>
                        </div>
                    </div>
                )}
                {/* Call Out */}
                {storyIndex === 3 && calledOut === true && (
                    <TypeAnimation
                        className="bg-gray-700 bg-opacity-60 p-6 text-2xl text-center text-white mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:inline-block"
                        sequence={[
                            "Article 14: Equality Before Law",
                            2000,
                            "You step in and remind everyone that under Article 14: Equality Before Law, no one can be denied access to public facilities based on their caste.",
                            2000,
                            "Right Choice: The well is opened to all, and you earn the villagers' respect for standing up for justice.",
                            2000,
                            "You continue on your journey, knowing the fight is far from over."
                            
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                    />
                )}

                {/* Stay Quiet */}
                {storyIndex === 3 && calledOut === false && (
                    <TypeAnimation
                        className="bg-gray-700 bg-opacity-60 p-6 text-2xl text-center text-white mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:inline-block"
                        sequence={[
                            "(Violation of Article 14: Equality Before Law)",
                            2000,
                            `By suggesting the families find another source, you allow the discrimination to continue.`,
                            2000,
                            `Wrong Choice: Tensions rise in the village, and the people lose faith in you.)`,
                            2000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}
                        
                    />
                )}
                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 4 && calledOut == false && (
                    navigate('/GameOver', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}

                {storyIndex === 5 && calledOut == true && (
                    navigate('/SchoolRally', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}

            </div>
            <div className='absolute inset-x-0 bottom-32 text-center'>
                <button className='bg-gray-700 bg-opacity-100 p-2 rounded-lg font-serif text-2xl text-white sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer' onClick={continueButton}>
                    Continue
                </button>
            </div>

        </div >
    );
};

export default OpeningWell;
