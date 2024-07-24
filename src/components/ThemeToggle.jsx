import { FaMoon, FaSun } from "react-icons/fa";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../utils/theme/themSlice';

export default function ThemeToggle() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.defaultTheme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="flex items-center">
            <button type="button" onClick={handleToggle} className="focus:outline-none">
                {theme === 'light' ?
                    <FaMoon size={26} className='hover:text-one dark:hover:text-three' />
                    :
                    <FaSun size={26} className='hover:text-one dark:hover:text-three' />
                }
            </button>
        </div>
    );
}
