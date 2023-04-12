import "./createpost.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import * as React from 'react';


import {
     Button, View, SafeAreaView,
    Text, Alert
} from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'Morning',
  'Afternoon',
  'Evening',
  'Night',
];




export default function CreatePost() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      
  
    const handleMenuItemClick = (
        event: React.MouseEvent<>,
        index: number,
      ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    

  return (
    <div className="eventall">
    <div className="eventName">
    <Topbar />
      <div className="eventWrapper">
          <img className="eventProfileImg" src="/assets/profilepic2.jpg" alt="" />
          Enter name of event:
          <input
            placeholder="Name of Event"
            className="enameInput"
          />
          Enter location of event:
        <input
            placeholder="Location"
            className="enameInput"
          />
        <div>
        <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="What time is the event happening?"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="What time is the event happening?"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>

        Description of event:
        {/* <input
            placeholder="Description"
            className="eDescription"
          /> */}
          <form>
            <textarea rows="15" cols="100"
            placeholder= "Enter details on who you're looking for, what you'd like to do, who to contact, or other helpful information!"  
            />
            </form>


         <hr className="shareHr"/>
            {/* <button className="shareButton">Share</button> */}
            <button onClick={()=> alert('Event has been created')} className="shareButton">Share</button>


            {/* <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                    Upload
             <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
        </IconButton>
        </Stack>
 */}
        </div>
        </div>
        </div>
      
  );
}