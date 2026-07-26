import { useEffect, useRef, useState } from "react";
import VideoWall from "./VideoWall";
import VideoModal from "./VideoModal";
export default function Showreel({
  showreels,
  moreFilms,
}) {

  
  const servicesRef = useRef(null);
const [wallHeight, setWallHeight] = useState(0);
const [selectedVideo, setSelectedVideo] = useState(null);
const [showMoreFilms, setShowMoreFilms] = useState(false);
useEffect(() => {
  if (!servicesRef.current) return;

  const resizeObserver = new ResizeObserver(() => {
    setWallHeight(servicesRef.current.offsetHeight);
  });

  resizeObserver.observe(servicesRef.current);

  setWallHeight(servicesRef.current.offsetHeight);

  return () => resizeObserver.disconnect();
}, []);
  return (
    <section id="showreel" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.3em] text-sm text-[#8B5E3C] mb-3 text-center">
          CINEMATIC STORIES
        </p>

        <h2 className="text-5xl md:text-6xl font-light font-serif-heading text-center text-gray-900 mb-6">
          Showreel
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Experience moments through motion, emotion, and cinematic storytelling.
        </p>

        <div className="grid lg:grid-cols-5 gap-12 items-stretch">

          {/* LEFT SIDE */}
<div className="lg:col-span-3">

  <div className="space-y-6" ref={servicesRef}>

  <div className="border-b border-gray-200 pb-4">
    <h4 className="font-medium text-gray-900">
      Wedding Films
    </h4>
    <p className="text-gray-500 text-sm mt-1">
      Timeless cinematic memories.
    </p>
  </div>

  <div className="border-b border-gray-200 pb-4">
    <h4 className="font-medium text-gray-900">
      Graduation Films
    </h4>
    <p className="text-gray-500 text-sm mt-1">
      Celebrate every milestone.
    </p>
  </div>

  <div className="border-b border-gray-200 pb-4">
    <h4 className="font-medium text-gray-900">
      Events
    </h4>
    <p className="text-gray-500 text-sm mt-1">
      Capturing energy and atmosphere.
    </p>
  </div>

  <div className="border-b border-gray-200 pb-1">
    <h4 className="font-medium text-gray-900">
      Brand Commercials
    </h4>
    <p className="text-gray-500 text-sm mt-1">
      Stories that elevate your business.
    </p>
  </div>

</div>

   

          </div>

          {/* RIGHT SIDE */}
<VideoWall
  showreels={showreels}
  wallHeight={wallHeight}
  onVideoClick={setSelectedVideo}
/>

        </div>
    {/* CTA */}
<div className="mt-6 flex flex-col-reverse items-center gap-4 lg:flex-row lg:items-center lg:justify-between">

<a
  href="#contact"
  className="w-fit inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-black transition-all duration-300 hover:scale-[1.02]"
>
    Book a Session
  </a>

  <button
    onClick={() => setShowMoreFilms(!showMoreFilms)}
    className="font-medium text-gray-700 hover:text-black transition"
  >
    {showMoreFilms ? "Show Less ↑" : "Explore More Films →"}
  </button>

</div>
{showMoreFilms && (
  <div className="mt-12">
    <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
      More Films
    </h3>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {moreFilms.map((film, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setSelectedVideo(film)}
          className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={film.thumbnail}
              alt={film.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5 ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-5">
            <h4 className="font-medium text-gray-900">
              {film.title}
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              {film.category}
            </p>
          </div>
        </button>
      ))}
    </div>
  </div>
)}
      </div>
      <VideoModal
  isOpen={selectedVideo !== null}
  video={selectedVideo?.video}
  onClose={() => setSelectedVideo(null)}
/>
    </section>
  );
}