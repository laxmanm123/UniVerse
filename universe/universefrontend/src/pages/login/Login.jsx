import { GoogleLogin } from "@react-oauth/google";
import "./login.css";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
// import "./login.css";
import { Link } from "react-router-dom";
import * as React from 'react';



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

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    history.push("/profile"); // Redirect to "/profile" page
  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button onClick={()=> history.push('/Home')} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
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
