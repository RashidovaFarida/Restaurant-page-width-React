import React from 'react'
import { connect } from 'react-redux'
import BookTableItem from './BlogTableItem'
import { Link } from 'react-router-dom'


const BlogTable = (props) => {
  return (
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
  )
}


const mapStateToProps = (state) => {
    return {
      blogvalues: state.actionreducer,
    };
  };
export default connect (mapStateToProps) (BlogTable)