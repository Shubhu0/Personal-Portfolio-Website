"use client";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment, useRef, useEffect, useState } from "react";

const testimonials = [
    {
        name: "Moody's Ratings",
        position: "Associate Software Engineer",
        text: "Developed and maintained scalable backend microservices in Java/Spring Boot used by global financial analysts, improving platform reliability."
    },
    {
        name: "BMC Software",
        position: "Product Development Intern",
        text: "Engineered a highly efficient Risk Assessment Dashboard utilizing Python, Linux, HTML, CSS, and React; boosted product risk monitoring efficiency by 40% and enabled real-time tracking of progression and risk scores for over 100 products."
    },
    {
        name: "New York University Centre of Data",
        position: "Teaching Assistant",
        text: "Facilitated Big Data course professors with extensive support by resolving student difficulties, encouraging class participation, and delivering constructive feedback, resulting in a motivating and enriching educational experience for 190 students."
    },
    {
        name: "Motilal Oswal Financial Services Ltd",
        position: "Data Science Intern",
        text: "Created a program converting 20,000 customer forms into segmented images, enabling data extraction, and redaction of sensitive information. Deployed an OCR system with 97% accuracy for SSN identification, improving data security.",
    },
	{
        name: "Reliance Industries Ltd",
        position: "Software Development Intern",
        text: "Worked on the Jio Net Velocity app, by collecting the customer data through the applications database, and then write codes in Python to segregate and sort the data according to the specific requirements.",
    }
];

export const TestimonialsSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Infinite autoscroll
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => {
                    const next = (prev + 1) % testimonials.length;
                    // Scroll to the next card
                    if (scrollContainerRef.current) {
                        const cardWidth = 400; // Card width + gap
                        scrollContainerRef.current.scrollTo({
                            left: next * cardWidth,
                            behavior: 'smooth',
                        });
                    }
                    return next;
                });
            }, 6000); // 6 seconds per testimonial
            return () => clearInterval(interval);
        }
    }, [isPaused]);


    // Pause on hover or click, resume on mouse leave
    const handlePause = () => setIsPaused(true);
    const handleResume = () => setIsPaused(false);

    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="WORK EXPERIENCE"
                    title="Previous Professional Experience"
                    description="See all my previous opportunities and how I contributed to each role"
                />

                <div className="mt-12 lg:mt-20 relative">
                    <div className="text-center mb-6">
                        <p className="text-sm text-white/60 animate-pulse">
                            Scrolls automatically. Hover or click a card to pause.
                        </p>
                    </div>
                    <div
                        className="overflow-x-auto overflow-y-hidden py-4 -my-4 testimonials-scroll-container-with-scrollbar cursor-grab active:cursor-grabbing"
                        ref={scrollContainerRef}
                        onMouseEnter={handlePause}
                        onMouseLeave={handleResume}
                    >
                        <div className="flex gap-8 pr-8 flex-none">
                            {testimonials.map((testimonial, testimonialIndex) => (
                                <Card
                                    key={`${testimonial.name}-${testimonialIndex}`}
                                    onClick={() => {
                                        setCurrentIndex(testimonialIndex);
                                        setIsPaused(true);
                                        if (scrollContainerRef.current) {
                                            const cardWidth = 400;
                                            scrollContainerRef.current.scrollTo({
                                                left: testimonialIndex * cardWidth,
                                                behavior: 'smooth',
                                            });
                                        }
                                    }}
                                    className={`max-w-xs md:p-8 p-6 md:max-w-md transition-all duration-500 flex-shrink-0 ${
                                        testimonialIndex === currentIndex
                                            ? 'scale-105 hover:-rotate-3 shadow-2xl'
                                            : 'scale-95 opacity-70 hover:opacity-90'
                                    }`}
                                >
                                    <div className="flex gap-4 items-center">
                                        <div>
                                            <div className="font-semibold text-[#f9e8ce]">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-[#bda28d]">
                                                {testimonial.position}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-sm md:mt-6 md:text-base text-[#bda28d]/90">
                                        {testimonial.text}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* No resume button, animation resumes on mouse leave */}
                </div>
            </div>
        </div>
    );
};
