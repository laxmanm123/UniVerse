import "./post.css";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/profilepic1.jpg" alt="" />
            <span className="postUsername">Laxman </span>
            <span className="postDate">Event Happening On: March 10</span>

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
          <span className="postDesc">I want to go to the Hockey game that's happening on March 10 at the Mullins Center. I'm looking for a big group of people. Tickets are free! </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src="assets/pic5.jpg" alt="" />
            <span className="postLikeCounter">2/10 people are going</span>
            </div>
          <div className="postBottom">
            <span class="material-icons">wb_twilight</span>
            <span className="postLikeCounter">Evening</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> Location:   </span>
            <Link to={{ pathname: "http://www.mullinscenter.com/teams/detail/umass-ice-hockey" }} target="_blank">Mullins Center</Link>
          </div>
          <div>
          <button onClick={()=> alert('You have signed up for the event. The creator has been notified and will get in contact with you.')} className="postButton">Sign Me Up!</button>
          {/* <Stack direction="row" spacing={2}>
          <Button variant="contained">Sign Me Up!</Button>
          </Stack> */}
          </div>
        </div>
      </div>
    </div>
  );
}
