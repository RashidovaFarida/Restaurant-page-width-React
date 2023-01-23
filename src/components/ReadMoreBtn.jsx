import React from 'react'
import { useState } from 'react'

const ReadMoreBtn = ({children}) => {
    const [isReadMoreShow,setIsReasMoreshow]=useState(false)

    const toggleBtn=()=>{
        setIsReasMoreshow(prevState => !prevState)
    }
  return (
   <div className='read-more-read-less'>
    {isReadMoreShow ? children : children.substr(0,200)}
    <button className='btn radius-0 ms-2 readMoreBtn ' onClick={toggleBtn}>{isReadMoreShow ? "Read Less":"Read More"}</button>
   </div>
  )
}

export default ReadMoreBtn