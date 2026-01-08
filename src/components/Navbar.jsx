import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-slate-900/80">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Brand */}
        <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          Frontend Developer
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <li>
            <a href="#home" className="hover:text-blue-500">
              Beranda
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-500">
              Pendidikan
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-500">
              Pengalaman Kerja
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500">
              Skill
            </a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-blue-500">
              Sertifikasi
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">
              Proyek
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Kontak
            </a>
          </li>
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Switch */}
          <button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : ""
              }`}
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </span>
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-slate-900">
          <ul className="flex flex-col p-4 gap-4 text-gray-700 dark:text-gray-200">
            <li>
              <a href="#home" onClick={() => setOpen(false)}>
                Beranda
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setOpen(false)}>
                Pendidikan
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setOpen(false)}>
                Pengalaman Kerja
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skill
              </a>
            </li>
            <li>
              <a href="#certifications" onClick={() => setOpen(false)}>
                Sertifikasi
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Proyek
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
