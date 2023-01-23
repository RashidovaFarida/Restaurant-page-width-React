import React from 'react'
import { Link } from 'react-router-dom'
import ReadMoreBtn from '../../components/ReadMoreBtn'

const BookTableItem = ({id,img,title,desc }) => {
  return (

    <tr className='listBlog '>
        <th scope='row'><img src={img} alt="" />
        <div id='idBlog' className='d-none'>
          <p><b>Id:</b>{id}</p>
          <p><b>Title:</b>{title}</p>
          </div></th>
        <td className='blogId'>{id}</td>
        <td className='blogTableTitle'>{title} </td>
        <td className='dec'>
        <ReadMoreBtn 
        children={desc}
        /> </td>
        <td className='edit'><Link to={`edit/${id}`} className='btn primary '>Edit</Link ></td>
        
    </tr>
  )
}

export default BookTableItem