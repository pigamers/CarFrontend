import React from 'react';

const ListeningScreen = ({ onClose }) => {
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
                    onClick={onClose}
                    className="border border-three px-4 py-2 rounded hover:bg-three hover:text-one transition duration-300"
                >
                    Stop Listening
                </button>
            </div>
        </div>
    );
};

export default ListeningScreen;
