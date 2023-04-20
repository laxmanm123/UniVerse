import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Post from "../../components/post/Post"


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
                        <span className="profileInfoDesc">Age</span>
                        <span className="profileInfoDesc">Major</span>
                        <span className="profileInfoDesc">Year</span>
                        <span className="profileInfoDesc">Gender & Pronouns</span>
                        {/* This is where we can add more info like res cluster, pronouns, major, age, etc */}
                <span className="profileRightBottom">
                    Description Placeholder: Hello! My name is Meghana, and I am a junior studying CS and English. I like reading, writing, watching movies, and more! :D 
            
                    </span>
                    <div className="titleWrapper">
                    <span className="profileInfoName">Events Created/Leading</span>
                    </div>
                    </div>
                </div>

                    <Post />

                   { /*<Feed/>*/ }
                    {/* NOTICE FOR WHEN CODING RIGHTBAR: go back and add {profile} as a parameter */}
                    <Rightbar profile/>  
                </div>
                
            </div>
            
            
        </>
    )
}
