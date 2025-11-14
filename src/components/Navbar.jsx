import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">DR</h1>

        <div className="flex items-center space-x-4 relative">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>

          {/* NEW — My Writing (links to Medium) */}
          <a 
            href="https://medium.com/@rusekd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            My Writing
          </a>

          {/* Dropdown for extra sections */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-blue-600 focus:outline-none"
            >
              More ▾
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
                <a
                  href="#education"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Education
                </a>
                <a
                  href="#coursework"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Relevant Coursework
                </a>
                <a
                  href="#aboutme"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  About Me
                </a>
                <a
                  href="#resume"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
