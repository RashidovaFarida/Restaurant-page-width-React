import React from 'react'
import BlogForm from './BlogForm'
import {addBlog} from '../../actions/blogAction'
import { connect } from 'react-redux'
const addBook = (props) => {
  return (
    <div>
       <BlogForm onFormSubmit={(formData)=>{
        props.dispatch(addBlog(formData));
        props.history.push('/tableBtn')
       }} />
    </div>
  )
}

export default connect()(addBook)