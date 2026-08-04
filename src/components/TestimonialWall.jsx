import TestimonialCard from "./TestimonialCard";

export default function TestimonialWall({
  testimonials,
  wallHeight,
}) {
  const looped = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const leftColumn = looped;
  const rightColumn = [...looped].reverse();

  return (
    <div className="lg:col-span-2">

      {/* ================= DESKTOP ================= */}
      <div
        className="hidden lg:block relative overflow-hidden"
        style={{ height: wallHeight }}
      >
        <div className="grid grid-cols-2 gap-5 h-full">

          {/* Left */}
          <div className="showreel-column-up flex flex-col gap-5">
            {leftColumn.map((review, index) => (
              <TestimonialCard 
                key={`left-${index}`}
                review={review}
              />
            ))}
          </div>

          {/* Right */}
          <div className="showreel-column-down flex flex-col gap-5">
            {rightColumn.map((review, index) => (
              <TestimonialCard
                key={`right-${index}`}
                review={review}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Mobile */}
<div className="lg:hidden">

    <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-500 animate-pulse">
        <span>←</span>
        <span>Swipe to read more reviews</span>
        <span>→</span>
    </div>

    <div className="relative w-full overflow-hidden">

        <div className="flex overflow-x-auto gap-4 pb-3 scrollbar-hide">

            {testimonials.map((review, index) => (
                <div
                    key={index}
                    className="min-w-[280px] max-w-[280px] flex-none"
                >
                    <TestimonialCard review={review} />
                </div>
            ))}

        </div>

    </div>

</div>
    </div>
  );
}