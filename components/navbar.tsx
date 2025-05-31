'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react'; // install via `npm install lucide-react`

export default function Navbar({ onToggle }: { onToggle: () => void }) {
  return (
    <header className="w-full bg-blue-600 text-white p-4 fixed top-0 left-0 z-50 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Website</h1>
      <button onClick={onToggle} className="md:hidden">
        <Menu size={24} />
      </button>
    </header>
  );
}
