import React, { useContext } from 'react'
import "./Comments.css"
import {AuthContext} from "../../context/authContext"

export const Comment = () => {
    const {currentUser} = useContext(AuthContext);
    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "John Doe",
          userId: 1,
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "Jane Doe",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ];
      console.log(currentUser);
  return (
    <div className="comments">
        <div className='write'>
            <img src={currentUser.profilePic} />
            <input type="text" placeholder='write a comment' />
            <button>Send</button>
        </div>
        {comments.map(comment => (
            <div className='comment'> 
            <img  src={comment.profilePicture} />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>

            </div>
            <span className="date">1 min</span>
            </div>
               

        ))}
    </div>
  )
}

