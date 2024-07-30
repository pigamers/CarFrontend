import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { MdArrowBack } from "react-icons/md";

export default function FullCarDetailPage() {
    const { id } = useParams();
    const [car, setCar] = useState(null); // State to store car details
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/cardetails/getcar/${id}`);
                setCar(response.data); // Assuming response.data is the car object
                setLoading(false);
            } catch (err) {
                console.error('Error fetching car details:', err); // Debugging
                setError('Failed to fetch car details.');
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [id]); // Re-run the effect if ID changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div>
                <header className='bg-two font-graduate border-b-2 dark:border-six rounded-b-3xl fixed z-20 top-0 start-0 w-full dark:bg-five'>
                    <div className="mx-auto px-5">
                        <div className="relative h-16">
                            <Link to="/getcar">
                                <div className='flex items-center gap-2 h-full text-xl dark:text-one'>
                                    <MdArrowBack size={35} />
                                    Back
                                </div>
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
            <div className='py-20'>
                {car ? (
                    <div>
                        <h2>{car.model || 'Model not available'}</h2>
                        <p><strong>Make:</strong> {car.OwnerName || 'Make not available'}</p>
                        <p><strong>Year:</strong> {car.year || 'Year not available'}</p>
                        <p><strong>Price:</strong> ${car.price || 'Price not available'}</p>
                        <p><strong>Description:</strong> {car.description || 'Description not available'}</p>
                        {car.imageUrl && (
                            <img
                                src={car.imageUrl}
                                alt={car.model || 'Car image'}
                                className="w-full h-auto rounded-md"
                            />
                        )}
                    </div>
                ) : (
                    <div>No car details available.</div>
                )}
            </div>
        </div>
    );
}
