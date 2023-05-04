import axios from 'axios'

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

export const getUser = async(id) => {
  let data = await api.get(`users/`).then(({data}) => data);
  return data;
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
        let res = await api.delete(`/events/${id}`);
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

 
