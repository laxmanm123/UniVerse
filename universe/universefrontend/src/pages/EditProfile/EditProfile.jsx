import "./editprofile.css"
import Topbar from "../../components/topbar/Topbar";

import * as React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

import {updateUser} from '../../api'


export default function EditProfile(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [data, setData] = useState('');


    const open = Boolean(anchorEl);
      const history = useHistory();      
        const handleClick = () => {
          const newData = {num: 1, 
            fn: String(fname), ln: String(lname), un: "temp", pn: String(pro), ag: parseInt(age), mj: String(major), rc: 'year', b: String(desc)
           };
           console.log(newData)
          updateUser(newData).then(res =>  {
            console.log("res: ", res);
            // setData(res.data);
            alert("Profile has been updated!!");
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