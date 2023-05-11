import axios from 'axios'
// import CircularJSON from 'circular-json';


const api = axios.create({
    baseURL: "http://127.0.0.1:8000/"
})

    // getEvents = async() => {
    //     let data = await api.get('events/').then(({data}) =>
    //     data);
    //     this.setState({events: data})
    // }

export const getEvents = async() => {
  let data = await api.get('events/').then(({data}) => data);
  return data;
}

export const getUser = async() => {
  let data = await api.get(`users/`).then(({data}) => data);
  return data;
}

export const getSingleUser = async(id) => {
  let data = await api.get(`users/${id}/`).then(({data}) => data);
  return data;
}

export const updateUser = async(obj) => {
  console.log(obj);
  let x = {
    id: obj.num,
    fname: obj.fn,
    lname: obj.ln,
    username: obj.un,
    pronouns: obj.pn,
    age: obj.ag,
    major: obj.mj,
    residential_cluster: obj.rc,
    bio: obj.b
  };
  console.log(x);
  let data = await api.put(`users/update/${obj.num}/`, x);
  console.log(data);
}

// export const updateUser = async(obj) => {
//   // Serialize the object without circular references
//   let data = CircularJSON.stringify(obj);
//   let datamain = await api.put(`users/update/${obj.num}/`, data);
//   console.log(datamain);
// }

export const addAttendee = async (eid, uid) => {
  let res = await api.put(`events/addAttendee/${eid}/${uid}/`);
  return res;
}

export const createEvent = async (obj) => {
    let res = await api.post('events/', {
          author: obj.auth,
          eventTitle: obj.title,
          eventDate: obj.date,
          eventTime: obj.time,
          maxAttendees: obj.maxAttendees,
          description: obj.description,
          attendees: [],
          location: obj.loc,
        })
        console.log(res)
      }
      
export const deleteEvent = async(id) => {
        let res = await api.delete(`/events/${id}/`);
        return res;
    }

// export const deleteEvent = async (eventId) => {
//   const url = 'http://127.0.0.1:8000/events/${eventId}';
//   const response = await fetch(url, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Requested-With': 'XMLHttpRequest',
//       'Access-Control-Allow-Origin': '*'
//     },
//   });
//   const data = await response.json();
//   return data;
// };

 
