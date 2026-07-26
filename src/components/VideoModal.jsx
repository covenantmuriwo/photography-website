export default function VideoModal({ isOpen, video, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white text-2xl flex items-center justify-center hover:bg-black transition"
        >
          ×
        </button>

        {/* Video */}
        <video
  src={video}
  controls
  autoPlay
  playsInline
  className="w-full max-h-[80vh] object-contain rounded-2xl bg-black"
/>
      </div>
    </div>
  );
}