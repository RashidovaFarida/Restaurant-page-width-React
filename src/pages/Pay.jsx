import React from 'react'
import { Link } from 'react-router-dom'
const Pay = () => {
  return (
    <div className="wrapper">
    <h2>Payment Form</h2>
    <form method="POST">
      <h4>Account</h4>
      <div className="input-group">
        <div className="input-box">
          <input type="text" placeholder="Full Name" required className="name " />
          <i className="fa fa-user icon" />
        </div>
        <div className="input-box nicName">
          <input type="text" placeholder="Nick Name " required className="name " />
          <i className="fa fa-user icon" />
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <input type="email" placeholder="Email Adress" required className="name" />
          <i className="fa fa-envelope icon" />
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <h4> Date of Birth</h4>
          <input type="text" placeholder="DD" className="dob" />
          <input type="text" placeholder="MM" className="dob" />
          <input type="text" placeholder="YYYY" className="dob" />
        </div>
        <div className="input-box">
          <h4> Gender</h4>
          <input type="radio" id="b1" name="gendar" defaultChecked className="radio" />
          <label htmlFor="b1">Male</label>
          <input type="radio" id="b2" name="gendar" className="radio" />
          <label htmlFor="b2">Female</label>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <h4>Payment Details</h4>
          <input type="radio" name="pay" id="bc1" defaultChecked className="radio" />
          <label htmlFor="bc1"><span><i className="fa fa-cc-visa" /> Credit Card</span></label>
          <input type="radio" name="pay" id="bc2" className="radio" />
          <label htmlFor="bc2"><span><i className="fa fa-cc-paypal" /> Paypal</span></label>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <input type="tel" placeholder="Card Number" required className="name" />
          <i className="fa fa-credit-card icon" />
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <input type="tel" placeholder="Card CVC" required className="name" />
          <i className="fa fa-user icon" />
        </div>
        <div className="input-box mt-5">
          <select>
            <option>01 jun</option>
            <option>02 jun</option>
            <option>03 jun</option>
          </select>
          <select>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <Link type="submit btn color-main2" to='/payment'>PAY NOW</Link>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Pay