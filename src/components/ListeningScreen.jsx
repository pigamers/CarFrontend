import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ListeningScreen = ({ onClose }) => {
    const recognitionRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            handleCommand(result);
        };

        recognition.onend = () => {
            onClose(); // Close the listening screen when done
        };

        recognition.start();
        recognitionRef.current = recognition; // Store recognition instance

        return () => {
            recognition.stop();
        };
    }, [onClose]);

    const handleCommand = (command) => {
        if (command.toLowerCase() === 'go to get a car page' || command.toLowerCase() === 'get a car page') {
            toast.success('Navigated to get a car page!');
            navigate('/getcar'); // Navigate to the "Get Car" route
        } else if (command.toLowerCase() === 'go to sell a car page' || command.toLowerCase() === 'sell a car page') {
            toast.success('Navigated to sell a car page!');
            navigate('/sellcar'); // Navigate to the "Sell Car" route
        } else if (command.toLowerCase() === 'go to login page' || command.toLowerCase() === 'login page') {
            toast.success('Navigated to the login page!');
            navigate('/login'); // Navigate to the login route
        } else if (command.toLowerCase() === 'go to signup page' || command.toLowerCase() === 'signup page') {
            toast.success('Navigated to the signup page!');
            navigate('/signup'); // Navigate to the signup route
        } else if (command.toLowerCase() === 'go to about us page' || command.toLowerCase() === 'about us page') {
            toast.success('Navigated to the about us page!');
            navigate('/about'); // Navigate to the about route
        } else {
            toast.error(`Command not recognized: ${command}`);
        }
    };

    const handleStopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop(); // Stop the recognition
        }
        onClose(); // Close the listening screen
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center h-screen bg-black bg-opacity-75 backdrop-blur-sm z-50">
            <div className="bg-one rounded-lg p-8 shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Listening...</h2>
                <p className="text-gray-700 mb-6">We are currently processing your speech.</p>
                <div className="flex items-center justify-center mb-4">
                    <div className="animate-pulse bg-two h-12 w-12 rounded-full"></div>
                    <div className="animate-pulse bg-two h-12 w-12 rounded-full mx-2"></div>
                    <div className="animate-pulse bg-two h-12 w-12 rounded-full"></div>
                </div>
                <button
                    onClick={handleStopListening}
                    className="border border-three px-4 py-2 rounded hover:bg-three hover:text-one transition duration-300"
                >
                    Stop Listening
                </button>
            </div>
        </div>
    );
};

export default ListeningScreen;
