import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import houseOnHill from '../music/houseOnHill.mp3';
import roadBlock from '../images/roadBlock.jpg';
import { VolumeSlash, VolumeHigh } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import crashingThroughFloor from '../soundEffects/CrashingThroughFloor.mp3';
import PainScream from '../soundEffects/PainScream.mp3';
import BearTrap from '../soundEffects/BearTrap.mp3';
import ManCrying from '../soundEffects/ManCrying.mp3';


const RoadBlock = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(false);
    const [storyIndex, setStoryIndex] = useState(0);
    
    const crashing = new Audio(crashingThroughFloor);
    const pain = new Audio(PainScream);
    const bearTrap = new Audio(BearTrap);
    const ManCryingSound = new Audio(ManCrying);

    const location = useLocation();

    // From here we access the multiple variables passed from the previous screen.
    const calledOut = location.state?.calledOut || false;
    const findShelter = location.state?.findShelter || false;
    const [protest, setProtest] = useState(false); // Initialize protest state

    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);

    // useEffect(() => {
    //
    //
    //     return () => {
    //         // Cleanup if needed
    //         pain.pause();
    //         ManCryingSound.pause();
    //     };
    // }, []);

    const continueButton = () => {
        setStoryIndex((prevIndex) => prevIndex + 1);
    };

    const handleSelection1 = () => {
        setProtest(true); // Update state based on selection
        setIsSelected1(true);
        setIsSelected2(false);
    };

    const handleSelection2 = () => {
        setProtest(false); // Update state based on selection
        setIsSelected1(false);
        setIsSelected2(true);
    };

    // const plummeted = () => {
    //
    //     crashing.play();
    //     setTimeout(() => {
    //         bearTrap.play();
    //     }, 1000);
    //     setTimeout(() => {
    //         pain.play();
    //     }, 1000);
    //     return "plummeted";
    // }

    // const whimper = () => {
    //     ManCryingSound.play();
    //     return "whimper";
    // }


    return (
        <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${roadBlock})`}}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">
                {storyIndex === 0 && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            "Scene 3: The Roadblock ",
                            2000,
                            "After the rally, you receive word that Mr. Singh has set up roadblocks, preventing villagers from traveling to nearby markets unless they pay a fee. ",
                            2000,
                            "This restriction has made it impossible for some families to sell their goods and purchase essential supplies. ",
                            3000,
                            "You know this is an unjust practice, but Mr. Singh’s men argue that it is for \"security reasons.\"",
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
                                className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 font-serif text-left text-xl text-slate-200 sm:mr-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => handleSelection1()}
                            >
                                Challenge the roadblock
                            </button>

                            <button
                                className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 mt-14 font-serif text-left text-xl text-slate-200 sm:ml-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => handleSelection2()}
                            >
                                Allow the roadblock to remain in place
                            </button>
                        </div>
                    </div>
                )}

                {storyIndex === 2 && protest == true && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                        sequence={[
                            ` (Article 19: Freedom of Movement )`,
                            2000,
                            "Right Choice: You remind everyone that Article 19: Freedom of Movement ensures that citizens can travel freely across India. ",
                            2000,
                            "After investigating, you discover that the roadblocks were set up to exploit the villagers. You dismantle them, and the villagers are free to travel again.",
                            2000,
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {storyIndex === 2 && protest == false && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                        sequence={[
                            `Violation of Article 19: Freedom of Movement)`,
                            2000,
                            `By allowing the roadblock to remain, you let Mr. Singh’s control tighten over the village`,
                            2000,
                            "restricted the villagers’ freedoms and causing further suffering",
                        ]}
                        wrapper="div"
                        speed={60}
                        cursor={false}
                        omitDeletionAnimation={true}

                    />
                )}

                {/* Navigating to the next screen and taking our choices too. */}
                {storyIndex === 3 && protest == false && (
                    navigate('/GameOver', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}

                {storyIndex === 4 && protest == true && (
                    navigate('/ChildLabour', {
                        state: {
                            calledOut,
                            findShelter,
                        }
                    })
                )}


            </div>

            {/* Button to Continue */}
            <div className='absolute inset-x-0 bottom-32 text-center'>
                <button
                    className='bg-gray-700 bg-opacity-100 p-2 rounded-lg font-serif text-2xl text-slate-200 sm:font-serif sm:text-4xl sm:text-slate-200 sm:hover:animate-pulse sm:cursor-pointer'
                    onClick={continueButton}>
                    Continue
                </button>
            </div>


        </div>
    );
};

export default RoadBlock;
