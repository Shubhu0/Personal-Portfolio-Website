"use client";

import { useState, useEffect } from 'react';

interface TextCycleProps {
  words: string[];
  className?: string;
  interval?: number;
}

export const TextCycle = ({ words, className = "", interval = 2000 }: TextCycleProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300); // Half of transition time
      
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span 
      className={`inline-block transition-all duration-500 ease-in-out ${
        isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
      } ${className}`}
    >
      {words[currentWordIndex]}
    </span>
  );
};