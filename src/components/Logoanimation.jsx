import React from 'react'

const Logoanimation = ({logos}) => {
  return (
    <figure className='overflow-hidden'>
        <div className='logowrapper flex gap-[min(30vw,10000px)] ml-[min(2vw,10000px)] mt-[min(8vw,10000px)] w-fit h-[min(45vw,10000px)] overflow-hidden'>
            <span className='w-[min(0vw,10000px)]'></span> 
            {logos.map((logo) => 
                <div className='flex flex-col gap-[min(1vw,10000px)] w-[min(20vw,10000px)] h-[min(45vw,10000px)] overflow-visible'>
                    <img 
                        src={logo.logo} 
                        alt={logo.description} 
                        className='size-[min(20vw,10000px)]'
                    />
                    <img
                        src={logo.logo}
                        alt="Reflet"
                        className="size-[min(20vw,10000px)] transform scale-y-[-1]
                        opacity-40 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]"
                    />
                </div>
            )}
            <span className='w-[min(0vw,10000px)]'></span> 
      </div>
    </figure>
  )
}

export default Logoanimation