import React from 'react'
import { Link } from 'react-router-dom'
import PaymentScfly from './PaymentScfly'
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
          <label htmlFor="bc1"> Credit Card</label>
          <input type="radio" name="pay" id="bc2" className="radio" />
          <label htmlFor="bc2"> Paypal</label>
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
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <div>
        {/* Button trigger modal */}
        <button type="button" className=" btn  bookBtn color-w" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <h5>Pay</h5>
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="">
              <div className="payment_header">
                <div className="check"><i className="fa fa-check" aria-hidden="true" /></div>
              </div>
              </div>
              <div className="modal-body">
        
            <div className="payment">
            
              <div className="content">
                <h1>Payment Success !</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
              </div>
            </div>
  
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <Link to='/' type="button" className="btn ">Go to home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </form>
  </div>
  )
}

export default Pay