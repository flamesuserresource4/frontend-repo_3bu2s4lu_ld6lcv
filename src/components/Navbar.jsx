import React from 'react';
import { GraduationCap, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-600 text-white">
            <GraduationCap size={20} />
          </div>
          <span className="font-semibold tracking-tight text-lg">EduSphere LMS</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#tour" className="text-gray-600 hover:text-gray-900">Virtual Tour</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md border border-gray-200 hover:border-gray-300">
            <LogIn size={16} />
            Log in
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            <UserPlus size={16} />
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
