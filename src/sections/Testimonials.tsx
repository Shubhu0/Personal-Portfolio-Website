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
    const [isHovered, setIsHovered] = useState(false);
    const [isManualScrolling, setIsManualScrolling] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle mouse wheel scrolling
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        
        if (scrollContainerRef.current) {
            setIsManualScrolling(true);
            
            const container = scrollContainerRef.current;
            const cardWidth = 400; // Card width + gap
            const maxIndex = testimonials.length - 1;
            
            if (e.deltaY > 0) {
                // Scroll down/right - next testimonial
                const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
                setCurrentIndex(nextIndex);
                container.scrollTo({
                    left: nextIndex * cardWidth,
                    behavior: 'smooth'
                });
            } else {
                // Scroll up/left - previous testimonial
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
                setCurrentIndex(prevIndex);
                container.scrollTo({
                    left: prevIndex * cardWidth,
                    behavior: 'smooth'
                });
            }
            
            // Resume auto-scroll after 3 seconds of no interaction
            setTimeout(() => setIsManualScrolling(false), 3000);
        }
    };

    // Handle touch/mouse dragging for mobile
    const handleMouseDown = () => {
        setIsManualScrolling(true);
        setTimeout(() => setIsManualScrolling(false), 3000);
    };

    // Auto-scroll functionality
    useEffect(() => {
        if (!isHovered && !isManualScrolling) {
            const interval = setInterval(() => {
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth = 400;
                    const maxIndex = testimonials.length - 1;
                    const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
                    
                    setCurrentIndex(nextIndex);
                    container.scrollTo({
                        left: nextIndex * cardWidth,
                        behavior: 'smooth'
                    });
                }
            }, 4000); // Auto-scroll every 4 seconds

            return () => clearInterval(interval);
        }
    }, [isHovered, isManualScrolling, currentIndex]);

    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="WORK EXPERIENCE"
                    title="Previous Professional Experience"
                    description="See all my previous opportunities and how I contributed to each role"
                />

                <div className="mt-12 lg:mt-20 relative">
                    {/* Scroll instruction */}
                    <div className="text-center mb-6">
                        <p className="text-sm text-white/60 animate-pulse">
                            Scroll with your mouse wheel to navigate through experiences
                        </p>
                    </div>

                    {/* Scrollable container with visible scrollbar */}
                    <div 
                        className="overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 testimonials-scroll-container-with-scrollbar cursor-grab active:cursor-grabbing"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        ref={scrollContainerRef}
                    >
                        <div className="flex gap-8 pr-8 flex-none">
                            {testimonials.map((testimonial, testimonialIndex) => (
                                <Card
                                    key={`${testimonial.name}-${testimonialIndex}`}
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
                </div>
            </div>
        </div>
    );
};
