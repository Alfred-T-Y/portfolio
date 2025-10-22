import React from 'react'

const LinkButton = ({text, positionclassname,textclassname, iconpath, link, classname, iconclassname}) => {
  return (
      <div className={positionclassname ?? ''}>
        <a href={link} className={classname ?? ''} target="_blank" rel="noopener noreferrer">
          {text ? <p className={textclassname ?? ''}>{text}</p> : <></>}
          {iconpath ? <img src={iconpath} 
          className={iconclassname ?? ''} alt='icon'/> : <></>}
        </a>
      </div>  
  )
}

export default LinkButton