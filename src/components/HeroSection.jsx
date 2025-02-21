import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import hero from '../assets/carsinparallel.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from './Loader';

export default function HeroSection() {
    const [data, setData] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    async function fetchUserProfile() {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.get('http://localhost:5000/api/v1/auth/profile/', {
                headers: {
                    'Authorization': token,
                    'Cache-Control': 'no-cache'
                }
            });

            if (response.data && response.data.fullname) {
                setData(response.data.fullname);
            } else {
                console.error("No user data in response");
            }
        } catch (error) {
            console.error("Error fetching profile:", error.response?.data || error.message);
        }
    }

    const handleSignupClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/signup');
        }, 250);
    }

    const handleLoginClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/login');
        }, 250);
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetchUserProfile();
        }
    }, [isAuthenticated]);

    // Add a listener for user data updates
    useEffect(() => {
        const handleUserDataUpdate = () => {
            if (isAuthenticated) {
                fetchUserProfile();
            }
        };

        window.addEventListener('userDataUpdated', handleUserDataUpdate);

        return () => {
            window.removeEventListener('userDataUpdated', handleUserDataUpdate);
        };
    }, [isAuthenticated]);

    return (
        <>
            {loading && <Loader />}
            <div className="relative w-full pt-16 bg-one font-graduate dark:bg-five">
                <div className="mx-auto w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        {
                            isAuthenticated ?
                                <div className='text-3xl lg:text-4xl text-center py-4 dark:text-six'>
                                    Hello, {' '}
                                    <br className='md:hidden' />
                                    <span className='text-three'>
                                        {data}
                                    </span>
                                </div>
                                :
                                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                    <div onClick={handleSignupClick} className="relative rounded-full border-three border dark:bg-six px-5 py-2 text-sm sm:text-lg leading-6">
                                        New to this then?
                                        <span className="font-semibold pl-3 sm:text-xl text-two hover:text-three">
                                            <span className="absolute inset-0" aria-hidden="true"></span>Sign Up <span aria-hidden="true">&rarr;</span>
                                        </span>
                                    </div>
                                </div>
                        }

                        <div className="text-center dark:text-six">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Buy or Sell your very 1st Car Here!!</h1>
                            <p className="mt-6 text-lg leading-8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                {isAuthenticated ?
                                    ""
                                    :
                                    <div>
                                        <button
                                            onClick={handleLoginClick}
                                            className="rounded-md flex tracking-widest items-center gap-2 px-5 py-3 border-three border hover:bg-three hover:text-one text-lg sm:text-xl font-semibold shadow-sm"
                                        >
                                            Get Started <FaArrowRight />
                                        </button>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="relative m-auto lg:col-span-5 lg:-mr-8 xl:col-span-6">
                        <img src={hero} className='md:h-screen w-full dark:shadow-six dark:shadow-md md:my-5' />
                    </div>
                </div>
                <hr className='dark:text-six' />
            </div>
        </>
    )
}
