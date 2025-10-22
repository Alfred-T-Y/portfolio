import React from 'react';
import { roles, logos } from './Hero';
import Slideanimation from '../components/Slideanimation';
import Logoanimation from '../components/Logoanimation';
import LinkButton from '../components/LinkButton';

const Hero = () => {
  return (
    <>
        <section id="hero" className='flex flex-row relative overflow-hidden'>
            <header className='hero-text'>
                <div className='my-[min(2vw,10000px)]]'>
                    <h1 className='firstname namepolice'>Alfred</h1> 
                    <h1 className='lastname namepolice'>TCHOPPE YONA</h1>
                </div>
                <div className='overflow-hidden'>
                    <Slideanimation roles={roles}/>
                </div>
            </header>
            <header className='hero-logo'>
                <Logoanimation logos={logos}/>
            </header>
        </section>
        <LinkButton positionclassname='flex-center' link='https://github.com/Alfred-T-Y' classname='flex-center gap-[min(0.2vw,10000px)] my-[min(6vw,10000px)]
        bg-[#c0bcbc] hover:bg-white transition-colors duration-600 rounded-[min(1vw,10000px)] w-[min(14vw,10000px)] h-[min(3.5vw,10000px)]' 
        text='See my works' textclassname='text-[min(1.5vw,10000px)] text-[#030814] font-[500]' iconpath='/images/arrowdown.svg'
        iconclassname='size-[min(2vw,10000px)] animate-bounce'/>
    </>
  )
}

export default Hero