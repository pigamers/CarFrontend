import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaMicrophone } from 'react-icons/fa';
import { LuSearch } from "react-icons/lu";

export default function SearchBox({ onSearch }) {
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
            // Also trigger search when voice input is received
            onSearch(result);
            toast.success('Heard: ' + result, { duration: 3000 });
        };

        recognition.onend = () => {
            setIsListening(false);
            toast.dismiss();
        };

        recognitionRef.current = recognition;

        return () => {
            recognition.stop();
        };
    }, [onSearch]);

    const handleClick = () => {
        if (isListening) {
            recognitionRef.current.stop();
            return;
        }

        setIsListening(true);
        const loadingToastId = toast.loading("Listening...");
        recognitionRef.current.start();

        recognitionRef.current.onend = () => {
            setIsListening(false);
            toast.dismiss(loadingToastId);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(transcript);
    };

    const handleInputChange = (e) => {
        setTranscript(e.target.value);
        onSearch(e.target.value); // Real-time search as user types
    };

    return (
        <form onSubmit={handleSubmit} className="w-full lg:w-2/3 mx-auto px-4">
            <div className="relative flex border-three border rounded-md">
                <span className="md:inline-flex items-center p-4 hidden">
                    <LuSearch size={25} />
                </span>
                <input
                    type="text"
                    inputMode="text"
                    value={transcript}
                    onChange={handleInputChange}
                    className="bg-one block flex-1 border-l-three border border-t-0 border-b-0 border-r-0 min-w-0 md:text-lg p-3 dark:bg-five"
                    placeholder="Enter a name of a Car"
                />
                <button
                    onClick={handleClick}
                    className="flex items-center justify-center p-2 transition duration-300"
                    type="button"
                >
                    <FaMicrophone size={25} />
                </button>
                <button
                    type='submit'
                    className='px-4 py-2 border-three border hover:bg-three hover:text-one'
                >
                    Search
                </button>
            </div>
        </form>
    );
}