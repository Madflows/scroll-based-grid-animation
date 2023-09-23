import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { cn } from '../utils/functions';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav id='header' className='p-[3rem] h-fit'>
      <div className='p-3 lg:py-5 px-6 bg-stone-900 shadow-sm border-2 rounded-full w-full flex items-center justify-between '>
        <h2 className='text-2xl font-bold'>Meshes</h2>

        <button
          className={cn(' transition-all duration-500 p-2 ease-in-out', {
            'rotate-[135deg]': menuOpen,
          })}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiPlus className='text-3xl ' />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
