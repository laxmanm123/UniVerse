import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"



export default function Feed() {
    return (
        <div className="feed">
            <div className="feed">
                <div className="feedWrapper">
                    <Post />
                    <Post1 />
                    <Post2 />
                    <Post3 />
                    <Post4 />
                    
                </div>
            </div>
        </div>
    )
}