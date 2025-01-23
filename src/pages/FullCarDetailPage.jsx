import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FullCarDetailPageHeader from '../components/FullCarDetailPageHeader';
import Carousel from '../components/Carousel';

export default function FullCarDetailPage() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/cardetails/getcar/${id}`);
                setCar(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching car details:', err);
                setError('Failed to fetch car details.');
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bg-one dark:bg-five min-h-screen"> {/* Changed here */}
            <div>
                <FullCarDetailPageHeader />
            </div>
            {car ? (
                <div className="container mx-auto"> {/* Added container */}
                    <Carousel car={car} />
                    <div className='my-20'>
                        hello
                    </div>
                    <p>hello</p>
                </div>
            ) : (
                <div>No car details available.</div>
            )}
        </div>
    );
}

