import React from 'react'
import { blog } from '../data/bestBlog'
import { Link } from 'react-router-dom'
import { t } from 'i18next'

const BlogDetailsItem = ({title,desc,img}) => {


  return (
    <div className="blogDetailsItemCon">
    <div className='blogDetailsItem '>
        <div className="row"> 
      <div className='blogDetalsText col-sm-12 col-md-6 '>
        <div className="container pt-5">
           <div className='d-flex align-items-center justify-content-center ' >
            <img src={img} alt="" />
            </div>
            <h2 className='p-3 '>{title}</h2>
               <p className='ps-2 pe-2'>{desc}</p>
          </div>
      </div>
      <div className='blogDetailExapmle pt-5 p-5 col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-evenly'>
        <div className='tagBox '>
          <h4 className='mt-2 ms-2'>{t(`BlogDetailsItem.1`)}</h4>
          <div className="desinLineG"></div>
          <div className="desinLine bg-main2"></div>
          <div className='row mt-4 ms-2 me-2'>
          <span className='col-md-4'>
            <p > {t(`BlogDetailsItem.2`)} </p></span>
          <span className='col-md-4'>
            <p> {t(`BlogDetailsItem.3`)}</p></span>
          <span className='col-md-4'>
            <p> {t(`BlogDetailsItem.4`)}</p></span>
          <span className='col-md-4'>
            <p>  {t(`BlogDetailsItem.5`)}</p></span>
          <span className='col-md-4'>
            <p> {t(`BlogDetailsItem.6`)}</p></span>
          </div>
        </div>
        <div className='bestBlog mt-5'>
          <h4 className='mt-2 ms-2'>{t(`BlogDetailsItem.7`)}</h4>
          <div className="desinLineG"></div>
          <div className="desinLine bg-main2"></div>
          <div className='bestBlogCard'>
            {
              blog.map((fd,i)=>{
                return(
                  <div key={i} className='d-flex pt-3 '>
                  <div className='bestBlogImg'>
                  <Link to='#'>
                  <img src={fd.img} alt=""  className=' pt-2 ps-2 pb-2 pt-2'/>
                  </Link>
                  </div>
                  <div id='blogTitle' className='ps-2 '>
                    <span className='blogTitle'>{t(`bestBlogData.${i+1}`)}</span>
                    <h6><Link to='#' >{t(`blogTitle.${i+1}`)}</Link></h6>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
        </div>
     
  </div>
  </div>
    </div>
  )
}

export default BlogDetailsItem