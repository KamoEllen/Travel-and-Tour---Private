import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://th.bing.com/th/id/R.80d11d7cb4365844890e2f7a2de3df7c?rik=oNOB%2bhrcrvQz2g&pid=ImgRaw&r=0' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://th.bing.com/th/id/R.80d11d7cb4365844890e2f7a2de3df7c?rik=oNOB%2bhrcrvQz2g&pid=ImgRaw&r=0' alt='' />
                    </div>
                    <div className='text'>
                      <h4>Ellie</h4>
                      <label>South Africa, Pretoria</label>
                    </div>
                  </div>
                </Link>
                
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box'>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
