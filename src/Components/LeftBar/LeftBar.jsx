import React from 'react'
import "./Leftbar.css"
import Friends from "../../assets/1.png"
import Market from "../../assets/3.png"
import Watch from "../../assets/4.png"
import Momories from "../../assets/5.png"
import Events from "../../assets/6.png"
import Gaming from "../../assets/7.png"
import Gallery from "../../assets/8.png"
import Videos from "../../assets/9.png"
import Message from "../../assets/10.png"
import Tutotials from "../../assets/11.png"
import Fund from "../../assets/13.png"
import Groups from "../../assets/2.png"
import Courses from "../../assets/12.png"
const LeftBar = () => {
  console.log(Friends);

  return (
    <div className='LeftBar'>
      <div className="containner">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>Shabeeb Doe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Momories} alt="" />
            <span>Momories</span>
          </div>
          
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Message} alt="" />
            <span>Message</span>
          </div>
         
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutotials} alt="" />
            <span>Tutotials</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar