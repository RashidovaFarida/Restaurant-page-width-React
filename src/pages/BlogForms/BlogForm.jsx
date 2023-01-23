import React, { Component } from 'react'
import { t } from 'i18next';
import { Link } from 'react-router-dom';



class BookForm extends Component {
 
  constructor(props){
    super(props);
    this.state={
      title: props.editblog ? props.editblog.title :"",
      desc:  props.editblog ? props.editblog.desc :"",
      img:props.editblog ? props.editblog.img :"",
      err:''

    }
  }
  titleChange=(e)=>{
    const title =e.target.value;
    this.setState(()=>({title}))

  }
  descChange=(e)=>{
    const desc =e.target.value;
    this.setState(()=>({desc}))
  }
  imgChange=(e)=>{
    const img =e.target.value;
    this.setState(()=>({img}))
  }
 
  bookOnSumbit=(e)=>{
    e.preventDefault();
    if(! this.state.title || !this.state.desc){
      this.setState({err:"Fill input"})
    }
    else {
      this.setState({err:""})
      this.props.onFormSubmit({
        title:this.state.title,
        desc:this.state.desc,
        img:this.state.img,
      })
    }
  }
  render(){
  return (
    <section className='aboutReserve'>
    <div className="container " onSubmit={this.bookOnSumbit}>
    <div className='d-flex flex-column align-items-center pt-4'>
      <p className='color-main2'>{t(`blogAddForm.5`)}</p>
      <h3 className='color-w'>{t(`blogAddForm.6`)}</h3>
      {this.state.err && (
        <div class="alert alert-danger d-flex align-items-center" role="alert">
        <div>
        {this.state.err}
        </div>
      </div>
      )}
    </div>
    <form className='row mt-4 '>
      <div className="col-sm-12 col-md-12 col-xl-12 col-xxl-12 d-flex  flex-column"> 
      <input onChange={this.titleChange} type="text" placeholder={t(`blogAddForm.1`)}  />
      <input onChange={this.descChange} className='mt-2'type="text" placeholder={t(`blogAddForm.2`)} />
      <input onChange={this.imgChange} className='mt-2'type="text" placeholder={t(`blogAddForm.3`)} />
      </div>
    <button type='submit' className='mt-3 bookBtn mb-5'>{t(`blogAddForm.4`)}</button>
    </form>
    <Link to="/tableBlg" className='mb-5 backBtn'>Back</Link>
    </div>
  </section>
  )
}
}

export default BookForm