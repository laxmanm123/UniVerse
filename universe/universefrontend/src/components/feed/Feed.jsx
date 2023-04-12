import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"


export default function Feed() {
    return (
        <div className="feed">
            <div className="feed">
                <div className="feedWrapper">
                    <Post />
                    <Post1 />
                    <Post2 />
                    <Post3 />
                    
                </div>
            </div>
        </div>
    )
}