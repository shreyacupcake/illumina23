import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <footer>
    <div className='contactUs'>
        {/* <h1 className='title-contact-us'>Reach Out To Us!</h1> */}
        <div className="links">
          <a href="https://vit.ac.in/" target="_blank" rel="noopener noreferrer" class="left-image"></a>
          <div className="social">
            <a href="https://www.facebook.com/ieichap.vit/" target="_blank" rel="noopener noreferrer" class="facebook"></a>
            <a href="https://www.linkedin.com/company/iei-vit-vellore/about/" target="_blank" rel="noopener noreferrer" class="linkedin"></a>
            <a href="https://www.instagram.com/iei_vit/?hl=en" target="_blank" rel="noopener noreferrer" class="instagram"></a>
          </div>
          <a href="https://www.ieindia.org/webui/iei-home.aspx" target="_blank" rel="noopener noreferrer" class="right-image"></a>
        </div>
    </div>
  </footer>
  )
}

export default ContactUs

