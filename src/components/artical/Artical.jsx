import React from 'react'
import "./Artical.css"


const Artical = ({imgUrl ,date , title}) => {
  return (
    <div className='gpt3__blog-container_artical'>
        <div className='gpt3__blog-container_artical-image'>
          <img src={imgUrl} alt='blog'  />
        </div>
        <div className='gpt3__blog-container_artical-content'>
          <div>
            <p>{date}</p>
            <h1>{title}</h1>
            <p>Read Full Artical</p>
          </div>
        </div>
    </div>
  )
}

export default Artical
