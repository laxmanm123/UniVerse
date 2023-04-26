import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">UniVerse</h3>
                    <span className="loginDesc"> Connect with friends, students, and clubs to share activities, events, interests, and experiences on UniVerse</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <span className="inputBox"><input placeholder="Username" className="loginInput" /></span>
                        
                        <span className="inputBox"><input placeholder="Email" className="loginInput" /></span>
                        <span className="inputBox"><input placeholder="Password" className="loginInput" /></span>
                        <span className="inputBox"><input placeholder="Password Again" className="loginInput" /></span>
                        <span className="inputBox"><button className="loginButton">Sign Up</button></span>
                        <span className="inputBox"><button className="loginRegisterButton">
                            Log into Account
                        </button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}