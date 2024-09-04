import React from 'react'
import "./footer.css"
function footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
        <h1 className='font-bold text-2xl'>Udariya</h1>
        <p>choose your destination</p>
        </div>
      </div>
      <div>
        <a href="/">
      
        <i class="fa-brands fa-google"></i></a>
        <a href="/">
      
        <i class="fa-brands fa-facebook"></i></a>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-github"></i>
      </div>
      <div className="bottom">
        <div>
            <h1 className='text-xl font-bold'>project</h1>
            <a href="/">changelog</a>
           
            <a href="/">license</a>
            <a href="/">all version</a>
        </div>
        <div>
            <h1 className='text-xl font-bold'>community</h1>
            <a href="/">github</a>
            <a href="/">issues</a>
            <a href="/">project</a>
            <a href="/">twitter</a>
        </div>
        <div>
            <h1 className='text-xl font-bold'>help</h1>
            <a href="/">support</a>
            <a href="/">troubleshooting</a>
            <a href="/">contact</a>
        
        </div>
        <div>
            <h1 className='text-xl font-bold'>other</h1>
            <a href="/">term of service</a>
            <a href="/">privacy</a>
            <a href="/">license</a>
         
        </div>

      </div>
    </div>
   
  )
}

export default footer
