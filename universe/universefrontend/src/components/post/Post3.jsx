import "./post.css";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from "react-router-dom";
import { removeAttendee  } from "../../api";




import {deleteEvent} from '../../api'

export default function Post3(props) {
  // onload = (event) => {createButton()};

  const x = props.myKey // x is the POST'S id
  const y = parseInt(window.localStorage.getItem("userID"));
  const z = parseInt(props.author); // this is the creator of the post

  // y is the current user's id

  const handleRemove = async () => {
    if (y === z) {
      alert("You cannot remove yourself from your own event. Go to profile and delete it instead");
    } else {
    removeAttendee(x, y);
    alert('You have removed yourself from the event.');
    window.location.reload();
    }
  }

  
  const history = useHistory();
  return (

    
    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/profilepic4.jpg" alt="" />
            <span className="postUsername">{props.name}</span>
            <span className="postTitle">{props.title}</span>
            <span className="postDate">Event Happening On: {props.date}</span>

          </div>
          <div className="postTopRight">
          <span class="material-icons">more_vert</span>
          </div>
        </div>
        <div className="postCenter">
          {/* <span className="postText">hello hello</span>
          <img className="postImg" src="assets/profilepic3.jpg" alt="" /> */}
        </div>
        <div className="postDescription">
          <span className="postDesc"> {props.description} </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src="assets/pic5.jpg" alt="" />
            <span className="postLikeCounter">{props.attending}/{props.max} people are going</span>
            </div>
          <div className="postBottom">
            <span class="material-icons">sunny</span>
            <span className="postLikeCounter">{props.time}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> Location:   {props.location} </span>
          </div>
          <button onClick={handleRemove} className="postButton">Remove from Event</button>
        </div>
      </div>
    </div>
  );
}
