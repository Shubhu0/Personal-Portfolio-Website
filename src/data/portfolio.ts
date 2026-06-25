export type Project = {
  num: string;
  meta: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    num: "01",
    meta: "Serverless AI Agent · 2023",
    title: "Dining Concierge Chatbot",
    description:
      "An end-to-end agentic restaurant recommender on AWS — Lambda, Lex, DynamoDB, Elasticsearch and SNS over Yelp data. Designed the conversation flows and cut retrieval latency 10s → 5s; a real-time notification pipeline lifted engagement 35%.",
    tags: ["AWS Lambda", "Lex", "DynamoDB", "Elasticsearch"],
    href: "https://github.com/Shubhu0/Dining-Concierge-Demeter",
    image: "/mock-dining.jpg",
    imageAlt: "Dining Concierge Chatbot",
  },
  {
    num: "02",
    meta: "LLM + Vector Search · 2023",
    title: "Semantic Book Recommender",
    description:
      "An LLM-powered semantic recommendation engine — LangChain, FAISS and OpenAI. Ran controlled experiments to validate ranking hypotheses, improving accuracy 35% and cutting query latency 1.2s → 400ms; deployed as a containerized AWS service with observability.",
    tags: ["LangChain", "FAISS", "OpenAI", "AWS"],
    href: "https://github.com/Shubhu0",
    image: "/mock-semantic.jpg",
    imageAlt: "Semantic Book Recommender interface",
  },
  {
    num: "03",
    meta: "Full-Stack App · 2024",
    title: "StrideWise",
    description:
      "A comprehensive running-coaching application — a React + TypeScript frontend with a Node.js / Express backend — that generates adaptive training plans and tracks progress for runners.",
    tags: ["React", "TypeScript", "Node.js", "Express"],
    href: "https://github.com/Shubhu0/StrideWise",
    image: "/mock-stridewise.jpg",
    imageAlt: "StrideWise running dashboard",
  },
  {
    num: "04",
    meta: "Mobile Product · 2024",
    title: "Dial It In",
    description:
      "Defined the product vision, designed the UX flows, and shipped a mobile coffee-optimization app for home baristas — prioritizing features from user testing and real usage patterns.",
    tags: ["TypeScript", "Product", "UX Design", "Mobile"],
    href: "https://github.com/Shubhu0/Dial-It-In",
    image: "/mock-dialitin.jpg",
    imageAlt: "Dial It In coffee app",
  },
  {
    num: "05",
    meta: "Big Data ML · 2022",
    title: "Amazon Recommendation System",
    description:
      "A recommendation engine running collaborative filtering over a 500,000+ row Amazon dataset. Used Spark and Spark ML to extract, clean and preprocess the data, then generate ranked recommendations at scale.",
    tags: ["Apache Spark", "Spark ML", "Python", "500K+ rows"],
    href: "https://github.com/Shubhu0/Amazon-Recommendation-System",
    image: "/mock-amazon.jpg",
    imageAlt: "Amazon recommendation system",
  },
  {
    num: "06",
    meta: "Personal Project · 2022",
    title: "Spotify Clone",
    description:
      "A full Spotify clone built with ReactJS, styled-components and the Spotify API. Context-API state management cut loading time 25%. Login, playlist creation, search and playback — 5,000+ downloads.",
    tags: ["ReactJS", "Spotify API", "Context API", "styled-components"],
    href: "https://github.com/Shubhu0/Spotify-Clone",
    image: "/mock-spotify.jpg",
    imageAlt: "Spotify Clone",
  },
];

export type Experience = {
  company: string;
  period: string;
  role: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Moody's Corporation",
    period: "Dec 2023 – Present · Charlotte, NC",
    role: "Associate Software Engineer",
    description:
      "Built scalable backend services for financial-analytics platforms and led an analyst-dashboard redesign from discovery to release — lifting workflow efficiency 30% and deployment stability 35% with Cypress automation.",
  },
  {
    company: "BMC Software",
    period: "Sep 2022 – May 2023 · Houston, TX",
    role: "Product Development Intern",
    description:
      "Built a Risk Assessment Dashboard (Python + React) over 12,000+ Jira records, turning project-health data into executive-ready narratives — improving monitoring efficiency 40% and cutting vulnerability surface 25%.",
  },
  {
    company: "Motilal Oswal",
    period: "Jan 2020 – May 2020 · India",
    role: "Data Science Intern",
    description:
      "Built an OCR pipeline with 97% accuracy across 20,000+ documents and resolved 50+ chatbot issues — improving reliability and reducing support load 40%.",
  },
];

export type Education = {
  index: string;
  degree: string;
  school: string;
  period: string;
  description: string;
};

export const education: Education[] = [
  {
    index: "01",
    degree: "M.S. Computer Science",
    school: "New York University",
    period: "2021 – 2023 · NYC, NY",
    description:
      "Specialised in Software Engineering & Data Science with a focus on machine learning and distributed systems.",
  },
  {
    index: "02",
    degree: "B.E. Information Technology",
    school: "SRM Institute of Science & Technology",
    period: "2016 – 2020 · Chennai, TN",
    description:
      "Foundation in computer science with emphasis on software development and database systems.",
  },
];

export type Tool = { label: string; accent?: boolean };

export const toolbox: Tool[] = [
  { label: "Python" },
  { label: "TypeScript" },
  { label: "JavaScript" },
  { label: "Java" },
  { label: "SQL" },
  { label: "GraphQL" },
  { label: "React" },
  { label: "Node.js" },
  { label: "Spring Boot" },
  { label: "PostgreSQL" },
  { label: "DynamoDB" },
  { label: "Elasticsearch" },
  { label: "LangChain", accent: true },
  { label: "OpenAI", accent: true },
  { label: "FAISS", accent: true },
  { label: "PyTorch", accent: true },
  { label: "TensorFlow", accent: true },
  { label: "AWS" },
  { label: "Docker" },
  { label: "Cypress" },
];

export type Certification = { org: string; name: string };

export const certifications: Certification[] = [
  { org: "Google", name: "Data Analytics" },
  { org: "Google", name: "Product Management" },
  { org: "AWS", name: "Cloud Practitioner Essentials" },
  { org: "Udemy", name: "Agentic AI" },
];

export type Book = {
  category: string;
  title: string;
  author: string;
  color: "ink" | "accent";
  rotate: number;
};

export const books: Book[] = [
  { category: "Habits", title: "Atomic Habits", author: "James Clear", color: "ink", rotate: -3 },
  { category: "Psychology", title: "The Mountain Is You", author: "Brianna Wiest", color: "accent", rotate: 2 },
  { category: "Memoir", title: "Tuesdays with Morrie", author: "Mitch Albom", color: "accent", rotate: -2 },
  { category: "Fiction", title: "The Midnight Library", author: "Matt Haig", color: "ink", rotate: 3 },
];

export const hobbies: string[] = [
  "Photography 📸",
  "Gaming 🎮",
  "Hiking 🥾",
  "Music 🎧",
  "Fitness 🏋️",
  "Reading 📖",
  "Cooking 👨‍🍳",
];

export const social = {
  github: "https://github.com/Shubhu0",
  linkedin: "https://www.linkedin.com/in/shubhankar-mishra23/",
  twitter: "https://x.com/shubhankar_m98?s=21",
  instagram: "https://www.instagram.com/shubhankar.m",
};
