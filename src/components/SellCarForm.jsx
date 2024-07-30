import React, { useState } from 'react'
import sellcar from '../assets/sellyourcar.jpg';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function SellCarForm() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [ownerName, setOwnerName] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');

    const [currentSection, setCurrentSection] = useState(1);

    // Function to go to the next section
    const goToNextSection = () => {
        setCurrentSection(prevSection => prevSection + 1);
    };

    // Function to go to the previous section
    const goToPreviousSection = () => {
        setCurrentSection(prevSection => prevSection - 1);
    };

    const handleCarDetailSubmit = async (event) => {
        event.preventDefault();
        if (isAuthenticated) {
            try {
                const res = await axios.post('http://localhost:5000/api/v1/cardetails/postcar', {
                    OwnerName: ownerName,
                    OwnerContact: ownerContact,
                    OwnerAddress: ownerAddress,
                    OwnerEmail: ownerEmail,
                });
                console.log(res);
                toast.success(res.data.message);
            } catch (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    toast.error(error.response.data.message || "Something went wrong!");
                } else if (error.request) {
                    // The request was made but no response was received
                    toast.error("No response received from the server!");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    toast.error("Error in setting up the request!");
                }
            }
        } else {
            toast.error("You need to Login first!");
        }
    };

    return (
        <>
            <div className='relative h-screen w-full bg-one font-graduate dark:bg-five dark:text-one flex items-center justify-center'>
                <div className="flex flex-col md:flex-row items-center justify-around w-full mx-6 md:mx-10 rounded-xl border dark:border-one">
                    <div className="hidden md:block h-[400px] w-[400px] rounded-full my-5 overflow-hidden">
                        <img
                            src={sellcar}
                            alt="Laptop"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <form className="space-y-8 w-full md:w-2/5 p-5" action='' onSubmit={handleCarDetailSubmit}>
                        {currentSection === 1 && (
                            <>
                                {/* Owner Name field */}
                                <div>
                                    <label htmlFor="ownerName" className="block text-lg font-medium">Owner's Name -</label>
                                    <div className="mt-2">
                                        <input
                                            id="ownerName"
                                            name="ownerName"
                                            type="text"
                                            required
                                            value={ownerName}
                                            onChange={(e) => setOwnerName(e.target.value)}
                                            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                                        />
                                    </div>
                                </div>
                                {/* Owner Contact field */}
                                <div>
                                    <label htmlFor="ownerContact" className="block text-lg font-medium">Owner's Contact -</label>
                                    <div className="mt-2">
                                        <input
                                            id="ownerContact"
                                            name="ownerContact"
                                            type="tel"
                                            required
                                            value={ownerContact}
                                            onChange={(e) => setOwnerContact(e.target.value)}
                                            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {currentSection === 2 && (
                            <>
                                {/* Owner Address field */}
                                <div>
                                    <label htmlFor="ownerAddress" className="block text-lg font-medium">Owner's Address -</label>
                                    <div className="mt-2">
                                        <textarea
                                            id="ownerAddress"
                                            name="ownerAddress"
                                            type="text"
                                            required
                                            value={ownerAddress}
                                            onChange={(e) => setOwnerAddress(e.target.value)}
                                            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                                        />
                                    </div>
                                </div>
                                {/* Owner Email field */}
                                <div>
                                    <label htmlFor="ownerEmail" className="block text-lg font-medium">Owner's Email -</label>
                                    <div className="mt-2">
                                        <input
                                            id="ownerEmail"
                                            name="ownerEmail"
                                            type="text"
                                            required
                                            value={ownerEmail}
                                            onChange={(e) => setOwnerEmail(e.target.value)}
                                            className="block w-full dark:text-five rounded-md border border-three px-3 py-2 shadow-sm"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        <div className='flex flex-row justify-between items-center px-4'>
                            {/* Back Btn */}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="button"
                                    className={`${currentSection === 1 ? "hidden" : ""} py-2 px-5 rounded border-three border hover:bg-three hover:text-one`}
                                    onClick={goToPreviousSection}
                                >
                                    Back
                                </button>
                            </div>
                            {/* Next Btn */}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    onClick={goToNextSection}
                                    className={`${currentSection === 2 ? "hidden" : ""} py-2 px-5 rounded border-three border hover:bg-three hover:text-one`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        {/* submit button */}
                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className={`${currentSection === 1 ? "hidden" : ""} w-full md:w-2/3 my-2 rounded-md dark:hover:text-one border-three border hover:text-one hover:bg-three px-3 py-2 text-lg font-medium`}
                            >
                                Post Data
                            </button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
