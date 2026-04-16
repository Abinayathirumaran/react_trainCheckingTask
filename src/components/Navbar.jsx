import React, { useState } from 'react'
import Button from './Button';
import { navLinks } from '../data/navbarData';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='bg-blue-400 text-white font-semibold p-4'>
            <div className='max-w-6xl mx-auto flex justify-between  items-center'>
                <div className='flex '>
                    <img src="\src\assets\logo.png" alt="logo" className="w-18 h-8 font-bold" />
                    <h1 className='text-xl text-blue-900 font-bold'>Track Journey</h1>
                </div>

                {/* // desktop menu */}
                <ul className='hidden md:flex gap-6'>
                    {
                        navLinks.map(data => (
                            <li key={data.id} className='cursor-pointer'>
                                {data.name}
                            </li>
                        )

                        )
                    }

                </ul>
                {/* Mobile menu button */}
                <Button label="☰" className='md:hidden text-2xl text-bold' onClick={() => setIsOpen(!isOpen)} />
            </div>
            {/* mobile view */}

            {isOpen && (
                <ul className='md:hidden flex flex-col gap-4 mt-4 text-center'>
                    {
                        navLinks.map(data => (
                            <li key={data.id}>
                                {data.name}
                            </li>
                        )

                        )
                    }
                </ul>
            )

            }
        </nav>
    );
}

export default Navbar