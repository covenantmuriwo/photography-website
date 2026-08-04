export default function Gallery({
   galleryImages,
   currentImage,
   lightboxOpen,
   setCurrentImage,
   setLightboxOpen,
}) { 
  const displayedImages = galleryImages;
    return (
    <>
    <section id="gallery" className="py-16 px-6 scroll-mt-4 md:scroll-mt-0">
<p className="uppercase tracking-[0.3em] text-sm text-[#8B5E3C] mb-3 text-center">
  CURATED GALLERY
</p>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4 text-gray-800 font-serif-heading">
            Selected Work
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">A collection of moments that celebrate milestones, preserve memories, and tell authentic stories through photography and film.</p>
          
<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
  {displayedImages.map((item, i) => (
    <div key={i} className="break-inside-avoid group relative">
      {/* "New" Badge */}
      {item.isNew && (
        <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-2xl z-10 font-medium">
          New Work
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setCurrentImage(i);
          setLightboxOpen(true);
        }}
        className="w-full text-left"
      >
        <div className="overflow-hidden rounded-sm shadow-lg transition-transform duration-500 group-hover:shadow-2xl">
          <img
            src={item.src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </button>
    </div>
  ))}
</div>
        </div>
      </section>
</>
    );
}