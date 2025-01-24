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
            <div className='bg-one py-24 dark:bg-five dark:text-six'>
                <SearchBox />
                <div className="grid w-full place-items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
                    {data.map((car) => {
                        return (
                            <div
                                key={car._id}
                                className="rounded-t-lg border w-4/5 hover:scale-105 h-full"
                            >
                                <img
                                    src={car.FrontView}
                                    alt="Car"
                                    className="aspect-[16/9] rounded-t-lg w-full md:aspect-auto md:h-[300px] lg:h-[200px]"
                                />
                                <div className="p-4 text-center space-y-4">
                                    <p className="inline-flex items-center text-lg font-semibold">
                                        Made by - {car.MakeOfCar}
                                    </p>
                                    <br />
                                    <p className="inline-flex items-center text-lg font-semibold">
                                        Model - {car.Model}
                                    </p>
                                    <div className="mt-4">
                                        <span className="mb-2 mr-2 inline-block rounded-full text-one bg-three px-3 py-1 text-[12px] dark:bg-six dark:text-five">
                                            #{car.MakeOfCar}
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center space-x-2">
                                        <span className="block text-sm font-semibold">Color : {car.Color}</span>
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
