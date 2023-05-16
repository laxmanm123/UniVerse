import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post"
import Post1 from "../../components/post/Post1";

import { Link, useHistory } from "react-router-dom";


import { useState, useEffect } from "react";

import { getEvents, getUser } from "../../api"


export default function Profile(props) {

  const history = useHistory();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      // const user = await getUser(1);
      setEvents(events);
      // setUser(user);
      // console.log(user);
      // console.log(events);
    };
    fetchEvents();
  }, []);




  const [user, setUser] = useState([]);

  const curId = 1;
    
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(1);
      setUser(user);
      // setUser(user);
      // console.log(user);
      // console.log(events);
    };
    fetchUser();
  }, []);

  
  const myID = parseInt(window.localStorage.getItem("userID"));

  let components = events.filter(event => event.author === `http://127.0.0.1:8000/users/${myID}/`).map((item) => (
    <Post1 myKey={item.id} 
    name={item.username}
    author = {item.author.slice(-2).charAt(0)}
    description={item.description} 
    title={item.eventTitle} 
    date={item.eventDate}
    time={item.eventTime} 
    location={item.location} 
    attending={item.attendees.length} 
    max={item.maxAttendees}
    interest = {item.attendees} 
/>
  ));

    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img className="profileCoverImg" src="assets/header.jpg" alt="" />
                        <img className="profileUserImage" src="assets/profilepic4.jpg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <span className="profileInfoName">{props.fname} {props.lname}</span>
                        <span className="profileInfoDesc">Age: {props.age}</span>
                        <span className="profileInfoDesc">Major: {props.major}</span>
                        <span className="profileInfoDesc">Residential Cluster: {props.residential_cluster}</span>
                        <span className="profileInfoDesc">Pronouns: {props.pronouns}</span>
                        <span className="profileInfoDesc">Bio: {props.bio} </span>
                    <div className="sidebarListItemText">
                        <button onClick={()=> history.push('/editprofile')} className="Home-button">Edit Profile</button>
                    </div>

                    <div className="titleWrapper">
                    <span className="profileInfoName" id="events-header">Events Created/Leading</span>
                    </div>
                    </div>
                </div>
                {components}

                </div>
                
            </div>
            
            
        </>
    )
}