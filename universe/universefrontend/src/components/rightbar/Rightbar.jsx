import React from 'react';
import "./rightbar.css";
import { Link, useHistory } from "react-router-dom";
import Profile from '../../pages/Profile/Profile';


export default function Rightbar() {
  const history = useHistory();

    return (
        <div className="rightbar">
        <div className="profileTab">
        <img className="rightProfileImg" src="assets/profilepic4.jpg" alt="" />
        {/* <button onClick={()=> history.push('/profile')} className="Right-button">Profile</button> */}
        </div>
        </div>
    );
  };