import React, {useState} from 'react';
import admin from '../../data/users';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import Typewriter from 'typewriter-effect'
const Login = props => {
    const [username,setUser]=useState('');
    const [usernameError,setUsernameError]=useState('');
    const [password,setPassword]=useState('');
    const [passwordError,setPasswordError]=useState('');

    const handleUsername = (e)=>{
      setUsernameError('')
      setUser(e.target.value)
    }
    const handlePassword = (e)=>{
      setPasswordError('')
      setPassword(e.target.value)
    }

   const authenticationLogin =(e)=>{
    e.preventDefault();
    if(username !==""){
      if(username === admin[0].username){
        setUsernameError('')
        if(password === admin[0].password){
          props.history.push('/tableBlg')
        }
        else{
          setPasswordError('Password does not match with the e-mail address')
        }
      }
      else{
        setUsernameError('UserName does not match with our database')
      }
       
    } 
    else{
      setUsernameError('UserName Required')
    }
    if(password=== ''){
      setPasswordError('Password Required')
    }
   }
   
  return (
  <div className="logIn">
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
            " Welcome back our resturant",
            "Please , log in for continue",
            
          ],
        }
      }
      />
      </div> 
    <div className='col-sm-12 col-md-6 col-xl-6 col-xxl-6'>
      <form action="" className='p-5' onSubmit={authenticationLogin}>
        <div className='logInTitle w-100 d-flex align-items-center justify-content-center'>
        <h2 className=''>{t(`logIn.5`)}</h2>
        </div>
        <div className='pb-3'>
        <label htmlFor="exampleInputuser1" className="form-label">{t(`logIn.1`)}</label>
        <input type="text" onChange={handleUsername} className="form-control" id="exampleInputuser1" aria-describedby="userHelp" />
        {usernameError && <div className='error-msg'>{usernameError}</div>}
        <label htmlFor="exampleInputPassword1" className="form-label">{t(`logIn.2`)}</label>
        <input type="password" onChange={handlePassword}  className="form-control" id="exampleInputPassword1" />
        {passwordError && <div className='error-msg'>{passwordError}</div>}
        <div className='pt-2'>
          <input type="checkbox" />
          <label htmlFor="remember" className='ps-2'>{t(`logIn.4`)}</label>
        </div>
        </div>
        <div className=' pb-2 d-flex align-items-end justify-content-center w-100'>
        <button className='btn bookBtn' id='submit'>{t(`logIn.3`)}</button>
        </div>

        <div className='signIn w-100 d-flex justify-content-center '>
          <Link to='/signUp' className='pt-5'>{t(`logIn.6`)}</Link>
        </div>
      </form>
      </div> 
    </div>
      </div>
    </div>
  )
}

export default Login
