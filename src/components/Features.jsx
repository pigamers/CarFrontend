import React from 'react'
import { VscWorkspaceTrusted, VscServerProcess } from "react-icons/vsc";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";


export default function Features() {
    return (
        <>
            <div class="p-16 bg-one mx-auto w-full px-6 lg:px-8 font-graduate dark:bg-five">
                <div class="mx-auto max-w-xl text-center">
                    <div class="mx-auto inline-flex rounded-full border-three border px-4 py-1.5 dark:bg-six">
                        <p class="text-sm font-semibold uppercase tracking-widest">
                            100+ Cars Available for you
                        </p>
                    </div>
                    <h2 class="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl dark:text-six">
                        Car Lo can help you get your very first car
                    </h2>
                    <p class="mt-4 text-base leading-relaxed dark:text-six">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
                <div class="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 dark:text-six">
                    <div>
                        <div class="mx-auto flex h-20 w-20 text-three items-center justify-center rounded-full">
                            <VscWorkspaceTrusted size={50} />
                        </div>
                        <h3 class="mt-3 text-lg font-semibold dark:text-seven">
                            Trusted Platform
                            <hr className='w-2/3 m-auto mt-2' />
                        </h3>
                        <p class="mt-4 text-sm">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <div>
                        <div class="mx-auto flex h-20 w-20 items-center text-three justify-center rounded-full">
                            <VscServerProcess size={50} />
                        </div>
                        <h3 class="mt-3 text-lg font-semibold dark:text-seven">
                            Fast &amp; Easy Process
                            <hr className='w-2/3 m-auto mt-2' />
                        </h3>
                        <p class="mt-4 text-sm">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <div>
                        <div class="mx-auto flex h-20 w-20 items-center text-three justify-center rounded-full">
                            <MdOutlineSubdirectoryArrowRight size={50} />
                        </div>
                        <h3 class="mt-3 text-lg font-semibold dark:text-seven">
                            Direct from Seller
                            <hr className='w-2/3 m-auto mt-2' />
                        </h3>
                        <p class="mt-4 text-sm">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <div>
                        <div class="mx-auto flex h-20 w-20 items-center text-three justify-center rounded-full">
                            <BsCashCoin size={50} />
                        </div>
                        <h3 class="mt-3 text-lg font-semibold dark:text-seven">
                            Minimum Fee
                            <hr className='w-2/3 m-auto mt-2' />
                        </h3>
                        <p class="mt-4 text-sm">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                </div>
            </div>
            <hr className='md:w-2/3 m-auto dark:text-six' />
        </>
    )
}
