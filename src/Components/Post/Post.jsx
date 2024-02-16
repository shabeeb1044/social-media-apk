import React, { useState } from 'react'
import { IoIosMore } from "react-icons/io";
import { Link } from 'react-router-dom';
import "./Post.css"
import { FcLike } from "react-icons/fc";
import { GrLikeFill } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { Comment } from '../Comments/Comment';


const Post = ({ post }) => {
  const [liked,setLiked]= useState(false);
  const [commentOpen ,setCommentOpen] = useState(false)

  
  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic } alt="" />
            <div className="details">
              <Link to={`profile/${post.userId}`} style={{ textDecoration: 'none', color: 'indianred', }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className='date'>{`1 min ago`}</span>
            </div>
          </div>
          <IoIosMore />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img}  onDoubleClick={()=> setLiked(!liked)} />
        </div>
        <div className="info">
          <div className="item" onClick={()=> setLiked(!liked)}>
           {liked ?<FcLike style={{fontSize:'22px'}} /> :  <FaRegHeart style={{fontSize:'20px'}}/>} 12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
           <FaRegComment/> comments
          </div>
          <div className="item">
           <IoMdShare/>Share
          </div>
        </div>
       {commentOpen && <Comment/>}

      </div>
    </div>
  )
}

export default Post