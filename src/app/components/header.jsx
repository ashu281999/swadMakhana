'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with link */}
          <a href="/" className="flex items-center space-x-2 rounded-xl">
            <Image src="/images/swadLogo.jpeg" alt="Logo" width={36} height={36} />
            <span className="text-xl font-bold text-gray-800">SWAD-E-MAKHANA</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-black font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 bg-white shadow-md">
          <ul className="flex flex-col gap-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-gray-700 font-medium py-2 border-b border-gray-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
