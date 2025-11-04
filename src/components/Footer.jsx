import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} EduSphere LMS. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">Kebijakan Privasi</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Syarat Layanan</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Bantuan</a>
        </div>
      </div>
    </footer>
  );
}
