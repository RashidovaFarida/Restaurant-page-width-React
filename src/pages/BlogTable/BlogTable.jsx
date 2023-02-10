import React from 'react'
import { connect } from 'react-redux'
import BookTableItem from './BlogTableItem'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
import Typewriter from 'typewriter-effect'
const BlogTable = (props) => {
 
  
  return (
    <>
   

    <div>
    <section className='blogTaple  d-flex align-items-center justify-content-evenly flex-column '>
    <div>
      <h2 className='color-w ps-5'>{props.name}<h2/> 
      <h5> 
        <Typewriter 
       options={
         {
           autoStart:true,
           loop: true,
           delay:50,
           strings:[
             "wellcome",
             ,
             
           ],
         }
       }
       /></h5>
       </h2>

      <div className='d-flex ps-5 '>
        <Link to='/'>{t(`aboutFirst.2`)} &nbsp;  </Link>
        <p className='color-w'> / Profil</p>
      </div>
    </div>
  </section>
    <section className='bookTable pt-4'>
        <div className="container">
        <Link to='/add' className='btn addBtn '> Add</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#Img</th>
                        <th scope='col' className='blogId'>Id</th>
                        <th scope='col' className='blogTableTitle'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.blogvalues.map((fd,i)=>{
                        return <BookTableItem key={i} {...fd}/>
                    })}
                </tbody>
            </table>
        </div>

    </section>
    </div>
    </>
  )
}


const mapStateToProps = (state) => {
    return {
      blogvalues: state.actionreducer,
    };
  };
export default connect (mapStateToProps) (BlogTable)