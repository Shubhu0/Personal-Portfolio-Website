"use client";

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export const TypeWriter = ({ 
  words, 
  className = "", 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000 
}: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    console.log('TypeWriter state:', { 
      displayedText, 
      wordIndex, 
      charIndex, 
      isDeleting, 
      currentWord: words[wordIndex],
      words 
    });

    const currentWord = words[wordIndex] || '';
    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        // Type next character
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Start deleting after delay
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && charIndex > 0) {
        // Delete character
        setCharIndex(prev => prev - 1);
        setDisplayedText(currentWord.slice(0, charIndex - 1));
      } else if (isDeleting && charIndex === 0) {
        // Move to next word
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delayBetween, displayedText]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse text-emerald-300 ml-1">|</span>
    </span>
  );
};