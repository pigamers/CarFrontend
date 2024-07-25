import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Faq() {
    const [isOpenOne, setIsOpenOne] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenThree, setIsOpenThree] = useState(false);
    return (
        <>
            <section className="p-16 bg-one mx-auto w-full px-6 lg:px-8 font-graduate dark:bg-five">
                <div>
                    <div className="mx-auto max-w-2xl text-center dark:text-six">
                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed lg:mx-auto">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
                            assumenda
                        </p>
                    </div>
                    <div className="mx-auto mt-8 max-w-3xl space-y-8 md:mt-16">
                        <div className="cursor-pointer rounded-md border border-three shadow-lg transition-all duration-200 dark:bg-transparent dark:text-six">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                                onClick={() => setIsOpenOne(!isOpenOne)}
                            >
                                <span className="flex text-lg font-semibold">
                                    How do I get started?
                                </span>
                                {
                                    !isOpenOne ? <FaAngleDown size={30} /> : <FaAngleUp size={30} /> 
                                }
                            </button>
                            {isOpenOne && (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                                    aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
                                    inventore ratione deleniti?
                                </p>
                            </div>
                            )}
                        </div>
                        <div className="cursor-pointer rounded-md border border-three shadow-lg transition-all duration-200 dark:bg-transparent dark:text-six">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                                onClick={() => setIsOpenTwo(!isOpenTwo)}
                            >
                                <span className="flex text-lg font-semibold">
                                    How do I get started?
                                </span>
                                {
                                    !isOpenTwo ? <FaAngleDown size={30} /> : <FaAngleUp size={30} /> 
                                }
                            </button>
                            {isOpenTwo && (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                                    aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
                                    inventore ratione deleniti?
                                </p>
                            </div>
                            )}
                        </div>
                        <div className="cursor-pointer rounded-md border border-three shadow-lg transition-all duration-200 dark:bg-transparent dark:text-six">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                                onClick={() => setIsOpenThree(!isOpenThree)}
                            >
                                <span className="flex text-lg font-semibold">
                                    How do I get started?
                                </span>
                                {
                                    !isOpenThree ? <FaAngleDown size={30} /> : <FaAngleUp size={30} /> 
                                }
                            </button>
                            {isOpenThree && (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                                    aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
                                    inventore ratione deleniti?
                                </p>
                            </div>
                            )}
                        </div>
                    </div>
                    <p className="textbase mt-6 text-center dark:text-six">
                        Can&#x27;t find what you&#x27;re looking for?{" "}
                        <Link to="about" className="font-semibold hover:text-three">
                            Contact our support
                        </Link>
                    </p>
                </div>
            </section>

        </>
    )
}
