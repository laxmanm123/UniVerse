import "./sidebar.css"
import {Link} from "react-router-dom";



export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper"> sidebar  </div>
                <u1 className="sidebarList">
                    <li className = "sidebarListItem">
                    <span class="material-icons">rss_feed</span>
                      <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                    <span class="material-icons">chat</span>
                      <span className="sidebarListItemText"></span>
                      <Link to="/messenger">Chats</Link>

                    </li>
                    <li className="sidebarListItem">
                    <span class="material-icons">groups</span>
                      <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                    <span class="material-icons">event</span>
                      <span className="sidebarListItemText">Events</span>
                    </li>
                </u1>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList"></ul>
      </div>
  );
}