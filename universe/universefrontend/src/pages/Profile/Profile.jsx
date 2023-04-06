import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="" alt="" />
                        <img className="profileUserImg" src="" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Name of User</h4>
                        <span className="profileInfoDesc">Bio of User</span>
                        {/* This is where we can add more info like res cluster, pronouns, major, age, etc */}
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    {/* NOTICE FOR WHEN CODING RIGHTBAR: go back and add {profile} as a parameter */}
                    <Rightbar profile/>  
                </div>
                
            </div>
            
            
        </div>
        </>
    )
}
