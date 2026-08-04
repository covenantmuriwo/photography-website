export default function TestimonialCard({ review }) {
   return (
    <div className="relative bg-white rounded-[28px] border border-[#E9E2DA] shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 h-[340px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]">

        {/* Decorative Quote */}
        <div className="absolute top-5 right-6 text-[72px] leading-none font-serif text-[#8B5E3C]/10 select-none">
            ❝
        </div>

        {/* Review */}
        <p className="relative text-gray-700 text-[16px] leading-7 italic font-light pr-8 flex-1 overflow-hidden">
            "{review.review}"
        </p>

        <div>

            {/* Stars */}
            <div className="flex gap-1 text-[#C8A96A] text-lg mb-5">
                {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index}>★</span>
                ))}
            </div>

            <div className="h-px bg-gradient-to-r from-[#8B5E3C]/30 to-transparent mb-5"></div>

            {/* Client */}
            <h4 className="font-semibold text-gray-900 tracking-wide">
                {review.name}
            </h4>

            <p className="text-sm text-[#8B5E3C] mt-1">
                {review.service}
            </p>

        </div>

    </div>
);
}