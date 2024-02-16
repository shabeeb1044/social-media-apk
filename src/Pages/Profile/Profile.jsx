import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";

import "./Profile.css"
import Postes from '../../Components/Postes/Postes';
const Profile = () => {

  return (
    <div className="profile">
      <div className="images">
        <img className="cover" src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img className="profilePic" src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FaFacebook fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaInstagram fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaFacebook fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaXTwitter fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaLinkedin fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jone doe</span>
            <div className='info'>
              <div className="item">
                <MdOutlinePlace />
                <span>India</span>
              </div>
              <div className="item">
                <IoLanguageSharp />
                <span>English</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <MdOutlineMail />
            <MdMoreVert />
          </div>
        </div>
        <Postes/>
      </div>

    </div>

  )
}

export default Profile