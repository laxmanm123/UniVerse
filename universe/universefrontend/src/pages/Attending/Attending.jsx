import "./attending.css"
import { useState, useEffect } from "react";

import { getEvents, getUser, getSingleUser } from "../../api";
import Post3 from "../../components/post/Post3";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

export default function Attending(props) {

  const [events, setEvents] = useState([]);

  const [user, setUser] = useState([]);

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

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
      // console.log(user);
    };
    fetchUser();
  }, []);

  function contains(arr, val) {
    for(let i = 0; i < arr.length; ++i) {
        let x = arr[i];
        if (x === val) {
            return true;
        }
    }
    return false;
  }

  const components = events.filter(item => contains(item.attendees, window.localStorage.getItem("username"))
  ).map((item) => (
    <Post3 myKey={item.id} 
    name={
      user.filter(x => x.id === parseInt(item.author.slice(-2).charAt(0)))[0].username
    }
    author = {item.author.slice(-2).charAt(0)}
    description={item.description} 
    title={item.eventTitle} 
    date={item.eventDate}
    time={item.eventTime} 
    location={item.location} 
    attending={item.attendees.length} 
    max={item.maxAttendees} 
    />
  ));
  

  return (
    <>
    <Topbar />
    {/* <Sidebar /> */}
    <div className="aContainer">
      {/* <Sidebar /> */}
        {components}
      
    </div>
  </>
  )
}