import React from 'react'
import { useState } from 'react'
import { card } from '../../data/menuData'

const Filter = () => {

const [state, setState]= useState(card)

  return (
    <>
     <div className="filter-container">
     <button className='btn ' value="all">All</button>
        <button className='btn ' value="dinner">Dinner</button>
        <button className='btn ' value="lunch">Lunch</button>
        <button className='btn ' value="bruch">Brunch</button>
        <button className='btn ' value="cafe">Cafee</button> 
     </div>
    </>
  )
}

export default Filter