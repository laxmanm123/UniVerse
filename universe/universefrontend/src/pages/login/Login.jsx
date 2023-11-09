import { GoogleLogin } from "@react-oauth/google";
import "./login.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
// import "./login.css";
import { Link } from "react-router-dom";
import * as React from 'react';
import { useState } from "react";



let whoami = 0;

// export default function Login() {
//   const history = useHistory();

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h3 className="loginLogo">UniVerse</h3>
//           <span className="loginDesc">
//             {" "}
//             Connect with friends, students, and clubs to share activities,
//             events, interests, and experiences on UniVerse
//           </span>
//         </div>
//         <div className="loginRight">-
//           <div className="loginBox">
//             <input placeholder="Email" className="loginInput" />
//             <input placeholder="Password" className="loginInput" />
//              <button onClick={()=> history.push('/home')} className="loginButton">Log In</button>
//             <span className="loginForgot">Forgot Password?</span>
//             <button className="loginRegisterButton">
//               Create a New Account
//             </button>
//             {/* <GoogleLogin
            
//               onSuccess={(credentialResponse) => {
                
//                 <Redirect to="/profile" />
//                 console.log(credentialResponse);
//               }}
//               onError={() => {
//                 console.log("Login Failed");
//               }}
//               ux_mode="popup"
//               redirectUri="http://localhost:3000/profile"

//             /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    history.push("/profile"); // Redirect to "/profile" page
  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }


  const testt = () => {
    if (username === "ajain" && password === "pass") {
      whoami = 3;
      const myname = "ajain"
    window.localStorage.setItem("userID", whoami);
    window.localStorage.setItem("username", myname);
    history.push('/');
    window.location.reload();
    // console.log(whoami);
    } else if (username === "mvadassery" && password === "pass"){
      whoami = 2;
      const myname = "mvadassery"
    window.localStorage.setItem("userID", whoami);
    window.localStorage.setItem("username", myname);
    history.push('/');
    window.location.reload();
    // console.log(whoami);
    } else if (username === "lmohanarajan" && password === "pass"){
      whoami = 1;
      const myname = "lmohanarajan"
    window.localStorage.setItem("userID", whoami);
    window.localStorage.setItem("username", myname);
    history.push('/');
    // console.log(whoami);
    window.location.reload();

    } else if (username === "sbenanat" && password === "pass"){
      whoami = 4;
      const myname = "sbenanat"
    window.localStorage.setItem("userID", whoami);
    window.localStorage.setItem("username", myname);
    history.push('/');
    // console.log(whoami);
    window.location.reload();

    } else {
      alert("Invalid login. Please try again.")
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">UniVerse</h3>
          <span className="loginDesc">
            Connect with friends, students, and clubs to share activities,
            events, interests, and experiences on UniVerse
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" onChange={handleUsername}/>
            <input type = "password" placeholder="Password" className="loginInput" onChange={handlePassword}/>
            <button onClick={testt} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button onClick={()=> history.push('/register')} className="loginRegisterButton">
              Create a New Account
            </button>
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginError}
              uxMode="popup"
              redirectUri="http://localhost:3000/profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}