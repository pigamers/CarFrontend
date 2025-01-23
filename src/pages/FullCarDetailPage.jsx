import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FullCarDetailPageHeader from '../components/FullCarDetailPageHeader';
import Carousel from '../components/Carousel';

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
                <FullCarDetailPageHeader />
            </div>
            <div className='py-20 dark:bg-five h-screen'>
                {car ? (
                    <div>
                        <Carousel car={car} />
                    </div>
                ) : (
                    <div>No car details available.</div>
                )}
            </div>
        </div>
    );
}
