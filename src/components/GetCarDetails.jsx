import React from 'react'
import SearchBox from './SearchBox'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export default function GetCarDetails() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    async function fetchCarDetails() {
        const response = await axios.get('http://localhost:5000/api/v1/cardetails/getcar')
        setData(response.data);
    }

    const CardClick = (car) => {
        if (isAuthenticated) {
            navigate(`/cardetail/${car._id}`)
        } else {
            toast.error('Please login to view car details')
        }
    }

    useEffect(() => {
        fetchCarDetails();
    }, []);

    return (
        <>
            <div className='bg-one py-24 dark:bg-five dark:text-one'>
                <SearchBox />
                <div className="grid w-full place-items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
                    {data.map((car) => {
                        return (
                            <div
                                key={car._id}
                                className="rounded-md border w-4/5 hover:scale-105 h-full"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                                    alt="Laptop"
                                    className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
                                />
                                <div className="p-4 text-center space-y-4">
                                    <h1 className="inline-flex items-center text-lg font-semibold">
                                        Owner name - {car.OwnerName}
                                    </h1>
                                    <h2 className="inline-flex items-center text-lg font-semibold">
                                        Owner Contact - {car.OwnerContact}
                                    </h2>
                                    <h3 className="inline-flex items-center text-lg font-semibold">
                                        Owner's Email - {car.OwnerEmail}
                                    </h3>
                                    <p>
                                        Owner Address - {car.OwnerAddress}
                                    </p>
                                    <div className="mt-4">
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #Sneakers
                                        </span>
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #Nike
                                        </span>
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #Airmax
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center space-x-2">
                                        <span className="block text-sm font-semibold">Colors : </span>
                                        <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
                                        <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
                                        <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => CardClick(car)}
                                        className="mt-4 w-full rounded-sm border border-three px-2 py-1.5 text-sm font-semibold shadow-sm hover:bg-three hover:text-one"
                                    >
                                        View Full Details
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-sm border border-three px-2 py-1.5 text-sm font-semibold shadow-sm hover:bg-three hover:text-one"
                                    >
                                        Chat with the Owner
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
