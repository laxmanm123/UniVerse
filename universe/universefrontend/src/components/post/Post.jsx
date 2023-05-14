import "./post.css";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from "react-router-dom";
import { addAttendee } from "../../api";




import {deleteEvent} from '../../api'

export default function Post(props) {
  // onload = (event) => {createButton()};
  
  const history = useHistory();

  const x = props.myKey // x is the POST'S id
  const y = props.check // y is the current user's id
  const z = props.author // this is the creator of the post
  const a = props.attending
  const b = props.max

  // function createfn(){
  //   //debugger;
  //   const userID = parseInt(window.localStorage.getItem("userID"));

  //   if (userID === parseInt(z)) {
      
  //     let element = document.createElement("button");
  //     // element.onClick = handleDeleteClick();
  //     element.innerHTML = "delete";
  //     const buttonHolder = document.getElementById("deleteButtonHolder");
    
  //     buttonHolder.appendChild(element);
  //   }
  
  // }

  // function disableSignup() {
  //   const userID = parseInt(window.localStorage.getItem("userID"));
  //   const button = document.getElementById("postButton");
  //   if (userID === z || a >= b) {
  //     button.disabled = true;
  //   }
  // }

  // window.onload = createfn();
  // window.onload = disableSignup();


  const handleDeleteClick = async () => {
    // alert('Deleted post.')
    console.log('here');
    history.push('/');
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
          <button onClick={handleSignUp} className="postButton">Sign Me Up!</button>
          {/* <div id = "deleteButtonHolder"></div> */}
          <button onClick={handleDeleteClick} className="postButton">Delete</button>
          {/* <Stack direction="row" spacing={2}>
          <Button variant="contained">Sign Me Up!</Button>
          </Stack> */}
          </div>
        </div>
      </div>
    </div>
  );
}
