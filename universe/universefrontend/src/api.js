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

export const createEvent = async (obj) => {
    let res = await api.post('events/', {
          //author: obj.auth,
          eventTitle: obj.title,
          eventDate: obj.date,
          eventTime: 'noon',
          maxAttendees: obj.maxAttendees,
          description: "obj.d",
          attendees: '',
          location: obj.loc,
          typeOfEvent: 0
        })
        console.log(res)
      }
      
export const deleteEvent = async(id) => {
        let res = await api.delete(`/events/${id}`);
    }
 
