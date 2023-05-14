import "./post.css";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from "react-router-dom";
import { addAttendee } from "../../api";


import {deleteEvent} from '../../api'

export default function Post1(props) {
  // onload = (event) => {createButton()};
  
  const history = useHistory();

  const x = props.myKey // x is the POST'S id
  const y = props.check // y is the current user's id
  const z = props.author // this is the creator of the post
  const a = props.attending
  const b = props.max

  const peep = props.interest


  const handleDeleteClick = async () => {
    // alert('Deleted post.')
    console.log('here');
    history.push('/profile');
    if (y == 3) {
    const response = await deleteEvent(x);
    window.location.reload();
    } else {
      alert("You cannot delete other people's posts")
    }

  };

  const handleSignUp = async () => {
    if (y == z) {
      alert("You cannot sign up for your own event!");
    }
    else if (a >= b) {
      alert("You cannot sign up for this event. It is full.");
    } else {
    addAttendee(x, y);
    alert('You have signed up for the event. The creator has been notified and will get in contact with you.');
    window.location.reload();
    }
  };

  const attendeesWrapper = document.getElementById("attendees");
  // attendeesWrapper.innerHTML = ``;
  // peep.forEach(x => {
  //     const el = document.createElement("p");
  //     const text = document.createTextNode(`${x}`);
  //     el.appendChild(text);
  //     attendeesWrapper.appendChild(el);
  // });


  return (

    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/profilepic4.jpg" alt="" />
            <span className="postUsername">{props.name}            </span>
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
            {/* <Link to={{ pathname: "https://amherstcinema.org/" }} target="_blank">Amherst Movie Theater</Link> */}
          </div>
          <div>
          <button onClick={handleDeleteClick} className="postButton">Delete</button>
          </div>
          <div className = "attendees" id="att">
          <p className="attendees">{peep[0]}</p>
          <p id="attendees">{peep[1]}</p>
          <p id="attendees">{peep[2]}</p>
          <p id="attendees">{peep[3]}</p>
          <p id="attendees">{peep[4]}</p>
          <p id="attendees">{peep[5]}</p>
          <p id="attendees">{peep[6]}</p>
          <p id="attendees">{peep[7]}</p>
          <p id="attendees">{peep[8]}</p>
          <p id="attendees">{peep[9]}</p>
          </div>
          </div>
        </div>
      </div>
  );
}
