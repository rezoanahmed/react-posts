import { useEffect, useState } from "react"
import "./Post.css"
import Post from "./Post";
export default function Posts(){
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h1 className="postHeader">Total Post: {post.length}</h1>
            {
                post.map(element => <Post post={element}></Post>)
            }
        </div>
    )
}