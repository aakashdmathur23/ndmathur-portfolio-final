import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, FileDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-oxford_blue text-white p-4 flex justify-between items-center sticky top-0 shadow-lg z-50">
      <div className="font-heading text-lg md:text-xl tracking-wide">Prof. N. D. Mathur</div>

      <div className="hidden md:flex items-center space-x-6">
        <NavLink to="/" className="hover:text-orange_web-500 transition">Home</NavLink>
        <NavLink to="/profile" className="hover:text-orange_web-500 transition">Profile</NavLink>
        <NavLink to="/books" className="hover:text-orange_web-500 transition">Books</NavLink>
        <NavLink to="/publications" className="hover:text-orange_web-500 transition">Publications</NavLink>
        <NavLink to="/awards" className="hover:text-orange_web-500 transition">Awards</NavLink>
        <NavLink to="/gallery" className="hover:text-orange_web-500 transition">Gallery</NavLink>
        <NavLink to="/contact" className="hover:text-orange_web-500 transition">Contact</NavLink>

        <a href="/assets/CV_N D Mathur.pdf" download
           className="bg-orange_web-500 hover:bg-orange_web-600 text-white px-3 py-1 rounded-md flex items-center space-x-1 transition">
          <FileDown size={16}/> <span className="ml-1">Download CV</span>
        </a>

        <a href="https://www.linkedin.com/in/prof-n-d-mathur-94529915/" target="_blank" rel="noopener noreferrer"
           className="hover:text-orange_web-500 transition">
          <Linkedin size={18}/>
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden relative">
        <details className="relative">
          <summary className="list-none">
            <div className="space-y-1 cursor-pointer">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </summary>
          <div className="absolute right-0 mt-2 p-4 bg-oxford_blue rounded-md shadow-lg flex flex-col space-y-2">
            <NavLink to="/" className="hover:text-orange_web-500">Home</NavLink>
            <NavLink to="/profile" className="hover:text-orange_web-500">Profile</NavLink>
            <NavLink to="/books" className="hover:text-orange_web-500">Books</NavLink>
            <NavLink to="/publications" className="hover:text-orange_web-500">Publications</NavLink>
            <NavLink to="/awards" className="hover:text-orange_web-500">Awards</NavLink>
            <NavLink to="/gallery" className="hover:text-orange_web-500">Gallery</NavLink>
            <NavLink to="/contact" className="hover:text-orange_web-500">Contact</NavLink>
            <a href="/assets/CV_N D Mathur.pdf" download className="text-orange_web-500 flex items-center">
              <FileDown size={16}/> <span className="ml-1">Download CV</span>
            </a>
            <a href="https://www.linkedin.com/in/prof-n-d-mathur-94529915/" target="_blank" rel="noopener noreferrer" className="text-orange_web-500">LinkedIn</a>
          </div>
        </details>
      </div>
    </nav>
  );
}
