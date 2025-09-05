"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { TextCycle } from "@/components/TextCycle";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEmailClick = () => {
    window.open('mailto:your-email@example.com', '_blank');
  };

  const handleExploreWorkClick = () => {
    scrollToSection('projects');
  };

  // Define the changing words/phrases
  const changingWords = [
    "Software Engineer",
    "Tech Enthusiast",
    "Gamer"
  ];

  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip hero-section-with-grain'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        {/* Enhanced grain overlay for hero section */}
        <div 
          className='absolute inset-0 -z-10 opacity-15'
          style={{
            backgroundImage: `url('/src/assets/images/grain.jpg')`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            mixBlendMode: 'overlay'
          }}
        />

        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        
        {/* Your existing HeroOrbit components */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-8 text-emerald-300/30' />
        </HeroOrbit>
        
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-5 text-emerald-300/20' />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-[#f9e8ce]/40'></div>
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-10 text-[#bda28d]/50' />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-12 text-emerald-300/80' />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-8 text-[#8ba888]' />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className='size-2 rounded-full bg-[#f9e8ce]/30'></div>
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='3s'>
          <SparkleIcon className='size-14 text-[#bda28d]/40' />
        </HeroOrbit>

        <HeroOrbit size={740} rotation={85} shouldOrbit orbitDuration='46s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-10 text-emerald-300/60' />
        </HeroOrbit>

        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-28 text-[#8ba888]/80' />
        </HeroOrbit>
      </div>

      <div className="container relative z-10">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} 
            className='size-[100px] drop-shadow-2xl' 
            alt="Person peeking behind laptop" 
          />
          <div 
            className='px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4 grain-card'
            style={{
              background: 'linear-gradient(135deg, rgba(189, 162, 141, 0.2) 0%, rgba(249, 232, 206, 0.1) 100%)',
              border: '1px solid rgba(249, 232, 206, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className='bg-emerald-400 size-2.5 rounded-full relative'>
              <div className='bg-emerald-400 absolute inset-0 animate-ping-large rounded-full'></div>
            </div>
            <div className='text-sm font-medium text-[#f9e8ce]'>
              Hi, I'm Shubhankar
            </div>

          </div>
        </div>
        
        <div className='max-w-4xl mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl lg:text-6xl text-center mt-8 tracking-wide text-[#f9e8ce] drop-shadow-lg leading-tight'>
            {" "}
            <TextCycle 
              words={changingWords} 
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-[#bda28d] to-[#f9e8ce] font-bold"
              interval={3000}
            />
          </h1>

          <p className='mt-6 md:text-lg lg:text-xl text-center text-[#bda28d] drop-shadow-sm max-w-2xl mx-auto'>
            I specialize in transforming designs into functional, high-performing web applications. 
            Let&apos;s collaborate to bring your vision to life with cutting-edge technology and exceptional user experience.
          </p>
        </div>
        
        <div className='flex flex-col md:flex-row justify-center items-center mt-10 gap-4'>
          <button 
            className='inline-flex items-center gap-2 px-8 h-14 rounded-xl font-semibold text-lg grain-button transform transition-all duration-300 hover:scale-105'
            style={{
              background: 'linear-gradient(135deg, rgba(189, 162, 141, 0.2) 0%, rgba(139, 168, 136, 0.2) 100%)',
              border: '2px solid rgba(249, 232, 206, 0.4)',
              color: '#f9e8ce'
            }}
            onClick={handleExploreWorkClick}
          >
            <span>Explore My Work</span>
            <ArrowDown className='size-5' />
          </button>
          
          <button 
            className='inline-flex items-center gap-2 h-14 px-8 rounded-xl font-semibold text-lg grain-button transform transition-all duration-300 hover:scale-105'
            style={{
              background: 'linear-gradient(135deg, #f9e8ce 0%, #bda28d 100%)',
              color: '#44624a',
              border: '2px solid #f9e8ce'
            }}
            onClick={handleEmailClick}
          >
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
