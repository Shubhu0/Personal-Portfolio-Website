"use client";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

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
	}
];

export const TestimonialsSection = () => {
	return (
		<div className="py-16 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="WORK EXPERIENCE"
					title="Previous Professional Experience"
					description="See all my previous opportunities and how I contributed to each role"
				/>

				<div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
					<div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{testimonials.map((testimonial) => (
									<Card
										key={testimonial.name}
										className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
									>
										<div className="flex gap-4 items-center">
											<div>
												<div className="font-semibold">
													{testimonial.name}
												</div>
												<div className="text-sm text-white/40">
													{testimonial.position}
												</div>
											</div>
										</div>
										<p className="mt-4 text-sm md:mt-6 md:text-base">
											{testimonial.text}
										</p>
									</Card>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
