import React from 'react'
import success from "./success.png"
import {Link} from "react-router-dom"
function Successfullypage() {
  return (
    <div className='backkhara'>
          <div className='d-flex h-100 flex-column align-items-center justify-content-center successdiv'>
              <img src={success} className='mb-3 successImg' style={{ mixBlendMode: "multiply" }} />
              <p className='display-5'>Order Success</p>
              <p style={{color:"black",fontSize:"30px",borderRadius:"10px"}} className='btn-2'><Link className='text-white' to={"/"}>Back to Home</Link></p>
          </div>
    </div>
  )
}

export default Successfullypage