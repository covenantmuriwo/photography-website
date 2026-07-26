export default function Hero() {
  return (
    <>
<section
  id="home"
  className="min-h-screen relative overflow-hidden pt-20"
>
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  poster="/images/hero-poster.jpg"
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-reel.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/60 z-10"></div>
        {/* ✅ Subtle overlay restored — keeps text readable without hiding images */}
        {/*<div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>*/}
<div className="relative z-20 min-h-screen flex flex-col md:flex-row md:items-center justify-start md:justify-center px-6 pt-8 md:pt-0">
  <div className="text-center max-w-3xl animate-fade-in-up mt-12 md:mt-0">
<div className="mb-4">
  <p className="text-sm md:text-base uppercase tracking-[0.35em] text-gray-300 mb-4">
    Pulitzer Priest Photography
  </p>

  <h1 className="text-5xl md:text-7xl font-light leading-tight text-white font-serif-heading">
     Your Story. 
    <br />
    Beautifully Captured.
  </h1>
</div>
    <p className="text-gray-200 text-lg mb-8">
      Graduations • Celebrations • Portraits • Content Creation • Weddings
    </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
    <a
      href="#contact"
      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition transform hover:-translate-y-0.5"
    >
      Book a Session
    </a>

     <a
      href="#gallery"
      className="inline-block border border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-gray-900 transition transform hover:-translate-y-0.5"
    >
      View Gallery
    </a>

  </div>
  </div>
</div>
      </section>
    </>
  );
}