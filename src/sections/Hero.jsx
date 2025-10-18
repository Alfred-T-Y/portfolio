import React from 'react';
import { roles } from './Hero';
import Slideanimation from '../components/Slideanimation';

const Hero = () => {
  return (
    <section id="hero" className='flex flex-row relative overflow-hidden gap-5'>
        <header className='hero-text'>
            <h1 className='firstname namepolice'>Alfred</h1> 
            <h1 className='lastname namepolice'>TCHOPPE YONA</h1>
            <div>
                <Slideanimation roles={roles}/>
            </div>
        </header>
    </section>
  )
}

export default Hero