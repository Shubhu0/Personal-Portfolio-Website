import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import { memo } from 'react';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/star.svg';

export const HeroSection = () => {
  return (
  <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_botton, transparent,[#8ba888]_10%, [#8ba888]_70%, tranparent)]'>
    <div className='absolute inset-0 -z-30 opacity-5' style={
      {
        backgroundImage: `url(${grainImage})`,
      }}>
    </div>

    <div className='size-[620px] hero-ring'></div>
    <div className='size-[820px] hero-ring'></div>
    <div className='size-[1020px] hero-ring'></div>
    <div className='size-[1220px] hero-ring'></div>
    
    <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s' 
    shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-8 text-gray-300' />
    </HeroOrbit>
    
    <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s'
    shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-5 text-gray-300' />
    </HeroOrbit>

    <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
        <div className='size-2 rounded-full bg-gray-300'></div>
    </HeroOrbit>

    <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s'
    shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-10 text-gray-300' />
    </HeroOrbit>

    <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s'
    shouldSpin spinDuration='6s'>
        <StarIcon className='size-12 text-[#44624a]' />
    </HeroOrbit>

    <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s'
    shouldSpin spinDuration='6s'>
        <StarIcon className='size-8 text-[#44624a]' />
    </HeroOrbit>

    <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
        <div className='size-2 rounded-full bg-gray-300'></div>
    </HeroOrbit>

    <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s'
    shouldSpin spinDuration='3s'>
        <SparkleIcon className='size-14 text-gray-300' />
    </HeroOrbit>

    <HeroOrbit size={740} rotation={85} shouldOrbit orbitDuration='46s'
    shouldSpin spinDuration='6s'>
        <StarIcon className='size-10 text-[#44624a]' />
    </HeroOrbit>

    <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s'
    shouldSpin spinDuration='6s'>
        <StarIcon className='size-28 text-[#44624a]' />
    </HeroOrbit>

    </div>
    <div className="container">
      <div className='flex flex-col items-center'>
        <Image src={memojiImage} 
          className='size-[100px]' 
          alt="Person peeking behind laptop" 
        />
        <div className='bg-[#44624a] border border-[#44624a] px-4 py-1.5
         inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className='bg-green-500 absolute inset-0 
            animate-ping-large rounded-full'></div>
          </div>
          <div className='text-sm font-medium'>
            Available for New Projects
          </div>
        </div>
      </div>
      
      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl font-bold text-center
         mt-8 tracking-wide'> Building Exceptional User Experiences</h1>

        <p className='mt-4 md:text-lg text-center text-white/60'>
        I am proficient in transforming designs and ideas intor functional, high
        performing web application. Let's discuss our next project.
        </p>
      </div>
      
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>
            Explore My Work
          </span>
          <ArrowDown className='size-4' />
        </button>
        
        <a onClick={(e) => { e.preventDefault(); window.open('mailto:mail@domain.com', 'mail'); }} href="mailto:shubhumishra1998@gmail.com" target="_blank" rel="noopener noreferrer">
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋🏼</span>
            <span className='font-semibold '>
              Let's Connect
            </span>
          </button>
        </a>

      </div>
    </div>
  </div>
  )
};
