// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Showreel from "./components/Showreel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hero slider
  const [currentHero, setCurrentHero] = useState(0);
  const [showreelLightboxOpen, setShowreelLightboxOpen] = useState(false);
  const [showreelMedia, setShowreelMedia] = useState([]);
  const [showreelCurrentMedia, setShowreelCurrentMedia] = useState(0);

  const heroImages = [
    {
      src: "/hero/hero-1.jpg",
      position: "center",
    },
    {
      src: "/hero/hero-2.jpg",
      position: "center"
    },
    {
      src: "/hero/hero-3.jpg",
      position: "center",
    },

  ];

  // Robust auto-slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Scroll-based active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "gallery", "about", "showreel", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqeavryd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const galleryImages = [
    {
      src: "/images/photo-1.webp",
      alt: "Professional portrait photography session in Mohali, Punjab.",
      isNew: true,
    },
    {
      src: "/images/photo-2.jpeg",
      alt: "Graduation photography session at Quest Group of Institutions, Mohali.",
      isNew: true,
    },
    {
      src: "/images/photo-3.jpg",
      alt: "Professional portrait photography with cinematic styling.",
      isNew: true,
    },
    {
      src: "/images/photo-5.jpg",
      alt: "Elegant portrait photography session by Pulitzer Priest Photography.",
      isNew: true,
    },
    {
      src: "/images/photo-6.jpg",
      alt: "Beautiful maternity photography session celebrating motherhood.",
      isNew: true,
    },
    {
      src: "/images/photo-7.jpg",
      alt: "Timeless wedding photography capturing love and emotion.",
      isNew: true,
    },
    {
      src: "/images/photo-8.jpg",
      alt: "Outdoor portrait photography capturing natural expressions in Mohali.",
      isNew: true,
    },
    {
      src: "/images/photo-9.webp",
      alt: "Professional graduation portrait celebrating academic achievement.",
      isNew: false,
    },
    {
      src: "/images/photo-10.webp",
      alt: "Cinematic graduation photography by Pulitzer Priest Photography.",
      isNew: true,
    },
    {
      src: "/images/photo-11.jpg",
      alt: "Birthday photography session capturing joyful celebrations in Mohali.",
      isNew: true,
    },
    {
      src: "/images/photo-12.webp",
      alt: "Graduation photography capturing memorable moments in Punjab.",
      isNew: false,
    },
    {
      src: "/images/photo-13.webp",
      alt: "Students celebrating graduation with Pulitzer Priest Photography.",
      isNew: false,
    },
  ];
  const showreels = [
    {
      title: "Graduation Film",
      category: "Graduation",
      duration: "2:34",
      thumbnail: "/showreel/graduation.webp",
      description: "...",
      video: "/showreel/graduation.mp4",
      height: "h-[300px]",
    },

    {
      title: "The Night Comes Alive",
      category: "Event Film",
      duration: "01:10",
      thumbnail: "/showreel/dj-event.jpg",
      description: "...",
      video: "/showreel/dj-event.mp4",
      height: "h-[300px]",
    },

    {
      title: "Create & Inspire",
      category: "Creative Content",
      duration: "00:11",
      thumbnail: "/showreel/content.jpg",
      description: "...",
      video: "/showreel/content.mp4",
      height: "h-[300px]",
    },
  ];

  const moreFilms = [
    {
      title: "Rhythm & Motion",
      category: "Music Video",
      thumbnail: "/showreel/music-video.jpg",
      video: "/showreel/music-video.mp4",
    },

    {
      title: "Campus Celebration",
      category: "Graduation",
      thumbnail: "/showreel/graduation2.webp",
      video: "/showreel/graduation2.mp4",
    },
    {
      title: "Campus Celebration",
      category: "Graduation",
      thumbnail: "/showreel/graduation4.webp",
      video: "/showreel/graduation4.mp4",
    },

    {
      title: "Campus Celebration",
      category: "Graduation",
      thumbnail: "/showreel/graduation3.webp",
      video: "/showreel/graduation3.mp4",
    },
  ];
  const testimonials = [
  {
    name: "Sarah M.",
    service: "Graduation Session",
    rating: 5,
    review:
      "Absolutely incredible! Every special moment was captured beautifully and professionally.",
  },
  {
    name: "Brian T.",
    service: "Birthday Celebration",
    rating: 5,
    review:
      "The photos exceeded our expectations. Friendly, creative and very reliable.",
  },
  {
    name: "Anita K.",
    service: "Content Creation",
    rating: 5,
    review:
      "Amazing attention to detail. The final videos looked cinematic and polished.",
  },
  {
    name: "Kelvin P.",
    service: "Wedding Film",
    rating: 5,
    review:
      "We couldn't have asked for a better team. Every emotion was captured perfectly.",
  },
];

  return (
    <>
     
      {/* Navigation */}
       <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

     <Hero
        heroImages={heroImages}
        currentHero={currentHero}
      />

       <Services />

      <Gallery
        galleryImages={galleryImages}
        currentImage={currentImage}
        lightboxOpen={lightboxOpen}
        setCurrentImage={setCurrentImage}
        setLightboxOpen={setLightboxOpen}
      />
      

      <About />

      <Showreel
        showreels={showreels}
        moreFilms={moreFilms}
        setShowreelMedia={setShowreelMedia}
        setShowreelCurrentMedia={setShowreelCurrentMedia}
        setShowreelLightboxOpen={setShowreelLightboxOpen}
      />

      <Testimonials
        testimonials={testimonials}
      />

      <Contact
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
      />

      <Footer />

      {/* Main Gallery Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-light"
            onClick={() => setLightboxOpen(false)}
          >
            &times;
          </button>

          <button
            className="absolute left-6 text-white text-2xl md:text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
            }}
          >
            ‹
          </button>

          <img
            src={galleryImages[currentImage].src}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 text-white text-2xl md:text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}