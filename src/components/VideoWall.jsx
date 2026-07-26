import "./showreel.css";

export default function VideoWall({
  showreels,
  wallHeight,
  onVideoClick,
}) {
const looped = [
  ...showreels,
  ...showreels,
  ...showreels,
  ...showreels,
];

const leftColumn = looped;

const rightColumn = [...looped].reverse();

  return (
    <div className="lg:col-span-2">
      <div
  className="relative overflow-hidden"
  style={{ height: wallHeight }}
>
        <div className="grid grid-cols-2 gap-5 h-full">

          {/* Left */}
          <div className="showreel-column-up flex flex-col gap-5">
            {leftColumn.map((film, index) => (
                    <button
                      key={`left-${index}`}
                      type="button"
                      onClick={() => onVideoClick(film)}
                      className="group relative block overflow-hidden rounded-2xl text-left cursor-pointer"
                    >
                <div className="relative aspect-[4/5]">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition duration-300 group-hover:scale-110">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>

                    </div>
                  </div>
                </div>

                    <div className="absolute bottom-5 left-5 z-20">
                        <p className="text-white font-medium">
                            {film.title}
                        </p>

                        <p className="text-white/70 text-sm">
                            {film.category}
                        </p>
                    </div>
              </button>
            ))}
          </div>

          {/* Right */}
          <div className="showreel-column-down flex flex-col gap-5">
            {rightColumn.map((film, index) => (
              <button
                  key={`right-${index}`}
                  type="button"
                  onClick={() => onVideoClick(film)}
                  className="group relative block overflow-hidden rounded-2xl text-left cursor-pointer"
                >

                <div className="relative aspect-[4/5]">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition duration-300 group-hover:scale-110">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>

                    </div>
                  </div>
                </div>

                    <div className="absolute bottom-5 left-5 z-20">
                        <p className="text-white font-medium">
                            {film.title}
                        </p>

                        <p className="text-white/70 text-sm">
                            {film.category}
                        </p>
                    </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}