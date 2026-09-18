import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-300 items-center justify-between px-5 sm:px-6">

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-700 md:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="flex items-center gap-3 md:static"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-fuchsia-500 to-pink-600 text-sm font-bold text-white">
            DS
          </span>

          <span className="text-xl font-bold text-[#182238]">
            Dev <span className="text-[#d91b73]">Stack</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm text-[#d91b73]"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm text-[#35415a] hover:text-[#d91b73]"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm text-[#35415a] hover:text-[#d91b73]"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-[#35415a] hover:text-[#d91b73]"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-[#35415a] hover:text-[#d91b73]"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-[#35415a]"
          >
            Sign In
          </a>

          <a
            href="#"
            className="rounded-full bg-[#d91b73] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#bd155f]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-md md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#"
              onClick={closeMenu}
              className="text-sm font-medium text-[#d91b73]"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="text-sm text-[#35415a]"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-sm text-[#35415a]"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm text-[#35415a]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-sm text-[#35415a]"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;