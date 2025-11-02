import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white">
              Jump<span className="text-cyan-400">Bot</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Home
              </a>
              <a href="#why-blockchain" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Why Blockchain
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Pricing
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                How It Works
              </a>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-cyan-500/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#why-blockchain"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Blockchain
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <button className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
