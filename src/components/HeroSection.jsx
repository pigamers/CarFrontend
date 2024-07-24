import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import hero from '../assets/carsinparallel.jpg'; // with import
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HeroSection() {
    const theme = useSelector(state => state.theme.defaultTheme);
    return (
        <div className={theme === 'dark' ? "dark" : ""}>
            <div className="relative w-full pt-16 bg-one font-graduate dark:bg-five">
                <div className="mx-auto w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full border-three border dark:bg-six px-5 py-2 text-sm sm:text-lg leading-6">
                                New to this then?
                                <Link to="signup" className="font-semibold pl-3 sm:text-xl text-two hover:text-three">
                                    <span className="absolute inset-0" aria-hidden="true"></span>Sign Up <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center dark:text-six">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Buy or Sell your very 1st Car Here!!</h1>
                        <p className="mt-6 text-lg leading-8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="login" className="rounded-md flex tracking-widest items-center gap-2 px-5 py-3 border-three border hover:bg-three hover:text-one text-lg sm:text-xl font-semibold shadow-sm">Get Started <FaArrowRight /></Link>
                        </div>
                    </div>
                    </div>
                    <div className="relative m-auto lg:col-span-5 lg:-mr-8 xl:col-span-6">
                        <img src={hero} className='md:h-screen w-full dark:shadow-six dark:shadow-md md:my-5' />
                    </div>
                </div>
                <hr className='dark:text-six' />
            </div>
        </div>
    )
}
