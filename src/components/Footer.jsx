import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className='bg-one dark:bg-five'>
                <footer className="bg-two dark:bg-five font-graduate border-t rounded-t-3xl">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 dark:text-six">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0">
                                <a href="https://flowbite.com/" className="flex place-content-center items-center">
                                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
                                </a>
                            </div>
                            <div className="grid px-5 grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 select-none">
                                <div>
                                    <h2 className="mb-6 text-lg font-semibold uppercase">
                                        Pages
                                        <hr className='mt-2 w-1/2' />
                                    </h2>
                                    <ul className="font-medium text-lg space-y-5">
                                        <li>
                                            <a href="https://flowbite.com/" className="hover:text-one dark:hover:text-three">Home</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:text-one dark:hover:text-three">Get a Car</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:text-one dark:hover:text-three">Sell a Car</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:text-one dark:hover:text-three">About Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-lg font-semibold uppercase">
                                        Follow us
                                        <hr className='mt-2 w-1/2' />
                                    </h2>
                                    <ul className="space-y-5 font-medium text-lg">
                                        <li>
                                            <a href="https://github.com/themesberg/flowbite" className="hover:text-one dark:hover:text-three">Linked In</a>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/4eeurUVvTy" className="hover:text-one dark:hover:text-three">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/4eeurUVvTy" className="hover:text-one dark:hover:text-three">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/4eeurUVvTy" className="hover:text-one dark:hover:text-three">X</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className=''>
                                    <h2 className="mb-6 text-lg font-semibold uppercase">
                                        Legal
                                        <hr className='mt-2 w-1/2' />
                                    </h2>
                                    <ul className="space-y-5 font-medium text-lg">
                                        <li className="mb-4">
                                            <a href="#" className="hover:text-one dark:hover:text-three">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover:text-one dark:hover:text-three">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 sm:mx-auto lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <span className="text-sm sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:text-one">Flowbite™</a>. All Rights Reserved.
                            </span>
                            <div className="flex place-content-center gap-6 mt-4 sm:justify-center sm:mt-0">
                                <Link to="/" className='hover:text-one dark:hover:text-three'>
                                    <FaLinkedin size={35} />
                                    <span className="sr-only">Discord community</span>
                                </Link>
                                <Link to="/" className='hover:text-one dark:hover:text-three'>
                                    <FaFacebook size={35} />
                                    <span className="sr-only">Facebook page</span>
                                </Link>
                                <Link to="/" className='hover:text-one dark:hover:text-three'>
                                    <FaInstagram size={35} />
                                    <span className="sr-only">Instagram page</span>
                                </Link>
                                <Link to="/" className='hover:text-one dark:hover:text-three'>
                                    <BsTwitterX size={35} />
                                    <span className="sr-only">X account</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
