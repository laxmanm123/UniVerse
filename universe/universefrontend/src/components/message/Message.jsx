import "./message.css";
//import { format } from "timeago.js";

export default function Message( {own}) {
  return (
    <div className= {own ? "message own" : "message"}>

    <div className="messageTop">
        <img
          className="messageImg"
          src="assets/profilepic2.jpg"
          alt=""
        />
        <p className="messageText">Hello this is a message. I am writing a lot of interesting things. Thank you!</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
