import "./rightbar.css";

export default function Rightbar() {
    return (
        <div className="rightbar">
        <div className="profileTab">
        <img className="postProfileImg" src="assets/profilepic4.jpg" alt="" />
        Profile
        </div>
        <div className="eventsAttending">
          <span class="material-icons">music_note</span>
        </div>
        <div className="settingsTab">
          <span class="material-icons">settings</span>
        </div>
        </div>
    );
  };