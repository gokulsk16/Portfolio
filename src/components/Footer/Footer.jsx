import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className="footer-top">
            <h1>Portfolio.</h1>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Gokulakrishnan. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
