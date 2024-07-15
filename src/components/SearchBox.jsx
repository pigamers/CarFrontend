import React from 'react'

import { LuSearch } from "react-icons/lu";

export default function SearchBox() {
    return (
        <>
            <form className="w-2/3 mx-auto">
                <div className="relative flex border-three border">
                    <span className="inline-flex items-center p-4">
                        <LuSearch size={25} />
                    </span>
                    <input
                        type="text"
                        inputMode="text"
                        className="bg-one block flex-1 border-l-three border border-t-0 border-b-0 border-r-0 min-w-0 text-lg p-3"
                        placeholder="Enter a name of a Car"
                        required
                    />
                    <button className='px-4 py-2 border-three border hover:bg-three hover:text-one'>Search</button>
                </div>
            </form>
        </>
    )
}
