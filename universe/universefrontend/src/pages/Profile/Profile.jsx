import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post"

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

  

  let components = events.filter(event => event.author === "http://127.0.0.1:8000/users/1/").map((item) => (
    <Post key={item.id} 
    name={
      'laxmanmohanarajan'

    } 
    description={item.description} 
    title={item.eventTitle} 
    date={item.eventDate}
    time={item.eventTime} 
    location={item.location} 
    attending={item.attendees.length} 
    max={item.maxAttendees} />
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
                        <h4 className="profileInfoName">Laxman Mohanarajan</h4>
                        <span className="profileInfoDesc">20</span>
                        <span className="profileInfoDesc">Computer Science</span>
                        <span className="profileInfoDesc">2024</span>
                        <span className="profileInfoDesc">He/Him</span>
                        {/* This is where we can add more info like res cluster, pronouns, major, age, etc */}
                <span className="profileRightBottom">
                    Description: Hello! My name is Laxman, and I am a junior studying CS and English. I like reading, writing, watching movies, and more! :D 
            
                    </span>
                    <div className="sidebarListItemText">
                        <button onClick={()=> history.push('/editprofile')} className="Home-button">Edit Profile</button>
                    </div>

                    <div className="titleWrapper">
                    <span className="profileInfoName" id="events-header">Events Created/Leading</span>
                    </div>
                    </div>
                </div>
                {components}



                    { /*<Feed/>*/ }
                    {/* NOTICE FOR WHEN CODING RIGHTBAR: go back and add {profile} as a parameter */}
                </div>
                
            </div>
            
            
        </>
    )
}
