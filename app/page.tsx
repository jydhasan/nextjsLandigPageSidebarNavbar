'use client';

import { useState } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar onToggle={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />
      <main className="pt-16 md:ml-64 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <p>This is the responsive main content area with toggleable sidebar.</p>
      </main>
    </>
  );
}
