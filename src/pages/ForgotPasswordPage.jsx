import React, { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { IoArrowBack } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordPage() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/reset-password', {
                email,
                newPassword: password,
                confirmPassword,
            });

            toast.success(response.data.message, { duration: 3000 });
            setTimeout(() => {
                navigate('/login');
            }, 500);
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred while changing the password.";
            toast.error(errorMessage);
        } finally {
            setLoading(false); // Ensure loading is turned off in both success and error cases
        }
    };

    return (
        <>
            {loading && <Loader />}
            <section className="bg-two dark:bg-five font-graduate">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full p-6 bg-one rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <div className='flex gap-4'>
                            <IoArrowBack onClick={() => history.back()} size={30} />
                            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Change Password
                            </h2>
                        </div>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className='relative mt-2'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    id="password"
                                    placeholder="New Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
                                </button>
                            </div>
                            <div className='relative mt-2'>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirm-password"
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 py-2 flex items-center"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <BsEyeFill size={20} /> : <BsEyeSlashFill size={20} />}
                                </button>
                            </div>
                            <button type="submit" className="w-full border border-three hover:bg-three hover:text-one font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
