import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BlogDetailsItem from './BlogDetailsItem'
import { useTranslation } from 'react-i18next'
import { EmailShareButton,  FacebookMessengerShareButton, TelegramShareButton, WhatsappShareButton } from 'react-share'
import f from '../img/blog/ShareMedia/facebook-logo.png'
import e from '../img/blog/ShareMedia/email (2).png'
import w from '../img/blog/ShareMedia/whatsapp.png'
import tel from '../img/blog/ShareMedia/telegram.png'



const BlogDetails = props => {
 const { t } = useTranslation();

  return (
    <section className='blogDetailsCon'>
    <div className='introSingleBlog d-flex align-items-center justify-content-evenly flex-column '>
      <div>
        <h2 className="">{t(`BlogDetailsItem.8`)}</h2>
        <div className='d-flex  '>
          <Link to='/' className="color-main2">{t(`aboutFirst.2`)} &nbsp;  </Link>
          <p> / {t(`BlogDetailsItem.8`)}</p>
        </div>
      </div>
    </div>
    <div className='blogTextContainer container'>
      <BlogDetailsItem {...props.value}/>
    </div>
    
    <div className='container d-flex pb-5 mediaIconContainer'>
      <h5 className='share'>{t(`share.1`)}</h5>
     <div className="shareSocial d-flex justify-content-evenly ">
      <EmailShareButton>
        <img src={e} alt="emailShare" className='shareBtn' />
      </EmailShareButton>
     <FacebookMessengerShareButton  url='https://www.facebook.com/'>
        <img src={f} alt="facebookShare" className='shareBtn' url='https://mail.google.com/mail/u/0/?tab=rm' />
      </FacebookMessengerShareButton>
      <WhatsappShareButton url='https://web.whatsapp.com/' >
        <img src={w} alt="whatsappShare"  className='shareBtn' />
      </WhatsappShareButton>
      <TelegramShareButton url='https://web.telegram.org/'>
        <img src={tel} alt="telegramShare" className='shareBtn'  />
      </TelegramShareButton>
      
     </div>
    </div>
    <div className='commentBlog pb-2'>
      <div className="container">
        <h4>{t(`comment.4`)}</h4>
        <div className='commentsInput d-flex flex-column '>
          <div className='emailName mb-2 d-flex justify-content-between'>
            <input type="text"  placeholder={t(`comment.1`)}/>
            <input type="e-mail"  placeholder={t(`comment.2`)}/>
          </div>
          <div className="writeArea">
            <textarea name="messagge" id="" cols="73" rows="10" placeholder={t(`comment.3`)}></textarea>
          </div>
          <div className='pb-3 checkboxMain'>
          <input type="checkbox" id='checkbox' />
          <label htmlFor="checkbox" className='ps-2 checkboxLabel'>{t(`comment.5`)}</label>
          </div>
          <button className='bookBtn' >{t(`comment.6`)}</button>
        </div>
      </div>
    </div>
    </section>
  )
}

const mapStateToProps=(state,props)=>{
  return{
    value:state.actionreducer.find((q)=>{
      return q.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(BlogDetails)