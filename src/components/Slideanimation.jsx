import React from 'react'

const Slideanimation = ({roles}) => {
  return (
    <span className='slide'>
        <span className='wrapper'>
            {roles.map((role) => 
                (<span className=''>
                    {role.sub?
                        <span className='flex'>
                          <Subslideanimation role={role.sub}/>
                          <span className='ml-[min(1vw,10000px)]'>{role.text}</span>
                        </span>
                         :
                        <span className='flex'>
                            <span className='ml-[min(1vw,10000px)]'>{role.text}</span>
                            <img
                                src={role.imagePath}
                                alt={role.text}
                                className='size-[min(4vw,10000px)]'
                            />
                        </span>
                    }
                </span>)
            )}
        </span>
    </span>
  )
}
export default Slideanimation

const Subslideanimation = ({role}) => {
  return (
    <span className='slide'>
        <span className='subwrapper'>
            {role.map((rol) => 
                (
                  <span className='flex'>
                      <img
                          src={rol.imagePath}
                          alt={rol.text}
                          className='size-[min(3vw,10000px)]'
                      />
                      <div className='mr-[min(1vw,10000px)]'>{rol.text}</div>
                  </span>
            ))}
        </span>
    </span>
  )
}

