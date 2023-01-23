import React  from 'react'

const Modal =({open, onClose})=> {
  if (!open) return null;
    return (
      <div className='playIconModal d-flex align-items-center justify-content-center' >
        <button onClick={onClose} className="closeVideo btn color-w ">X</button>
      <div className='container'>
      <div class="ratio ratio-16x9 overlay">
      <iframe src="https://www.youtube.com/embed/GlrxcuEDyF8" title="YouTube video" allowfullscreen></iframe>
      </div>
      </div>
      </div>
    )
}

export default Modal