import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post"
import Profile from "./Profile";

import { Link, useHistory } from "react-router-dom";


import { useState, useEffect } from "react";

import { getEvents, getUser, getSingleUser } from "../../api"



export default function ProfileHandler(props) {

  const [user, setUser] = useState([]);

useEffect(() => {
  const fetchUser = async () => {
    const user = await getUser();
    setUser(user);
  };
  fetchUser();
}, []); // get user 1? how are we filtering?

const userID = window.localStorage.getItem("userID");

const item = user.find(obj => obj.id === parseInt(userID));

if (!item) {
  return <div>Loading...</div>;
}

// const item = user.filter(obj => obj.id === 1)[0]

console.log(item)

// const fin = 
//   <Profile id={item.id} 
//   firstName={item.fname}
//   lastName = {item.lname}
//   pronouns={item.pronouns} 
//   age={item.age} 
//   residenial_cluster={item.residential_cluster}
//   major={item.major} 
//   bio={item.bio} 
//   />
// ;


    return (
        <div>
  <Profile id={item.id} 
  firstName={item.fname}
  lastName = {item.lname}
  pronouns={item.pronouns} 
  age={item.age} 
  residenial_cluster={item.residential_cluster}
  major={item.major} 
  bio={item.bio} 
  />
      </div>
    )
}