import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"
import { useState, useEffect } from "react";

import { getEvents, getUser } from "../../api"



export default function Feed(props) {


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

  // const getUserName = () => {
  //   events = events.map((event) => {
  //     let i = parseInt(event.author.slice(-2).charAt(0))
  //     let auth = user.filter(x => x.id === i)[0]
  //     console.log(auth.name);
  //   })
  //   console.log('HI')
  // }

  // const temp = (event) => {
  //     let str = (event.author).slice(-2).charAt(0);
  //     getUser({id: str}).then(res => event.author = res);
  // // }
  //     const getUserName = async (item) => {
  //       let res = await getUser(parseInt(item.author.slice(-2).charAt(0))).then(({data}) => res);
  //       return res.username;
  //     };
//user.filter(x => x.id === parseInt(item.author.slice(-2).charAt(0)))[0]


  const components = events.map((item) => (
    <Post key={item.id} 
    name={
      user.filter(x => x.id === parseInt(item.author.slice(-2).charAt(0)))[0].username
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
    <div className="feed">
      <div className="feed">
        <div className="feedWrapper">
          {components}

          {/* <Post />
                    <Post1 />
                    <Post2 />
                    <Post3 />
                    <Post4 /> */}

        </div>
      </div>
    </div>
  )
}