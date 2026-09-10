import { useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 py-3 items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>

          <div className="text-xl font-bold">
            <span className="text-gray-900">Dev</span>
            <span className="brand-gradient-text"> Stack</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-violet-600">
              Home
            </a>
          </li>

          <li>
            <a href="#technologies" className="hover:text-violet-600">
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-violet-600">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-violet-600">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-violet-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700">
            Sign In
          </button>

          <button className="brand-gradient-bg text-white px-5 py-2 rounded-full text-sm font-semibold">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden relative flex items-center justify-between px-3 py-3">

        {/* Hamburger Image */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          <img
            src="/hamburger.png"
            alt="Menu"
            className="w-7 h-7 object-contain"
          />
        </button>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="w-9 h-9 rounded-lg brand-gradient-bg flex items-center justify-center text-white font-bold text-sm">
            DS
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-gray-700 whitespace-nowrap">
            Sign In
          </button>

          <button className="brand-gradient-bg text-white px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 shadow-sm">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar