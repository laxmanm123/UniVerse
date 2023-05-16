import "./sidebar.css"
import { Link, useHistory } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




export default function Sidebar() {
    const history = useHistory();
  
    return (
        <div className="sidebar">
            <div className="sidebarWrapper"> 
              <u1 className="sidebarList">
                <li className = "sidebarListItem">
                  <span class="material-icons">rss_feed</span>
                    {<div className="sidebarListItemText">
                        <button onClick={()=> history.push('/Home')} className="Home-button">Home</button>
                    </div>}

                    {/* <Button variant="outlined">Feed</Button>  */}
                    {/* <span className="sidebarListItemText">Feed</span> */}
                </li>
                <li className="sidebarListItem">
                  <span class="material-icons">chat</span>
                  <button onClick={()=> history.push('/messenger')} className="Home-button">Chats</button>
                    {/* <Button variant="outlined">Chat</Button> */}
                      {/* <span className="sidebarListItemText"></span>
                      <Link to="/messenger">Chats</Link> */}

                </li>
                <li className="sidebarListItem">
                    <span class="material-icons">groups</span>
                    <button onClick={()=> history.push('/attending')} className="Home-button">Events Attending</button>
                      {/* <span className="sidebarListItemText">Groups</span> */}
                      {/* <Button variant="outlined">Groups</Button> */}
                </li>
                {/* <li className="sidebarListItem">
                    <span class="material-icons">event</span>
                    <button onClick={()=> history.push('/messenger')} className="Home-button">Event List</button>
                    {/* <Button variant="outlined">Event List</Button> */}
                      {/* <span className="sidebarListItemText">Events</span> */}
                <li className="sidebarListItem">
                    <span class="material-icons">edit_square</span>
                <button onClick={()=> history.push('/createpost')} className="Home-button">Create Post</button>
                </li>
              </u1>
            </div>
                

                {/* <Stack spacing={2} direction="row"> */}
              {/* <Button variant="contained">Create Post</Button> */}
              {/* </Stack> */}


        {/* <hr className="sidebarHr" />
        <ul className="sidebarFriendList"></ul> */}
      </div>
  );
}