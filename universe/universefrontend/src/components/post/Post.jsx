import "./post.css";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useHistory } from "react-router-dom";




import {deleteEvent} from '../../api'

export default function Post(props) {
  const history = useHistory();


  function nameOfUser() {
    let x = "meghana";
    let y = "shira";
    return  Math.random() * (10 - 1) + 1 > 5 ? x : y;
  }

  const handleDeleteClick = async () => {
    alert('Deleted post.')
    history.push('/');
    const response = await deleteEvent(1);
    console.log(response);
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
          <button onClick={()=> alert('You have signed up for the event. The creator has been notified and will get in contact with you.')} className="postButton">Sign Me Up!</button>
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
