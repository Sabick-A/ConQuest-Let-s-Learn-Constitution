import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Assailant1 from '../music/AssailantAttacking.mp3';
import { useLocation } from 'react-router-dom';
import HunterWalking from '../soundEffects/HunterWalking.mp3';
import PeopleScreaming from '../soundEffects/PeopleScreaming.mp3';
import doorCreak from '../soundEffects/doorCreaking.mp3';
import HelpMe from '../soundEffects/HelpMe.mp3';
import AxeHit from '../soundEffects/AxeHit.mp3';
import education from '../images/education.jpg'

const Education = () => {
  const navigate = useNavigate();
  const [storyIndex, setStoryIndex] = useState(0);
  const [choiceMade, setChoiceMade] = useState(null); // Store the player's choice
  const location = useLocation();

  // Accessing variables from the previous screen
  const calledOut = location.state?.calledOut;
  const findShelter = location.state?.findShelter;

  // useEffect(() => {
  //   const audio = new Audio(Assailant1);
  //   audio.loop = true;
  //   audio.play().catch((error) => {
  //     console.error('Autoplay prevented:', error);
  //   });
  //   return () => {
  //     audio.pause();
  //   };
  // }, []);

  const continueButton = () => {
    setStoryIndex((prevIndex) => prevIndex + 1);
  };

  const [react, setReact] = useState(false); // Initialize protest state

  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const handleSelection1 = () => {
    setReact(true); // Update state based on selection
    setIsSelected1(true);
    setIsSelected2(false);
  };

  const handleSelection2 = () => {
    setReact(false); // Update state based on selection
    setIsSelected1(false);
    setIsSelected2(true);
  };
  const handleOptionClick = (option) => {
    setChoiceMade(option); // Store the player's choice
    setStoryIndex(2); // Move to the next part of the story
  };

  // const creak = () => {
  //   const creaking = new Audio(doorCreak);
  //   creaking.play();
  //   return 'creaks';
  // };

  // const walking = () => {
  //   const walkingHunter = new Audio(HunterWalking);
  //   walkingHunter.play();
  //   return 'walking';
  // };

  // const screams = () => {
  //   const Wailing = new Audio(PeopleScreaming);
  //   const Wailing2 = new Audio(HelpMe);
  //   Wailing.play();
  //   Wailing2.play();
  //   return 'screams';
  // };

  // const blows = () => {
  //   const AxeHitting = new Audio(AxeHit);
  //   setTimeout(() => {
  //     AxeHitting.play();
  //   }, 2000);
  //   return 'blows';
  // };

  return (
      <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${education})`}}>
        <div className="fade-in-text flex h-3/5 items-center justify-center">
          {storyIndex === 0 && (
              <TypeAnimation
                  className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"

                  sequence={[
                    "Final Scene : Having addressed the issues in the village, you finally confront Mr. Singh directly.",
                    2000,
                    "He has been blocking the construction of a new school that would provide education to all children in the village, claiming that it isn’t necessary. ",
                    2000,
                    "Without a proper school, the children’s future is at risk.",
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
                <h1 className='ml-2 text-justify font-serif text-4xl text-white sm:text-justify sm:font-serif sm:text-7xl'>You...</h1>
                <div className=' mt-20 sm:mt-28'>
                  <button
                      className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 font-serif text-left text-xl text-slate-200 sm:mr-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block 
                                    ${isSelected1 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                      onClick={() => handleSelection1()}
                  >
                    Confront Mr. Singh about the Right to Education
                  </button>

                  <button
                      className={`bg-gray-700 bg-opacity-100 p-2 rounded-lg ml-2 mt-14 font-serif text-left text-xl text-slate-200 sm:ml-20 sm:font-serif sm:text-3xl sm:text-slate-200 sm:cursor-pointer sm:inline-block 
                                    ${isSelected2 ? 'border-b-4 border-white' : 'hover:border-b-4 hover:border-b-gray-700 hover:animate-pulse focus:border-b-4 focus:animate-pulse active:border-b-4 active:animate-pulse'}`}
                      onClick={() => handleSelection2()}
                  >
                    Suggest that he can delay the school’s construction
                  </button>
                </div>
              </div>
          )}

          {storyIndex === 2 && react == true && (
              <TypeAnimation
                  className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                  sequence={[
                    ` (Article 21A: Right to Education)`,
                    2000,
                    "Right Choice: You stand firm, reminding Mr. Singh that under Article 21A, every child has the right to free and compulsory education",
                    2000,
                    "With the support of the villagers and the law behind you, Mr. Singh is forced to allow the school to be built, ensuring a brighter future for the village’s children.",
                    2000,
                  ]}
                  wrapper="div"
                  speed={60}
                  cursor={false}
                  omitDeletionAnimation={true}

              />
          )}

          {storyIndex === 2 && react == false && (
              <TypeAnimation
                  className="bg-gray-800 bg-opacity-60 p-5 text-2xl text-center text-slate-200 mt-10 mx-8 inline-block sm:text-5xl sm:justify-center sm:mt-10 sm:mx-36 sm:text-slate-200 sm:inline-block"
                  sequence={[
                    `Violation of Article 24: Prohibition of Child Labor)`,
                    2000,
                    `By trying to negotiate with Mr. Singh, you allow him to delay the construction of the school indefinitely, depriving the children of their right to an education. `,
                    2000,
                    "The villagers are left with little hope for change.",
                  ]}
                  wrapper="div"
                  speed={60}
                  cursor={false}
                  omitDeletionAnimation={true}

              />
          )}

          {/* Navigating to the next screen and taking our choices too. */}
          {storyIndex === 3 && react == false && (
              navigate('/GameOver', {
                state: {
                  calledOut,
                  findShelter,
                }
              })
          )}

          {storyIndex === 4 && react == true && (
              navigate('/GameWon', {
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

export default Education;
