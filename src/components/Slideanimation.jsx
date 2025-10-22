import React from 'react'

const Slideanimation = ({roles}) => {
  return (
    <div className='overflow-hidden w-[min(30vw,10000px)] h-[min(3vw,10000px)]'>
      <span className='wrapper'>
          {roles.map((role) => 
              (<span className='font-[500]'>
                  {role.sub?
                      <span className='flex mb-[min(0.5vw,10000px)]'>
                        <Subslideanimation role={role.sub}/>
                        <span className='ml-[min(1vw,10000px)] text-[min(2vw,10000px)]'>{role.text}</span>
                      </span>
                      :
                      <span className='flex'>
                          <span className='ml-[min(1vw,10000px)] text-[min(2vw,10000px)]'>{role.text}</span>
                          <span className='relative w-[min(10vw,10000px)] h-[min(3vw,10000px)]'>
                            <img
                                src={role.imagePath}
                                alt={role.text}
                                key={role.text}
                                className='absolute top-[min(0.5vw,10000px)] size-[min(5vw,10000px)]'
                            />
                          </span>
                      </span>
                  }
              </span>)
          )}
      </span>
    </div>
  )
}
export default Slideanimation

const Subslideanimation = ({role}) => {
  return (
    <div className='overflow-hidden w-[min(10vw,10000px)] h-[min(3vw,10000px)]'>
      <span className='subwrapper'>
          {role.map((rol) => 
              (
                <span className='flex'>
                    <img
                        src={rol.imagePath}
                        alt={rol.text}
                        key={rol.text}
                        className='size-[min(3vw,10000px)]'
                    />
                    <div className='text-[min(2vw,10000px)]'>{rol.text}</div>
                </span>
          ))}
      </span>
    </div>
  )
}

