import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function Signup() {
    const navigate = useNavigate();

    const [fullname, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/v1/auth/signup/', {
                fullname,
                contactNumber,
                email,
                password,
            });
            toast.success(res.data.message);

            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error(error.toString());
            }
        }
    };


    return (
        <>
            <div className="flex min-h-full flex-col bg-two dark:bg-five font-graduate justify-center px-6 py-12 lg:px-8 h-screen">
                <div className="border shadow-lg space-y-8 rounded-lg p-8 bg-one dark:bg-six sm:mx-auto sm:w-full sm:max-w-lg">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-2 text-center text-2xl font-bold">Sign Up Here !!</h2>
                    </div>
                    <form className="space-y-8" action='' onSubmit={handleSignup}>
                        {/* fullname field */}
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
                            <div className="mt-2">
                                <input
                                    id="fullname"
                                    name="fullname"
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
                            <label htmlFor="mobile" className="block text-lg font-medium">Contact Number</label>
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
                            <label htmlFor="email" className="block text-lg font-medium">Email address</label>
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
                        {/* password field */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-lg font-medium">Password</label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border border-three py-2 px-3 shadow-sm"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <BsEyeFill size={30} /> : <BsEyeSlashFill size={30} />}
                                </button>
                            </div>
                        </div>
                        {/* submit button */}
                        <div>
                            <button type='submit' className="w-full my-2 rounded-md bg-one border-three border hover:text-one hover:bg-three px-3 py-2 text-lg font-medium">
                                Sign Up
                            </button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
