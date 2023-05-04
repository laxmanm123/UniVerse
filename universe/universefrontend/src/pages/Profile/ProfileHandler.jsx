
import Profile from "../Profile/Profile"
import EditProfile from "../EditProfile/EditProfile"

import { useState, useEffect } from "react";

import { getEvents, getUser, getSingleUser } from "../../api"



export default function ProfileHandler(props) {


  const [events, setEvents] = useState([]);

  const [user, setUser] = useState([]);


  const components = events.map((item) => (
    <Post myKey={item.id} 
    name={
      user.filter(x => x.id === parseInt(item.author.slice(-2).charAt(0)))[0].username
    } 
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
    <div className="feed">
      <div className="feed">
        <div className="feedWrapper">
          {components}

        </div>
      </div>
    </div>
  )
}