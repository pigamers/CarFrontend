import React, { useState } from 'react'
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../utils/auth/authSlice';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/v1/login/', {
                email,
                password,
            });
            toast.success(res.data.message);

            dispatch(login());
            
            setTimeout(() => {
                navigate('/');
            }, 2000);
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
                <div className="mt-10 border shadow-lg space-y-8 rounded-lg p-8 bg-one dark:bg-six sm:mx-auto sm:w-full sm:max-w-lg">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <LuLogIn size={80} className='m-auto' />
                        <h2 className="mt-10 text-center text-2xl font-bold">Log in to your account</h2>
                    </div>
                    <form className="space-y-8 mx-5" action="" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium">Email address</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border border-three px-3 py-2 shadow-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-lg font-medium">Password</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full rounded-md border border-three py-2 px-3 shadow-sm" />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full my-2 rounded-md bg-one border-three border hover:bg-three hover:text-one px-3 py-2 text-lg font-medium"
                            >
                                Login
                            </button>
                            <Toaster />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-lg">
                        Not a member?
                        <Link to="../signup" className="font-semibold hover:text-three px-2">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
