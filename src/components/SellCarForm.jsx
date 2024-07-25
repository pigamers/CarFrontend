import React from 'react'
import sellcar from '../assets/sellyourcar.jpg';

export default function SellCarForm() {
    return (
        <>
            <div class="relative w-full pt-16 bg-one font-graduate dark:bg-five">
                <div class="mx-auto w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div class="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        <form className="space-y-8 mx-5" action="#" method="POST">
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required className="block rounded-md border border-three px-3 py-2 shadow-sm" placeholder='Email' />
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="password" className="block text-lg font-medium">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required className="block rounded-md border border-three py-2  shadow-sm" />
                                </div>
                            </div>

                            <div>
                                <button class="my-2 rounded-md bg-one border-three border hover:bg-three hover:text-one px-3 py-2 text-lg font-medium">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="relative m-auto lg:col-span-5 lg:-mr-8 xl:col-span-6">
                        <img src={sellcar} className='md:h-screen w-full dark:shadow-six dark:shadow-md rounded-full md:my-10' />
                    </div>
                </div>
            </div>
        </>
    )
}
