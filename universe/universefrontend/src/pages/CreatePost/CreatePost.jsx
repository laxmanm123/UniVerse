import "./createpost.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {data} from "../../components/feed/Feed.jsx"

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import * as React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {createEvent} from '../../api'


import {
    View, SafeAreaView,
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




export default function CreatePost(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [attending, setAttending] = useState(0);
  const [max, setMax] = useState(0);
  const [data, setData] = useState('');


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setSelectedIndex(event.currentTarget);

      };
      
  
    const handleMenuItemClick = (
        event: React.MouseEvent<>,
        index: number,
      ) => {
        setSelectedIndex(index);  
        setEventTime(options[index]);
        setAnchorEl(null);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      // const [data, setData] = useState([]);

      const history = useHistory();
      
        const handleClick = () => {
          const newData = {auth: "http://127.0.0.1:8000/users/1/", date: String(selectedDate), time: eventTime, title: eventName, loc: eventLocation, maxAttendees: parseInt(eventMax) };
          // setData([...data, newData]);
          // data.push(newData);
          createEvent(newData).then(res => {
            setData(res.data);
            alert("Event has been created");
          }).catch(err => console.log(err));
          // for (let i = 0; i < data.length; i++) {
          // alert(data[i].n);
          // }
          history.push('/');  
        };      

        const [eventName, setEventName] = useState('');
        const [eventLocation, setEventLocation] = useState('');
        const [selectedDate, setSelectedDate] = useState('');
        const [eventTime, setEventTime] = useState('');      
        const [eventAttending, setEventAttending] = useState('');
        const [eventMax, setEventMax] = useState(0);      
        const [eventDesc, setEventDesc] = useState('');      
     

        const handleEventMax = (event) => {
          setEventMax(event.target.value);
        }
      
      
    
        const handleEventNameChange = (event) => {
          setEventName(event.target.value);
        }

        const handleEventLocationChange = (event) => {
          setEventLocation(event.target.value);
        }

        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
            

        const handleEventDescChange = (event) => {
          setEventDesc(event.target.value);
        }

      

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
            onChange={handleEventNameChange}
          />
          Enter location of event:
        <input
            placeholder="Location"
            className="enameInput"
            onChange={handleEventLocationChange}

          />
        <div>
        <div>
        Enter date of event:
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={selectedDate} onChange = {(newValue) => {setSelectedDate(newValue)}} />
    </LocalizationProvider>


        <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "peachpuff" }}
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
            secondary={eventTime}
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

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="outlined-number"
          label="Number of Attendees"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value = {eventMax}
          onChange = {handleEventMax}
        />

      </div>
      <div>
      <TextField id="outlined-search" label="Link to Event" type="search" />
      </div>

    </Box>

        Description of event:
        {/* <input
            placeholder="Description"
            className="eDescription"
          /> */}
          <form>
            <textarea rows="15" cols="100"
            placeholder= "Enter details on who you're looking for, what you'd like to do, who to contact, or other helpful information!"  
            onChange = {handleEventDescChange}
            />
            </form>


         <hr className="shareHr"/>
            {/* <button className="shareButton">Share</button> */}
            <button onClick={handleClick} className="shareButton">
      Share
    </button>


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