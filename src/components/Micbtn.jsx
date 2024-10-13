import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import ListeningScreen from './ListeningScreen';

const Micbtn = () => {
  const [isListening, setIsListening] = useState(false);

  const handleMicClick = () => {
    setIsListening(true);
  };

  const handleCloseListeningScreen = () => {
    setIsListening(false);
  };
  return (
    <>
      <div className='fixed bottom-4 right-4 flex items-center justify-center'>
        <span className='text-one bg-five p-3 rounded-full text-lg mr-3 dark:bg-three'>I'm your voice assistant!!</span>
        <FaMicrophone
          className='bg-four h-16 w-16 rounded-full p-3 text-one'
          onClick={handleMicClick}
          size={30}
        />
      </div>
      {isListening && <ListeningScreen onClose={handleCloseListeningScreen} />}
    </>
  );
};

export default Micbtn;
