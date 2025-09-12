"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import bookImage2 from "@/assets/images/book-cover-2.jpg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import PythonIcon from "@/assets/icons/icons8-python.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import SqlIcon from "@/assets/icons/database-checkmark-icon.svg";
import AwsIcon from "@/assets/icons/aws-icon.svg";
import SparkIcon from "@/assets/icons/apache_spark-ar21.svg";
import DockerIcon from "@/assets/icons/docker-icon.svg";
import mapImage from "@/assets/images/map-image.jpg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useState } from "react";

export const toolboxItems = [
    {
        title: "Javascript",
        iconType: JavascriptIcon,
    },
    {
        title: "HTML5",
        iconType: HtmlIcon,
    },
    {
        title: "Python",
        iconType: PythonIcon,
    },
    {
        title: "CSS3",
        iconType: CssIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
    {
        title: "SQL",
        iconType: SqlIcon,
    },
    {
        title: "AWS",
        iconType: AwsIcon,
    },
    {
        title: "Apache Spark",
        iconType: SparkIcon,
    },
    {
        title: "Docker",
        iconType: DockerIcon,
    },
];

export const hobbies = [
    {
        title: "Photography",
        emoji: "📸",
        left: "8%",
        top: "12%",
    },
    {
        title: "Gaming",
        emoji: "🎮",
        left: "65%",
        top: "8%",
    },
    {
        title: "Hiking",
        emoji: "🥾",
        left: "12%",
        top: "45%",
    },
    {
        title: "Music",
        emoji: "🎧",
        left: "68%",
        top: "38%",
    },
    {
        title: "Fitness",
        emoji: "🏋️‍♂️",
        left: "8%",
        top: "75%",
    },
    {
        title: "Reading",
        emoji: "📖",
        left: "40%",
        top: "25%",
    },
    {
        title: "Cooking",
        emoji: "👨‍🍳",
        left: "50%",
        top: "68%",
    },
];

// Education data
export const mastersDegree = {
    degree: "Master of Science",
    field: "Computer Science",
    school: "New York University",
    period: "2021 - 2023",
    location: "NYC, NY",
    description:
        "Specialized in Software Engineering and Data Science with focus on machine learning and distributed systems",
};

export const bachelorsDegree = {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    school: "SRM Institute of Science and Technology",
    period: "2016 - 2020",
    location: "Chennai, TN",
    description:
        "Foundation in Computer Science and Programming with emphasis on software development and database systems",
};

export const AboutSection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div id="about" className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A Glimpse Into My World"
                    description="Learn more about who I am, what I do and what inspires me."
                />
                <div className="mt-20 flex flex-col gap-8">
                    {/* First row - Education Section */}
                    <Card className="education-card-main education-card-no-hover">
                        <CardHeader
                            title="Education"
                            description="My academic journey and foundation in computer science"
                            className="mb-8"
                        />

                        {/* Education Timeline */}
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Masters Degree */}
                            <div className="education-item">
                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-[#f9e8ce] leading-tight">
                                        {mastersDegree.degree}
                                    </h3>
                                    <p className="text-lg font-semibold text-[#bda28d] mt-1">
                                        {mastersDegree.field}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-base font-semibold text-[#bda28d]">
                                        {mastersDegree.school}
                                    </p>
                                    <p className="text-sm text-[#8ba888] mt-1">
                                        {mastersDegree.period} • {mastersDegree.location}
                                    </p>
                                </div>

                                <p className="text-sm text-[#bda28d]/90 leading-relaxed">
                                    {mastersDegree.description}
                                </p>
                            </div>

                            {/* Bachelors Degree */}
                            <div className="education-item">
                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-[#f9e8ce] leading-tight">
                                        {bachelorsDegree.degree}
                                    </h3>
                                    <p className="text-lg font-semibold text-[#bda28d] mt-1">
                                        {bachelorsDegree.field}
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-base font-semibold text-[#bda28d]">
                                        {bachelorsDegree.school}
                                    </p>
                                    <p className="text-sm text-[#8ba888] mt-1">
                                        {bachelorsDegree.period} • {bachelorsDegree.location}
                                    </p>
                                </div>

                                <p className="text-sm text-[#bda28d]/90 leading-relaxed">
                                    {bachelorsDegree.description}
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Second row - Books and Toolbox */}
                    <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1 hover:rotate-0 hover:transform-none">
                            <CardHeader
                                title="My Reads"
                                description="Explore the books that helped shape my perspectives."
                            />
                            <div className="w-40 flex mx-auto justify-center mt-2 space-x-4 md:mt-0">
                                <Image src={bookImage} alt="Book cover" />
                                <Image src={bookImage2} alt="Book cover 2" />
                            </div>
                        </Card>

                        <Card className="h-[320px] md:col-span-3 lg:col-span-2 hover:rotate-0 hover:transform-none toolbox-card">
                            <CardHeader
                                title="My Toolbox"
                                description="Explore the technologies and tools I've used and learnt."
                                className=""
                            />
                            <div
                                className="mt-6 overflow-hidden toolbox-container"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <ToolboxItems
                                    items={toolboxItems}
                                    isPaused={isHovered}
                                />
                                <ToolboxItems
                                    items={toolboxItems}
                                    className="mt-6"
                                    itemsWrapperClassName="[animation-direction:reverse]"
                                    isPaused={isHovered}
                                />
                            </div>
                        </Card>
                    </div>

                    {/* Third row - Hobbies and Map */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 hover:rotate-0 hover:transform-none">
                            <CardHeader
                                title="Beyond The Code"
                                description="Explore my hobbies and interests beyond the digital world."
                                className="px-6 py-6"
                            />
                            <div className="flex-1 relative px-8 py-8 min-h-[240px]">
                                {hobbies.map((hobby) => (
                                    <div
                                        key={hobby.title}
                                        className="inline-flex gap-2 px-5 py-2.5 bg-gradient-to-r from-[#bda28d] to-[#f9e8ce] rounded-full absolute z-10 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-20"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                    >
                                        <span className="font-medium text-gray-900 text-sm">
                                            {hobby.title}
                                        </span>
                                        <span className="text-base">{hobby.emoji}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1 hover:rotate-0 hover:transform-none">
                            <Image
                                src={mapImage}
                                alt="map"
                                className="h-full w-full object-cover"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};