import { Menu, X } from "lucide-react";
export default function Navbar({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-serif-heading relative">
          pulitzerpriest
          <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-white"></span>
        </div>

<button
  className="
    md:hidden
    p-2
    text-white
    transition-transform duration-300
    hover:scale-110
  "
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
</button>

        <ul className="hidden md:flex space-x-8 text-sm">
          <li>
            <a
              href="#home"
              className={`${activeSection === "home" ? "text-white font-medium" : "text-gray-300"
                } hover:text-white transition`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              className={`${activeSection === "services" ? "text-white font-medium" : "text-gray-300"
                } hover:text-white transition`}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className={`${activeSection === "gallery" ? "text-white font-medium" : "text-gray-300"
                } hover:text-white transition`}
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`${activeSection === "about" ? "text-white font-medium" : "text-gray-300"
                } hover:text-white transition`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#showreel"
              className={`${activeSection === "showreel" ? "text-white font-medium" : "text-gray-300"
                } hover:text-white transition`}
            >
              Showreel
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`${activeSection === "contact" ? "text-white font-medium" : "text-gray-300"
                } hover:text-white transition`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-center text-sm">
          <li>
            <a href="#home" className="block py-1 text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#gallery" className="block py-1 text-white hover:text-gray-300">
              Gallery
            </a>
          </li>
          <li>
            <a href="#about" className="block py-1 text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#showreel" className="block py-1 text-white hover:text-gray-300">
              Showreel
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-1 text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}