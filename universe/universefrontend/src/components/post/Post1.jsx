import "./post.css";

export default function Post1() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/temppic1.jpg" alt="" />
            <span className="postUsername">Cecilia Chan</span>
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
          <span className="postDesc">Hi! I'm bored right now and I'm writing this as a test for this page. I'm actually having fun with this, though I suspect the actual clicking stuff is gonna be the world's biggest pain. Anyways. This is still cool! We've gotta replace this with some way to make an actual description. I hope all those tools on that video aren't depreciated/outdated. You better have read all of this. Or I will be upset </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src="assets/pic5.jpg" alt="" />
            <span className="postLikeCounter">5/7 people are going</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
