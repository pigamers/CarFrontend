import React, { useState } from 'react'
import { HiOutlineBell } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
import ThemeToggle from './ThemeToggle';


export default function Navbar() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const [isOpenBurger, setOpenForBurger] = useState(false);
    const [isOpenNotification, setOpenNotification] = useState(false);
    const [isOpenProfileDropDown, setOpenProfileDropDown] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
    };

    return (
        <>
            <nav className="bg-two font-graduate border-b-2 dark:border-six rounded-b-3xl fixed z-20 top-0 start-0 w-full dark:bg-five">
                <div className="mx-auto px-5">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center dark:text-six dark:hover:text-three rounded-md p-2" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setOpenForBurger(!isOpenBurger)}>
                                <CiMenuBurger size={26} />
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 dark:text-six">
                                    <NavLink to="/" className={({ isActive }) => `hover:text-one px-3 py-2 text-lg font-medium dark:hover:text-three ${isActive ? "text-one dark:text-three" : ""}`}>
                                        Home
                                    </NavLink>
                                    <NavLink to="/getcar" className={({ isActive }) => `hover:text-one px-3 py-2 text-lg font-medium dark:hover:text-three ${isActive ? "text-one dark:text-three" : ""}`}>
                                        Get a Car
                                    </NavLink>
                                    <NavLink to="/sellcar" className={({ isActive }) => `hover:text-one px-3 py-2 text-lg font-medium dark:hover:text-three ${isActive ? "text-one dark:text-three" : ""}`}>
                                        Sell a Car
                                    </NavLink>
                                    <NavLink to="/about" className={({ isActive }) => `hover:text-one px-3 py-2 text-lg font-medium dark:hover:text-three ${isActive ? "text-one dark:text-three" : ""}`}>
                                        About Us
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 dark:text-six">
                            <ThemeToggle />
                            {isAuthenticated ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpenNotification(!isOpenNotification)
                                            if (isOpenProfileDropDown) {
                                                setOpenProfileDropDown(!isOpenProfileDropDown)
                                            }
                                        }}
                                        className="relative rounded-full p-1"
                                    >
                                        <HiOutlineBell size={26} className='hover:text-one dark:hover:text-three' />
                                    </button>
                                    <div className={`absolute right-0 top-12 z-10 mt-2 h-64 w-64 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpenNotification ? 'block' : 'hidden'}`}>
                                        <div className="bg-one rounded-lg shadow-lg h-full">
                                            <ul className="py-2 text-sm text-five text-center">
                                                <li className="px-4 py-2 cursor-pointer">
                                                    No new notifications!!
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className='flex items-center'
                                        onClick={() => {
                                            setOpenProfileDropDown(!isOpenProfileDropDown);
                                            if (isOpenNotification) {
                                                setOpenNotification(!isOpenNotification)
                                            }
                                        }}
                                    >
                                        <span className='border rounded-full p-2'>
                                            <FaUser />
                                        </span>
                                        <RiArrowDropDownLine size={25} />
                                    </button>
                                    <div className={`absolute right-0 top-12 z-10 mt-2 h-40 w-28 rounded-lg shadow-lg border ${isOpenProfileDropDown ? 'block' : 'hidden'}`}>
                                        <div className="bg-one rounded-lg shadow-lg h-full">
                                            <ul className="py-2 text-sm text-five text-center space-y-2">
                                                <li className="px-4 py-2 cursor-pointer">
                                                    <Link to="../user-profile">
                                                        Profile
                                                    </Link>
                                                </li>
                                                <hr className='w-full m-auto' />
                                                <li className="px-4 py-2 cursor-pointer">
                                                    <Link to="../chat">
                                                        Messages
                                                    </Link>
                                                </li>
                                                <hr className='w-full m-auto' />
                                                <li className="px-4 py-2 cursor-pointer">
                                                    <Link to="/" onClick={handleLogout} className='text-three'>
                                                        Logout
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="../login">
                                        <button className="rounded-md hidden sm:block tracking-widest px-5 py-2 border-three border hover:bg-three hover:text-one text-lg font-medium">
                                            Login
                                        </button>
                                    </Link>
                                    <Link to="../signup">
                                        <button className="rounded-md hidden sm:block tracking-widest px-5 py-2 border-three border hover:bg-three hover:text-one text-lg font-medium">
                                            Sign Up
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {isOpenBurger && (
                    <div className="sm:hidden" id="mobile-menu">
                        <hr className='text-one' />
                        <div className="space-y-3 mb-3 px-2 pb-3 pt-2 text-center">
                            <NavLink to="/" className={({ isActive }) => `hover:bg-one dark:hover:bg-four dark:text-six block rounded-md px-3 py-2 text-lg font-medium ${isActive ? "bg-one dark:bg-four" : ""}`}>
                                Home
                            </NavLink>
                            <NavLink to="/getcar" className={({ isActive }) => `hover:bg-one dark:hover:bg-four dark:text-six block rounded-md px-3 py-2 text-lg font-medium ${isActive ? "bg-one dark:bg-four" : ""}`}>
                                Get a Car
                            </NavLink>
                            <NavLink to="/sellcar" className={({ isActive }) => `hover:bg-one dark:hover:bg-four dark:text-six block rounded-md px-3 py-2 text-lg font-medium ${isActive ? "bg-one dark:bg-four" : ""}`}>
                                Sell a Car
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => `hover:bg-one dark:hover:bg-four dark:text-six block rounded-md px-3 py-2 text-lg font-medium ${isActive ? "bg-one dark:bg-four" : ""}`}>
                                About Us
                            </NavLink>
                            {isAuthenticated ? "" : (
                                <>
                                    <div className='flex justify-evenly'>
                                        <Link to="../login">
                                            <button className="bg-one md:hidden border-three border rounded hover:bg-three hover:text-one px-3 py-2 text-lg font-medium dark:border-none dark:hover:bg-three dark:shadow-six dark:shadow">
                                                Login
                                            </button>
                                        </Link>
                                        <Link to="../signup">
                                            <button className="bg-one md:hidden border-three border rounded hover:bg-three hover:text-one px-3 py-2 text-lg font-medium dark:border-none dark:hover:bg-three dark:shadow-six dark:shadow">
                                                Sign Up
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

            </nav>
        </>
    )
}