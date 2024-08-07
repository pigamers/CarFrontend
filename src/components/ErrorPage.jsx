import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="py-10 font-graduate">
            <div className="text-center">
                <p className="text-base font-semibold">404</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-4 text-base leading-7 text-gray-600">
                    Sorry, we could not find the page you&#x27;re looking for.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-3">
                    <Link
                        to="/"
                        className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <MdArrowBack size={25} />
                        Go back
                    </Link>
                </div>
            </div>
        </div>
    )
}
