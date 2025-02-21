import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProfilePageHeader from '../components/ProfilePageHeader'
import Loader from "../components/Loader";

import { FaUser } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

export default function Profile() {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const [fullname, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');

    const fetchProfile = async () => {
        const response = await axios.get(`http://localhost:5000/api/v1/auth/profile`, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                'Cache-Control': 'no-cache'
            }
        });
        setUser(response.data);
        setFullName(response.data.fullname || '');
        setContactNumber(response.data.contactNumber || '');
        setEmail(response.data.email || '')
    }
    useEffect(() => {
        fetchProfile();
    }, [])

    useEffect(() => {
        if (user) {
            setFullName(user.fullname);
            setContactNumber(user.contactNumber);
            setEmail(user.email);
        }
    }, [user])

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const updateData = {
                fullname: String(fullname).trim(),
                contactNumber: String(contactNumber).trim(),
                email: String(email).trim()
            };

            const response = await axios.put(
                'http://localhost:5000/api/v1/auth/update-profile',
                updateData,
                {
                    headers: {
                        'Authorization': `${localStorage.getItem('token')}`
                    }
                }
            );

            // Update the token in localStorage
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }

            // Update the user state and localStorage
            const updatedUser = response.data.user;
            setUser(updatedUser);
            setFullName(updatedUser.fullname);
            setContactNumber(updatedUser.contactNumber);
            setEmail(updatedUser.email);

            // Update localStorage user data
            localStorage.setItem('user', JSON.stringify(updatedUser));

            toast.success('Profile updated successfully');

            // Dispatch event after successful update
            window.dispatchEvent(new Event('userDataUpdated'));

        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Failed to update profile';
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            {loading && <Loader />}
            <div className="bg-one dark:bg-five flex items-center justify-center min-h-screen">
                <div>
                    <ProfilePageHeader />
                </div>
                {user &&
                    <div className="w-full md:w-4/5 rounded-md shadow-md border dark:shadow-one">
                        <div className="flex">
                            {/* Left Column - User Icon */}
                            <div className="w-1/2 flex items-center justify-center p-6 border-r border-gray-700 dark:text-one">
                                <FaUser size={150} />
                            </div>

                            {/* Right Column - User Data */}
                            <div className="w-1/2 flex flex-col justify-between p-6 space-y-8">
                                <form className="space-y-8" onSubmit={handleUpdate}>
                                    {/* fullname field */}
                                    <div>
                                        <label htmlFor="name" className="block text-lg font-medium dark:text-one">Full Name</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                required
                                                value={fullname}
                                                onChange={(e) => setFullName(e.target.value)}
                                                className="block w-full rounded-md border border-three px-3 py-2 shadow-sm"
                                            />
                                        </div>
                                    </div>
                                    {/* contact number field */}
                                    <div>
                                        <label htmlFor="mobile" className="block text-lg font-medium dark:text-one">Contact Number</label>
                                        <div className="mt-2">
                                            <input
                                                id="contactNumber"
                                                name="contactNumber"
                                                type="tel"
                                                required
                                                value={contactNumber}
                                                onChange={(e) => setContactNumber(e.target.value)}
                                                className="block w-full rounded-md border border-three px-3 py-2 shadow-sm"
                                            />
                                        </div>
                                    </div>
                                    {/* email address field */}
                                    <div>
                                        <label htmlFor="email" className="block text-lg font-medium dark:text-one">Email address</label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="block w-full rounded-md border border-three px-3 py-2 shadow-sm"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full my-2 rounded-md bg-one border-three border hover:text-one hover:bg-three px-3 py-2 text-lg font-medium"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}