import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"
import { useState, useEffect } from "react";

import { getEvents, getUser } from "../../api"


export var data = [
  { n: "Meghana", l: "downtown", d: "nov 8", t: "morning", a: 1, m: 5 },
  { n: "Lax", l: "downtown", d: "mar 8", t: "evening", a: 1, m: 5 },
  { n: "Ashna", l: "downtown", d: "sep 8", t: "night", a: 1, m: 5 },
];

export default function Feed(props) {

  //  [data] = useState([
  //     { n: "Meghana", d: "nov 8", a: 1, m: 5 },
  //     { n: "Shira", d: "mar 10", a: 2, m: 6 },
  //     { n: "Alex", d: "sep 6", a: 3, m: 7 },
  //   ]);

  const [events, setEvents] = useState([]);

  const [user, setUser] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      // const user = await getUser(1);
      setEvents(events);
      // setUser(user);
      // console.log(user);
      console.log(events);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(1);
      setUser(user);
      console.log(user);
    };
    fetchUser();
  }, []);

  // const temp = (event) => {
  //     let str = (event.author).slice(-2).charAt(0);
  //     getUser({id: str}).then(res => event.author = res);
  // // }
  //     const getUserName = async (item) => {
  //       let res = await getUser(parseInt(item.author.slice(-2).charAt(0))).then(({data}) => res);
  //       return res.username;
  //     };



  const components = events.map((item) => (
    <Post key={item.id} name={item.author} description={item.description} title={item.eventTitle} date={item.eventDate}
      time={item.eventTime} location={item.location} attending={item.attendees.length} max={item.maxAttendees} />
  ));

  const comp = user.map((user) => (
    user.username
  ));


  return (
    <div className="feed">
      <div className="feed">
        <div className="feedWrapper">
          {comp}
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