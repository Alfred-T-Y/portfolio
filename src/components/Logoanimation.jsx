import React from 'react'

const Logoanimation = ({logos}) => {
  return (
    <figure className='overflow-hidden w-[min(30vw,10000px)] h-[min(45vw,10000px)]'>
        <div className='logowrapper flex gap-[min(10vw,10000px)]'>
            <div className='w-[min(10vw,10000px)]'></div> 
            {logos.map((logo) => 
                (<div key={logo.description} className='flex flex-col items-center overflow-hidden'>
                    <img 
                        src={logo.logo} 
                        alt={logo.description} 
                        className='size-[min(20vw,10000px)]'
                    />
                    <img
                        src={logo.logo}
                        alt="Reflet"
                        className="size-[min(20vw,10000px)] transform scale-y-[-1] 
                        opacity-40 blur-sm [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent)]"
                    />
                </div>)
            )}
            <div className='w-[min(10vw,10000px)]'></div> 
      </div>
    </figure>
  )
}

export default Logoanimation