import React from 'react';
import "./rightbar.css";
import { Link, useHistory } from "react-router-dom";
import Profile from '../../pages/Profile/Profile';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export {timee};

var timee = "";

export default function Rightbar() {

  const history = useHistory();
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
    window.localStorage.setItem("timee", "Morning");
    history.push('/');  
    window.location.reload();


  };
  const handleClose2 = () => {
    setAnchorEl(null);
    window.localStorage.setItem("timee", "Afternoon");
    history.push('/');  
    window.location.reload();


  };
  const handleClose3 = () => {
    setAnchorEl(null);
    window.localStorage.setItem("timee", "Evening");
    history.push('/');  
    window.location.reload();


  };
  const handleClose4 = () => {
    setAnchorEl(null);
    window.localStorage.setItem("timee", "Night");
    history.push('/');  
    window.location.reload();


  };
  const handleClose5 = () => {
    setAnchorEl(null);
    window.localStorage.setItem("timee", "");
    window.location.reload();

  };

  

    return (
        <div className="rightbar">
        <div className="profileTab">
        <img className="rightProfileImg" src="assets/profilepic4.jpg" alt="" />
        <div className="rightButton">
        <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filter By Time
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose1}>Morning</MenuItem>
        <MenuItem onClick={handleClose2}>Afternoon</MenuItem>
        <MenuItem onClick={handleClose3}>Evening</MenuItem>
        <MenuItem onClick={handleClose4}>Night</MenuItem>
        <MenuItem onClick={handleClose5}>-</MenuItem>

      </Menu>
      </div>
        </div>
        </div>
    );
  };