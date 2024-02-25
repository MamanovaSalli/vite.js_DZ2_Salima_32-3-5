import {useState, useEffect} from "react";
import axios from "axios";


const Posts = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        const get = async () => {
            const response = await axios.get("https://dummyjson.com/posts")
            setPost(response.data.posts)

        }
        get()
    }, [])

    return <div className="cont">
      {posts && posts.map((post)  =>
                <div key={post.id} className= "product">
                   <h2>{post.title}</h2>
                    <span>{post.body}</span>
                </div>)
      }
    </div>

}
export default Posts