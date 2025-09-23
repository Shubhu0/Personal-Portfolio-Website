"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// All cards will use the .portfolio-card-stack and .portfolio-card classes for seamless styling
import spotifyCloneImg from "@/assets/project-images/Spotify-Clone.png";
import diningConciergeImg from "@/assets/project-images/Dining-Concierge-Chatbot.png";
import depressionDetectionImg from "@/assets/project-images/Depression-Detection.png";

const portfolioProjects = [
	{
		company: "Personal Project",
		year: "June 2022",
		title: "Spotify Clone",
		results: [
			{ title: "Established a comprehensive Spotify Clone that garnered over 5,000 downloads, utilizing the Spotify API and Context API." },
			{ title: "Created a Spotify clone with ReactJS and styled-components, integrating the Spotify API; raised state management using Context API, resulting in a 25% decrease in loading time and boosted user satisfaction." },
			{ title: "Fulfilled functionalities for user login, playlist creation and exploration, searching and skipping tracks, etc." },
		],
		link: "#", // Replace with actual link if available
		image: spotifyCloneImg,
	},
	{
		company: "AWS Cloud Project",
		year: "May 2022",
		title: "Dining Concierge Chatbot",
		results: [
			{ title: "Developed a serverless, AWS-based chatbot leveraging microservice architecture, Lex for conversational interactions, and DynamoDB with S3 bucket frontend hosting to suggest eateries using Yelp data." },
			{ title: "Streamlined chatbot functionality using ElasticSearch, resulting in faster retrieval of restaurant information; decreased average response time from 10 seconds to 5 seconds, enhancing user experience." },
			{ title: "Improved user experience by integrating a smooth notification system, resulting in a 35% increase in user engagement and timely delivery of restaurant recommendations to users' mobile devices." },
		],
		link: "#", // Replace with actual link if available
		image: diningConciergeImg,
	},
	{
		company: "Capstone Project",
		year: "Jan - Apr 2020",
		title: "Depression Detection to Detect the Severity of Depression",
		results: [
			{ title: "Applied a Twitter API data extraction tool with single classification model for cleaning, pre-processing, training, and analysing the mined data from 4000 users." },
			{ title: "Adjusted model accuracy through strategic evaluation methods including confusion matrix analysis, AUC calculation, and ROC curve visualization; implemented a hybrid ensemble model that achieved an exceptional accuracy rate of 98.02%." },
			{ title: "Presented project findings at the National Conference on Recent Development in Automobile and Mechanical Engineering." },
		],
		link: "#", // Replace with actual link if available
		image: depressionDetectionImg,
	},
];

export const ProjectsSection = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeCard, setActiveCard] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const containerRect = containerRef.current.getBoundingClientRect();
				const containerTop = containerRect.top;
				const containerHeight = containerRect.height;
				const windowHeight = window.innerHeight;

				// Calculate scroll progress through the container
				const scrollProgress = Math.max(
					0,
					Math.min(
						1,
						(windowHeight * 0.7 - containerTop) /
							(containerHeight - windowHeight)
					)
				);

				// Determine which card should be active based on scroll progress
				const totalCards = portfolioProjects.length;
				const newActiveCard = Math.floor(scrollProgress * totalCards);
				const clampedActiveCard = Math.max(
					0,
					Math.min(newActiveCard, totalCards - 1)
				);

				setActiveCard(clampedActiveCard);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="pb-16 lg:py-24" id="projects">
			<div className="container">
				<SectionHeader
					eyebrow="Real-world Results"
					title="Featured Projects"
					description="See how I transformed concepts into engaging digital experiences."
				/>

				<div
					ref={containerRef}
					className="mt-10 md:mt-20 relative"
					style={{ height: `${portfolioProjects.length * 100}vh` }}
				>
					{portfolioProjects.map((project, projectIndex) => {
						const isActive = projectIndex === activeCard;
						const isPassed = projectIndex < activeCard;
						const stackOffset = Math.max(0, activeCard - projectIndex);

						return (
							<div
								key={project.title}
								className={`sticky top-16 transition-all duration-500 ease-out ${
									isPassed ? "pointer-events-none" : ""
								}`}
								style={{
									transform: `
                    translateY(${isPassed ? -stackOffset * 8 : projectIndex * 12}px) 
                    scale(${isPassed ? 0.95 - stackOffset * 0.02 : 1 - projectIndex * 0.02})
                  `,
									zIndex: portfolioProjects.length - projectIndex + (isActive ? 10 : 0),
									opacity: isPassed ? 0.3 : 1,
								}}
							>
								<Card
									className={`portfolio-card portfolio-card-stack px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 transition-all duration-500 ${
										isActive ? "portfolio-card-active" : ""
									} ${isPassed ? "portfolio-card-passed" : ""}`}
									style={{
										boxShadow: isActive
											? "0 25px 60px rgba(68, 98, 74, 0.25)"
											: isPassed
												? "0 5px 15px rgba(68, 98, 74, 0.1)"
												: "0 15px 40px rgba(68, 98, 74, 0.15)",
										background: isPassed
											? "linear-gradient(145deg, rgba(189, 162, 141, 0.05), rgba(249, 232, 206, 0.05))"
											: undefined,
									}}
								>
									<div className="lg:grid lg:grid-cols-2 lg:gap-16">
										<div className="lg:pb-16">
											<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
												<span>{project.company}</span>
												<span>&bull;</span>
												<span>{project.year}</span>
											</div>

											<h3 className="font-serif text-2xl md:text-4xl md:mt-5 mt-2">
												{project.title}
											</h3>
											<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
											<ul className="flex flex-col gap-3 mt-4 md:mt-5">
												{project.results.map((result, index) => (
													<li
														key={index}
														className="flex items-start gap-3 text-sm md:text-base text-white/80"
													>
														<span className="mt-1 flex-shrink-0">
															<CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
														</span>
														<span className="leading-relaxed">{result.title}</span>
													</li>
												))}
											</ul>
											<a href={project.link}>
												<button
													className={`bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-opacity duration-300 ${
														!isActive
															? "opacity-50 pointer-events-none"
															: ""
													}`}
												>
													<span>Visit Live Site</span>
													<ArrowUpRightIcon className="size-4" />
												</button>
											</a>
										</div>
										<div className="relative">
											<Image
												src={project.image}
												alt={project.title}
												width={800}
												height={600}
												className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
											/> 
										</div>
									</div>
								</Card>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
