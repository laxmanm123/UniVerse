import "./topbar.css"
import {Link, useHistory} from "react-router-dom";

import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';




export default function Topbar() {

    const history = useHistory();


    return (
        <div className="topbarContainer">
            <div className="topbarLeft"> 
                <span className="logo"><Link to="/login">UniVerse</Link></span>
                
            </div>

            <div className="topbarCenter"> 
            <div className="searchbar">
            <span class="material-icons md-36">search</span>            
                <input placeholder="Search or filter for events" className="searchInput"/>
            </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    {/* <span className="topbarLink"> Homepage </span>
                    <span className="topbarLink"> Timeline </span> */}
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem" >
                    <span class="material-icons md-36">face</span>
                    <Link to="/register">Register</Link>
                    
                    {/* <span className="topbarIconBadge" > 1</span> */}
                </div>
                {/* <div className="topbarIconNotification" >
                    <span class="material-icons md-36">notifications</span>
                    <span className="topbarIconBadge" > 1</span>
                </div>
                <div className="topbarIconChat" >
                    <span class="material-icons md-36">chat</span>
                    <span className="topbarIconBadge" > 1</span>
                </div> */}
                </div>
                <span className="profilePageButton">
                    <button onClick={()=> history.push('/profile')} className="Top-button">Profile 
                    <img src = "/assets/profilepic4.jpg" alt="" className="topbarImg" />
                    </button>
                    
                </span>
                
            </div>

        </div>
    );
}


