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

export const createEvent = async (auth, title, date, loc, type) => {
    let res = await api.post('/', {
          author: auth,
          eventTitle: title,
          eventDate: date,
          location: loc,
          typeOfEvent: type
        })
        console.log(res)
      }
      
export const deleteEvent = async(id) => {
        let res = await api.delete(`/events/${id}`);
    }
 
