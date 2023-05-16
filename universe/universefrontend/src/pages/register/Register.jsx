import "./register.css"
import { Link, useHistory } from "react-router-dom";

import {useState} from 'react';

import { createUser} from '../../api';

export default function Register() {
    const history = useHistory();
    const [data, setData] = useState('');


    const [myfname, setfName] = useState('');
    const [mylname, setlName] = useState('');
    const [myusername, setUsername] = useState('');
    const [mypassword, setPassword] = useState('');
    const [myemail, setEmail] = useState('');
    const [myage, setAge] = useState('');
    const [mymajor, setMajor] = useState('');
    const [myresident, setResident] = useState('');      
    const [pro, setPro] = useState(0);      
    const [mydesc, setDesc] = useState('');
    
    const handlefNameChange = (event) => {
        setfName(event.target.value);
      }

      const handleAge = (event) => {
        setAge(event.target.value);
      }
      
    //   const handlePronounsChange = (event) => {
    //     setPro(event.target.value);
    //   }

      const handleUserChange = (event) => {
        setUsername(event.target.value);
      }

      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }

      const handlelNameChange = (event) => {
          setlName(event.target.value);
        }


      const handleMajorChange = (event) => {
        setMajor(event.target.value);
      }

      const handleResidentChange = (event) => {
        setResident(event.target.value);
      };
          
      const handleDescChange = (event) => {
          setDesc(event.target.value);
        };

        const handleProChange = (event) => {
          setPro(event.target.value);
        }


        const handleClick = () => {
            if (myemail.match(/@umass.edu$/) == null) {
                alert("Must use UMass Amherst email.")
            } else {
            const newData = 
            {
                username : myusername,
                fname : myfname,
                lname: mylname,
                pronouns: pro,
                age: parseInt(myage),
                major: mymajor,
                residential_cluster: myresident,
                bio: mydesc,
                email: myemail,
                password: mypassword
            };

            //console.log(newData)
            // setData([...data, newData]);
            // data.push(newData);
            createUser(newData).then(res => {
                console.log("res: ", res);
              setData(res.data);
              window.localStorage.setItem("userID", res.data.id);
            }).catch(err => console.log(err));
            alert("Account has been created");
        
            history.push('/');  
          };
        }      
  



    return (
        <div className="rlogin">
            <div className="rloginWrapper">
                <div className="rloginLeft">
                    <h3 className="rloginLogo">UniVerse</h3>
                    <span className="rloginDesc"> Join the ultimate campus community and never miss out on the fun with UniVerse</span>
                </div>
                <div className="rloginRight">
                    <div className="box">
                        <div className="rloginBox">
                            <div className="left">
                                <span className="rinputBox"><input placeholder="Username" className="rloginInput" onChange={handleUserChange}/></span>
                               
                                <span className="rinputBox"><input placeholder="Email" className="rloginInput" onChange={handleEmailChange}/></span>
                                <span className="rinputBox"><input placeholder="Password" className="rloginInput" onChange={handlePasswordChange}/></span>
                                <span className="rinputBox"><input placeholder="First Name" className="rloginInput" onChange={handlefNameChange}/></span>
                                <span className="rinputBox"><input placeholder="Last Name" className="rloginInput" onChange={handlelNameChange}/></span>

                            </div>
                            <div className="right">
                                <span className="rinputBox">
                                    {/* <label for="pronouns">Pronouns: </label> */}
                                    {/* <select name="pronouns" className="rloginInput"id="pronouns">
                                        <option value="" disabled selected>Pronouns</option>
                                        <option value="she-her">She/Her</option>
                                        <option value="he-him">He/Him</option>
                                        <option value="they-them">They/Them</option>
                                        <option value="she-they">She/They</option>
                                        <option value="he-they">He/They</option>
                                        <option value="any">Any</option>
                                        <option value="other">Other (specify in bio)</option> */}
                                        {/* onChange = {handlePronounsChange} */}
                                    {/* </select> */}
                                    <input placeholder="Pronouns" className="rloginInput" onChange={handleProChange}/>
                                </span>
                               
                                <span className="rinputBox"><input type="number" placeholder="Age" className="rloginInput" value = {myage} onChange={handleAge}/></span>
                                <span className="rinputBox"><input placeholder="Major" className="rloginInput" onChange={handleMajorChange}/></span>
                                <span className="rinputBox"><input placeholder="Res Cluster" className="rloginInput" onChange={handleResidentChange}/></span>
                                <span className="rinputBox"><input className="rloginInput" rows = "2" cols = "20" name = "description" placeholder="Bio" maxlength="100" onChange={handleDescChange}>
                                </input></span>
                            </div>
                            {/* Add fields to register: pronouns (dropdown), Age (number field), Major (can input several), Res cluster (dropdown), bio (limit # of characters)*/}
                           
                           
                            {/* <span className="rinputBox"><button className="rloginRegisterButton">
                                Log into Account
                            </button></span> */}
                        </div>
                        <div>
                            <span className="rinputBox"><button onClick={handleClick} className="rloginButton">Sign Up</button></span>
                        </div>
                       
                    </div>
                   
                   
                </div>
            </div>
        </div>
    )
}