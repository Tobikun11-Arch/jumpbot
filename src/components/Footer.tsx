import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4">
              Jump<span className="text-cyan-400">Bot</span>
            </h3>
            <p className="text-gray-400">
              Unleashing the power of blockchain technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-blockchain" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Why Blockchain
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/10 text-center text-gray-400">
          <p>&copy; 2025 JumpBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
