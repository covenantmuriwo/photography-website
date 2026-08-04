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
            <a href="#testimonials"
              className={`${activeSection === "testimonials" ? "text-white font-medium" : "text-gray-300"
                } hover:text-white transition`}
            >
              Testimonials
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
{/* Background Overlay */}
<div
  onClick={() => setIsMenuOpen(false)}
  className={`
    fixed inset-0
    md:hidden
    z-40
    bg-black/30
    backdrop-blur-sm
    transition-opacity
    duration-300

    ${
      isMenuOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `}
/>

{/* Sliding Drawer */}
<div
  className={`
    fixed
    top-0
    right-0
    h-screen
    w-[82%]
    max-w-sm
    z-50

    transition-transform
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]

    ${
      isMenuOpen
        ? "translate-x-0"
        : "translate-x-full"
    }
  `}
>

  <div
    className="
      h-full

      rounded-l-3xl

      bg-gradient-to-br
      from-gray-900/85
via-gray-900/75
to-gray-900/70

      backdrop-blur-3xl

      border-l
      border-white/20

      shadow-[-20px_0_60px_rgba(0,0,0,0.35)]

      flex
      flex-col
      p-8
    "
  >

    {/* Close Button */}

    <div className="flex justify-end">

      <button
        onClick={() => setIsMenuOpen(false)}
        className="
          rounded-full
          bg-white/10
          p-2
          text-white
          hover:bg-white/20
          transition
        "
      >
        <X size={24}/>
      </button>

    </div>

    {/* Menu */}

    <ul className="mt-12 space-y-2">

      <li>
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="block rounded-xl px-5 py-4 text-white transition hover:bg-white/10"
        >
          Home
          
        </a>
      </li>

      <li>
        <a
          href="#services"
          onClick={() => setIsMenuOpen(false)}
          className="block rounded-xl px-5 py-4 text-white transition hover:bg-white/10"
        >
          Services
          
        </a>
      </li>

      <li>
        <a
          href="#gallery"
          onClick={() => setIsMenuOpen(false)}
          className="block rounded-xl px-5 py-4 text-white transition hover:bg-white/10"
        >
          Gallery
          
        </a>
      </li>

      <li>
        <a
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          className="block rounded-xl px-5 py-4 text-white transition hover:bg-white/10"
        >
          About
          
        </a>
      </li>

      <li>
        <a
          href="#showreel"
          onClick={() => setIsMenuOpen(false)}
          className="block rounded-xl px-5 py-4 text-white transition hover:bg-white/10"
        >
          Showreel
          
        </a>
      </li>

      <li>
        <a
          href="#testimonials"
          onClick={() => setIsMenuOpen(false)}
          className="block rounded-xl px-5 py-4 text-white transition hover:bg-white/10"
        >
          Testimonials
          
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="block rounded-xl px-5 py-4 text-white transition hover:bg-white/10"
        >
          Contact
          
        </a>
      </li>

    </ul>

  </div>

</div>
      
    </nav>
  );
}
