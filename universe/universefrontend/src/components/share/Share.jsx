// import "./share.css";

// export default function Share() {
//   return (
//     <div>heyyy</div>
//   );
//   }

import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/profilepic2.jpg" alt="" />
          <input
            placeholder="What's in your mind?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <div className="shareIcon">
                <span class="material-icons">image</span>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                </div>
                <div className="shareOption">
                <div className="shareIcon">
                <span class="material-icons">bookmark</span>
                    <span className="shareOptionText">Tag</span>
                </div>
                </div>
                <div className="shareOption">
                <div className="shareIcon">
                <span class="material-icons">schedule</span>
                    <span className="shareOptionText">Time</span>
                </div>
                </div>
                <div className="shareOption">
                <div className="shareIcon">
                <span class="material-icons">tag</span>
                    <span className="shareOptionText">Tags</span>
                </div>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
