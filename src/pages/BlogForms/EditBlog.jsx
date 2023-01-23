import React from 'react';
import { connect } from 'react-redux';
import BlogForm from '../BlogForms/BlogForm';
import {editBlog} from '../../actions/blogAction'
import { removeBlog } from '../../actions/blogAction';
 const EditBlog = props  => {
  return (
    <div>
 
      <BlogForm  editblog={props.blogvalues}
    onFormSubmit={(a)=>{
      props.dispatch(editBlog(props.blogvalues.id,a));
      props.history.push('/tableBtn');
    }}/>
           <button className='btn delete btn-danger center'
    onClick={()=>{
      props.dispatch(removeBlog({id:props.blogvalues.id}))
      props.history.push('/tableBtn')
    }}
    >Delete</button> 
    </div>
  )
}



const mapStateToProps=(state,props)=>{
  return{
    blogvalues:state.actionreducer.find((b)=>{
      return b.id === props.match.params.id
    }),
  }
}
export default connect(mapStateToProps) (EditBlog)