import React from 'react';
import { roles, logos } from './Hero';
import Slideanimation from '../components/Slideanimation';
import Logoanimation from '../components/Logoanimation';

const Hero = () => {
  return (
    <section id="hero" className='flex flex-row relative overflow-hidden gap-5 ]'>
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
  )
}

export default Hero