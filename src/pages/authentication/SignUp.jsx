import React, {useState} from 'react';
import admin from '../../data/users';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import Typewriter from 'typewriter-effect'


const SignIn = (props) => {
  const [username,setUser]=useState('');
  const [usernameError,setUsernameError]=useState('');

  const [email,setEmail]=useState('');
  const [emailError,setEmailError]=useState('');

  const [password,setPassword]=useState('');
  const [passwordError,setPasswordError]=useState('');

  const [coliform,setColiform]=useState('');
  const [coliformError,setColiformError]=useState('');

  const [check,setCheck]=useState('');
  const [checkError,setCheckError]=useState('');

  const handleUsername = (e)=>{
    setUsernameError('')
    setUser(e.target.value)
  }
  const handleEmail = (e)=>{
    setEmailError('')
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPasswordError('')
    setPassword(e.target.value)
  }
  const handleColiform = (e)=>{
    setColiformError('')
    setColiform(e.target.value)
  }
  const handleCheck = (e)=>{
    setCheckError('')
    setCheck(e.target.value)
  }

 const authenticationLogin =(e)=>{
  e.preventDefault();
  if(username !==""){
    if(username === admin[0].username){
      setUsernameError('')
    }
    else{
      setUsernameError(t(`errormsg.8`))
    }
     
  } 
  else{
    setUsernameError(t(`errormsg.1`))
  }
  if(password=== ''){
    setPasswordError(t(`errormsg.2`))
  }
  if(check ===''){
    setCheckError(t(`errormsg.9`))
  }
  if(email !== ''){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailRegex.test(email)){
      setEmailError('')
      if(password === coliform){
        alert(t(`errormsg.12`))
        props.history.push('/signIn')

      }
      else{
        setPasswordError(t(`errormsg.13`))
        setColiformError(t(`errormsg.13`))
      }
    }
    else{
      setEmailError(t(`errormsg.10`))
    }
  }
  else{
    setEmailError(t(`errormsg.6`))
  }
 
 }
  return (
    <div className="signUp">
   <div className="container">
   <div className='row'>
   <div className='text col-sm-12 col-md-6 col-xl-6 col-xxl-6 logInPhoto d-flex align-items-center justify-content-center'>
      <Typewriter 
      options={
        {
          autoStart:true,
          loop: true,
          delay:20,
          strings:[
            "Welcome our resturant",
            "Please , sign up for continue",
            
          ],
        }
      }
      />
      </div> 
    <div className='col-sm-12 col-md-6 col-xl-6 col-xxl-6'>
      <form action="" className='p-5' onSubmit={authenticationLogin}>
        <div className='logInTitle w-100 d-flex align-items-center justify-content-center'>
        <h2 className=''>{t(`logIn.6`)}</h2>
        </div>
        <div className='pb-3'>
        <label htmlFor="exampleInputuser1" className="form-label">{t(`logIn.1`)}</label>
        <input type="text" onChange={handleUsername} className="form-control" id="exampleInputuser1" aria-describedby="userHelp" />
        {/* error */}
        {usernameError && <div className='error-msg'>{usernameError}</div>}
        <label htmlFor="exampleInputEmail" className="form-label">E-mail</label>
        <input type="text" onChange={handleEmail}  className="form-control" id="exampleInputEmail1" />
         {/* error */}
        {emailError && <div className='error-msg'>{emailError}</div>}
        <label htmlFor="exampleInputPassword1" className="form-label">{t(`logIn.2`)}</label>
        <input type="password" onChange={handlePassword}  className="form-control" id="exampleInputPassword1" />
         {/* error */}
        {passwordError && <div className='error-msg'>{passwordError}</div>}
        <label htmlFor="exampleInputPassword2" className="form-label">{t(`logIn.7`)}</label>
        <input type="password" onChange={handleColiform}  className="form-control" id="exampleInputPassword2" />
        {/* error */}
        {coliformError && <div className='error-msg'>{coliformError}</div>}
        <div className='pt-2'>
          <input type="checkbox" onChange={handleCheck} value={check} />
          <label htmlFor="lisans" className='ps-2'>
          {t(`contact.4`)} <Link to='#'>{t(`contact.5`)}</Link>{t(`contact.7`)} <Link to='#'>{t(`contact.6`)}</Link>
          </label>
          {/* error */}
          {checkError && <div className='error-msg'>{checkError}</div>}
        </div>
        </div>
        <div className=' pb-2 d-flex align-items-end justify-content-center w-100'>
        <button className='btn bookBtn' id='submit'>{t(`logIn.3`)}</button>
        </div>

        <div className='signIn w-100 d-flex justify-content-center '>
          <Link to='/signIn'>{t(`logIn.5`)} </Link>
        </div>
      </form>
      </div> 
    </div>
      </div>
    </div>
  )
}

export default SignIn