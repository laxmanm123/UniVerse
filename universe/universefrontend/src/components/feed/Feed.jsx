import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"
import { useState } from "react";


export var data = [
    { n: "Meghana", l: "downtown", d: "nov 8", t: "morning", a: 1, m: 5 },
    { n: "Lax", l: "downtown", d: "mar 8", t: "evening", a: 1, m: 5 },
    { n: "Ashna", l: "downtown", d: "sep 8", t: "night", a: 1, m: 5 },
  ];

export default function Feed(props) {

    //  [data] = useState([
    //     { n: "Meghana", d: "nov 8", a: 1, m: 5 },
    //     { n: "Shira", d: "mar 10", a: 2, m: 6 },
    //     { n: "Alex", d: "sep 6", a: 3, m: 7 },
    //   ]);

    
      const components = data.map((item) => (
        <Post name={item.n} date={item.d} time={item.t} attending={item.a} max={item.m} location={item.l}/>
      ));


      
          return (
        <div className="feed">
            <div className="feed">
                <div className="feedWrapper">
                {components}

                    {/* <Post />
                    <Post1 />
                    <Post2 />
                    <Post3 />
                    <Post4 /> */}
                    
                </div>
            </div>
        </div>
    )
}