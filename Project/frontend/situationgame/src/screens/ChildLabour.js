import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import DarkAlley from '../music/DarkAlley.mp3';
import childLabour from '../images/childLabour.jpg'
import { useLocation } from 'react-router-dom';
import HelpMe from '../soundEffects/HelpMe.mp3';
import PeopleScreaming from '../soundEffects/PeopleScreaming.mp3';
import doorCreak from '../soundEffects/doorCreaking.mp3';


const ChildLabour = () => {
    const navigate = useNavigate();
    const [storyIndex, setStoryIndex] = useState(0);



    const location = useLocation();

    // From here we access the multiple variables passed from the previous screen.
    const calledOut = location.state.calledOut;
    const findShelter = location.state.findShelter;
    const [protest, setProtest] = useState(false); // Initialize protest state

    const [isSelected1, setIsSelected1] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);
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

    // useEffect(() => {
    //     const audio = new Audio(DarkAlley);
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
        setStoryIndex((prevIndex) => prevIndex + 1);
    };


    // const screams = () => {
    //     const Wailing = new Audio(PeopleScreaming);
    //     const Wailing2 = new Audio(HelpMe);
    //
    //     Wailing.play();
    //     Wailing2.play();
    //
    //     return "screams";
    // }


    return (
        <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${childLabour})`}}>
            <div className="fade-in-text flex h-3/5 items-center justify-center">
                {storyIndex === 0 && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                        sequence={[
                            "Scene 4: Child Labor Exposed",
                            1500,
                            "While on your rounds, you pass by one of Mr. Singh’s factories and notice several children working under dangerous conditions.",
                            1500,
                            "When you confront the factory manager, they claim that the children are helping their families survive. ",
                            1500,
                            "The parents, however, are unaware of their children’s rights and believe they have no other choice but to send them to work.",
                            1500,
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
                                Inform the factory that child labour is illegal
                            </button>

                            <button
                                className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 mt-14 font-serif text-left text-xl text-slate-200 sm:ml-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                                onClick={() => handleSelection2()}
                            >
                                Allow the children to keep working
                            </button>
                        </div>
                    </div>
                )}

                {storyIndex === 2 && protest == true && (
                    <TypeAnimation
                        className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                        sequence={[
                            ` (Article 24: Prohibition of Child Labor)`,
                            1500,
                            "Right Choice: You remind the factory owner of Article 24: Prohibition of Child Labor, and the children are immediately removed from the factory.",
                            1500,
                            "You work with local authorities to provide educational support for the children and financial aid for the families, ensuring they no longer need to send their children to work.",
                            1500,
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
                            `Violation of Article 24: Prohibition of Child Labor)`,
                            1500,
                            `By ignoring the child labour issue, you allow the exploitation to continue. `,
                            1500,
                            "The children remain in dangerous working conditions, denied their right to education. ",
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
                    navigate('/Education', {
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

export default ChildLabour;
