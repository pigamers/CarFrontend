import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaMicrophone } from 'react-icons/fa';
import { LuSearch } from "react-icons/lu";

export default function SearchBox() {
    const [transcript, setTranscript] = useState('');
    const recognitionRef = useRef(null);
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            setTranscript(result);
            // Show success toast after listening is done
            toast.success('Heard: ' + result, { duration: 3000 }); // Show for 3 seconds
        };

        recognition.onend = () => {
            setIsListening(false);
            toast.dismiss(); // Dismiss the loading toast when done
        };

        recognitionRef.current = recognition;

        return () => {
            recognition.stop();
        };
    }, []);

    const handleClick = () => {
        if (isListening) {
            recognitionRef.current.stop(); // Stop listening if already listening
            return;
        }

        setIsListening(true);
        const loadingToastId = toast.loading("Listening..."); // Show loading toast
        recognitionRef.current.start(); // Start listening
        
        // Store the loading toast ID to dismiss later
        recognitionRef.current.onend = () => {
            setIsListening(false);
            toast.dismiss(loadingToastId); // Dismiss the loading toast when done
        };
    };

    return (
        <form className="w-full lg:w-2/3 mx-auto px-4">
            <div className="relative flex border-three border rounded-md">
                <span className="md:inline-flex items-center p-4 hidden">
                    <LuSearch size={25} />
                </span>
                <input
                    type="text"
                    inputMode="text"
                    value={transcript} // Use value instead of defaultValue
                    onChange={(e) => setTranscript(e.target.value)} // Update state on input change
                    className="bg-one block flex-1 border-l-three border border-t-0 border-b-0 border-r-0 min-w-0 md:text-lg p-3"
                    placeholder="Enter a name of a Car"
                />
                <button onClick={handleClick} className="flex items-center justify-center p-2 transition duration-300" type="button">
                    <FaMicrophone size={25} />
                </button>
                <button type='submit' className='px-4 py-2 border-three border hover:bg-three hover:text-one'>Search</button>
            </div>
        </form>
    );
}
