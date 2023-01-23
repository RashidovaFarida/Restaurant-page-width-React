import React from 'react'

export const DiscoverArea = ({icon,title,details,more}) => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-3 col-xxl-3 "  >
             <div className="card "  >
             <div className="card-body  " data-aos="fade-right">
               <img src={icon}  alt="" />
               <h5 className="card-subtitle    color-w mt-2">
                {title}
                 </h5>
                 <p className="card-text mt-3 color-g">{details}</p>
               <button className='btn BtnDiscover color-g '>{more}</button>
             </div>
               </div>
    </div>
  )
}
