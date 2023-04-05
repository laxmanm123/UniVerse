import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft"> 
                <span className="logo">UniVerse</span>
            </div>

            <div className="topbarCenter"> 
            <div className="searchbar">
            <span class="material-icons md-36">search</span>            
                <input placeholder="Search or filter for events" className="searchInput"/>
            </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink"> Homepage </span>
                    <span className="topbarLink"> Timeline </span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem" >
                    <span class="material-icons md-36">face</span>
                    <span className="topbarIconBadge" > 1</span>
                </div>
                <div className="topbarIconNotification" >
                    <span class="material-icons md-36">notifications</span>
                    <span className="topbarIconBadge" > 1</span>
                </div>
                <div className="topbarIconChat" >
                    <span class="material-icons md-36">chat</span>
                    <span className="topbarIconBadge" > 1</span>
                </div>
                </div>
                <img src = "/assets/profilepic1.jpg" alt="" className="topbarImg" />
            </div>

        </div>
    );
}