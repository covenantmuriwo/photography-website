import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

export default function ReviewSwiper({ testimonials }) {
    const [current, setCurrent] = useState(0);
    const [showHint, setShowHint] = useState(true);

    const next = () =>
        setCurrent((prev) => (prev + 1) % testimonials.length);

    const previous = () =>
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const handleDragEnd = (_, info) => {
        const threshold = 70;

        if (Math.abs(info.offset.x) < threshold) return;

        setShowHint(false);

        if (info.offset.x < 0) {
            next();
        } else {
            previous();
        }
    };

    const review = testimonials[current];

    return (
        <div className="w-full">

            {/* Swipe Hint */}
            <AnimatePresence>

                {showHint && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center mb-4 text-sm text-gray-500"
                    >
                        ← Swipe →
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Review Card */}
            <AnimatePresence mode="wait">

                <motion.div
                    key={current}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 28,
                    }}
                    className="cursor-grab active:cursor-grabbing"
                >

                    <TestimonialCard review={review} />

                </motion.div>

            </AnimatePresence>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-5">

                {testimonials.map((_, index) => (

                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-300 rounded-full ${
                            current === index
                                ? "w-6 h-2 bg-gray-900"
                                : "w-2 h-2 bg-gray-300"
                        }`}
                    />

                ))}

            </div>

        </div>
    );
}