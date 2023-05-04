import "./editprofile.css"
import Topbar from "../../components/topbar/Topbar";

import * as React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

import {createEvent} from '../../api'


export default function EditProfile(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const open = Boolean(anchorEl);
      const history = useHistory();
      
        const handleClick = () => {
          const newData = {fname: fname, lname: lname, age: age, major: major, year: year, pronouns: pro, bio: desc };
          createEvent(newData).then(res => {
            alert("Event has been created");
          }).catch(err => console.log(err));
          history.push('/profile');  
        };      

        const [fname, setfName] = useState('');
        const [lname, setlName] = useState('');
        const [age, setAge] = useState('');
        const [major, setMajor] = useState('');
        const [year, setYear] = useState('');      
        const [pro, setPro] = useState(0);      
        const [desc, setDesc] = useState('');      
     

        const handlefNameChange = (event) => {
          setfName(event.target.value);
        }

        const handlelNameChange = (event) => {
            setlName(event.target.value);
          }
  
    
        const handleAgeChange = (event) => {
          setAge(event.target.value);
        }

        const handleMajorChange = (event) => {
          setMajor(event.target.value);
        }

        const handleYearChange = (date) => {
          setYear(date);
        };
            

        const handlePronounsChange = (event) => {
          setPro(event.target.value);
        }

        const handleDescChange = (event) => {
            setDesc(event.target.value);
          }

      

  return (
    <div className="eventall">
    <div className="eventName">
    <Topbar />
      <div className="eventWrapper">
          <img className="eventProfileImg" src="/assets/profilepic2.jpg" alt="" />
          Enter first name:
          <input
            placeholder="First Name"
            className="enameInput"
            onChange={handlefNameChange}
          />
        Enter last name:
          <input
            placeholder="Last Name"
            className="enameInput"
            onChange={handlelNameChange}
          />
          Enter age:
        <input
            placeholder="Age"
            className="enameInput"
            onChange={handleAgeChange}

          />
            Enter major:
        <input
            placeholder="Major"
            className="enameInput"
            onChange={handleMajorChange}

          />
            Enter year of graduation:
        <input
            placeholder="Year"
            className="enameInput"
            onChange={handleYearChange}

          />
            Enter pronouns:
        <input
            placeholder="Pronouns"
            className="enameInput"
            onChange={handlePronounsChange}

          />
            Enter a little bit about yourself!:
        <input
            placeholder="My hobbies, interests, and anything else."
            className="enameInput"
            onChange={handleDescChange}

          />

<button onClick={handleClick} className="shareButton">
      Share
    </button>

        </div>
        </div>
        </div>
      
  );
}