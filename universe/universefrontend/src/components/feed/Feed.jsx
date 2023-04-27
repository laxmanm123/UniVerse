import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"
import { useState } from "react";


export var data = [
    { n: "Meghana", d: "nov 8", a: 1, m: 5 },
    { n: "Shira", d: "mar 10", a: 2, m: 6 },
    { n: "Alex", d: "sep 6", a: 3, m: 7 },
  ];

export default function Feed(props) {

    //  [data] = useState([
    //     { n: "Meghana", d: "nov 8", a: 1, m: 5 },
    //     { n: "Shira", d: "mar 10", a: 2, m: 6 },
    //     { n: "Alex", d: "sep 6", a: 3, m: 7 },
    //   ]);

    
      const components = data.map((item) => (
        <Post name={item.n} date={item.d} attending={item.a} max={item.m} />
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