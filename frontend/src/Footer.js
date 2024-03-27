import React from 'react'
import './App.css';

const Footer = () => {
  return (
    <div className='myfoot'>
      <div className='myfoot-1'>
        <div>About
            <ul className='myul'>
                <li>About us</li>
                <li>Contact us</li>
                <li>Carrier</li>
                <li>Corporate information</li>
                <li>E-Dukan Stories</li>
            </ul>
        </div>
        <div>Help
        <ul className='myul'>
                <li>Payments</li>
                <li>Shipping</li>
                <li>cancelation & Return</li>
                <li>FAQ</li>
                <li>Report</li>
            </ul>
        </div>
        <div>Consumer Policy
        <ul className='myul'>
                <li>Terms of use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>SiteMap</li>
            </ul>
        </div>
      </div>
      <div className='myborder'></div>
      <div className='myfoot-2'>
      <div>Mail us 
      <ul className='myul'>
                <li>E-DUKAN International Private Limited</li>
                <li>Odisha</li>
                <li>Bhubaneswar,751030</li>
                
            </ul>
      </div>
        <div>Office Address
        <ul className='myul'>
                <li>E_DUKAN International Private Limited</li>
                <li>Odisha</li>
                <li>Bhubaneswar</li>
                <li>Pin:751030</li>
                <li>Khurda</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
