import { GoogleLogin } from "@react-oauth/google";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">UniVerse</h3>
          <span className="loginDesc">
            {" "}
            Connect with friends, students, and clubs to share activities,
            events, interests, and experiences on UniVerse
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              ux_mode="redirect"

            />
          </div>
        </div>
      </div>
    </div>
  );
}
