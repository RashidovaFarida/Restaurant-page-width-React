import React from 'react'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
  
const SingleBlog = ({id,title,img}) => {
  return (
    <div className=" singleBlog mt-2 col-sm-12 col-md-4 col-xxl-4 mb-3  ">
     <div className='home-blog'>
     <div className="card " >
  <div className="card-body">
    <img src={img} id='blogImg'alt="" />
    <h5 className="card-title ms-3 mt-3" ><Link to={`blog/${id}`} className='color-b' >{title}</Link></h5>
    <Link to={`blog/${id}`} className="btn radius-0 readBtn ms-3 mt-3 mb-2">{t(`singleBlog.1`)}</Link>
  </div>
</div>
     </div>
    </div>
  )
}

export default SingleBlog