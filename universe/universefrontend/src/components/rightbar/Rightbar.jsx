import React from 'react';
import "./rightbar.css";
import {Link} from "react-router-dom";
//import Profile from "./src/pages/Profile/Profile";
import Profile from '../../pages/Profile/Profile';


export default function Rightbar() {
    return (
        <div className="rightbar">
        <div className="profileTab">
        <img className="postProfileImg" src="assets/profilepic4.jpg" alt="" />
        <Link to="/profile">Profile</Link>
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