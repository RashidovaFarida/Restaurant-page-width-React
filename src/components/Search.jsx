import React from 'react'

const Search = ({onChange}) => {
  return (
    <div className=' d-flex align-items-center justify-content-center'>
        <input className='search' type="text"  onChange={onChange}/>
        <button className='btn searchBtn '>Search</button>
    </div>
  )
}

export default Search