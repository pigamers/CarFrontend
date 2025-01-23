import React from 'react'

import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function FullCarDetailPageHeader() {
    return (
        <>
            <header className='bg-two font-graduate border-b-2 dark:border-six rounded-b-3xl fixed z-20 top-0 start-0 w-full dark:bg-five'>
                <div className="mx-auto px-5">
                    <div className="relative h-16">
                        <Link to="/getcar">
                            <div className='flex items-center gap-2 h-full text-xl dark:text-six'>
                                <MdArrowBack size={35} />
                                Back
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
