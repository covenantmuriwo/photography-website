import TestimonialWall from "./TestimonialWall";
import { useEffect, useRef, useState } from "react";
import ReviewSwiper from "./ReviewSwiper";

export default function Testimonials({ testimonials }) {
    const leftRef = useRef(null);
    const [wallHeight, setWallHeight] = useState(0);

    useEffect(() => {
        if (!leftRef.current) return;

        const resizeObserver = new ResizeObserver(() => {
            setWallHeight(leftRef.current.offsetHeight);
        });

        resizeObserver.observe(leftRef.current);
        setWallHeight(leftRef.current.offsetHeight);

        return () => resizeObserver.disconnect();
    }, []);
    return (
        <section id="testimonials" className="py-16 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">

                    <p className="uppercase tracking-[0.3em] text-sm text-[#8B5E3C] mb-3 text-center">
                        TRUSTED BY CLIENTS
                    </p>

                    <h2 className="text-5xl md:text-6xl font-light font-serif-heading text-gray-900 mb-6">
                        Kind Words
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Every review represents a story, a celebration, and a memory
                        captured forever.
                    </p>

                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-stretch">

                    <div className="lg:col-span-3">

                        <div className="space-y-6" ref={leftRef}>

                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                                    <span className="text-4xl font-light text-gray-900">5.0</span>
                                </div>

                                <p className="text-gray-500">
                                    Based on verified client experiences.
                                </p>
                            </div>

                            <div className="border-b border-gray-200 pb-4">
                                <h4 className="font-medium text-gray-900">
                                    Professional
                                </h4>

                                <p className="text-gray-500 text-sm mt-1">
                                    From booking to final delivery.
                                </p>
                            </div>

                            <div className="border-b border-gray-200 pb-4">
                                <h4 className="font-medium text-gray-900">
                                    Reliable
                                </h4>

                                <p className="text-gray-500 text-sm mt-1">
                                    Always on time and easy to work with.
                                </p>
                            </div>

                            <div className="border-b border-gray-200 pb-1">
                                <h4 className="font-medium text-gray-900">
                                    Cinematic Quality
                                </h4>

                                <p className="text-gray-500 text-sm mt-1">
                                    Beautiful storytelling through every frame.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                   <>
  {/* Desktop */}
  <div className="hidden lg:block lg:col-span-2">
    <TestimonialWall
      testimonials={testimonials}
      wallHeight={wallHeight}
    />
  </div>

  {/* Mobile */}
  <div className="lg:hidden">
    <ReviewSwiper testimonials={testimonials} />
  </div>
</>

                </div>
                {/* CTA */}
                <div className="pt-4 flex justify-center lg:justify-start">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-black transition-all duration-300 hover:scale-[1.02]"
                        
                    >
                        Leave a Review
                    </a>
                </div>
            </div>

        </section>
    );
}