'use client';

import clsx from 'clsx';

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={clsx(
        "fixed top-16 left-0 bg-gray-800 text-white w-64 h-screen p-4 z-40 transition-transform duration-300",
        {
          "-translate-x-full": !isOpen,
          "translate-x-0": isOpen,
          "md:translate-x-0": true, // Always show on desktop
        }
      )}
    >
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Home</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Profile</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Settings</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Logout</a>
      </nav>
    </aside>
  );
}
