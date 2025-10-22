import React from 'react'

const Logoanimation = ({logos}) => {
  return (
    <figure className='overflow-hidden w-[min(30vw,10000px)] h-[min(20vw,10000px)]'>
        <span className='logowrapper gap-[min(10vw,10000px)]'>
            <span className='w-[min(10vw,10000px)]'></span> 
            {logos.map((logo) => 
                (<img 
                    src={logo.logo} 
                    alt={logo.description} 
                    key={logo.description} 
                    className='size-[min(20vw,10000px)]'
                />)
            )}
            <span className='w-[min(10vw,10000px)]'></span> 
      </span>
    </figure>
  )
}

export default Logoanimation