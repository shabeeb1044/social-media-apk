import React, { useContext } from 'react'
import "./Navbar.css"
import { FaMoon } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { DarkMoodContext } from '../../context/DarkModeContex';
import { CiLight } from "react-icons/ci";
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  const {toggle,darkMode} = useContext(DarkMoodContext);

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration: 'none'}} >
          <span>Social app</span>
        </Link>
        <FaHome/>
        { darkMode ? (<CiLight onClick={toggle} style={{cursor:"pointer"}}/>) : (<FaMoon onClick={toggle} />) }
       
        <AiOutlineAppstore/>
        <div className="search">
        <FaSearch />
        <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className='right'>
      <IoMdPerson />
      <MdEmail />
      <IoMdNotifications />
      <div className="user">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
      </div>
      </div>

    </div>
  )
}

export default Navbar