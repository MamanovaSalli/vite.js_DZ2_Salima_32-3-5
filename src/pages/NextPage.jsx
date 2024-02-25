import {useEffect, useState} from "react";
import axios from "axios";

const NextPage = () => {
    const [state, setState] = useState([])

     useEffect(() => {
         const get = async () => {
             const response = await axios.get("https://dummyjson.com/posts?limit=2")
             setState(response.data.posts)
         }
         get()
     },[])

     return <div className="cont">
      {state && state.map((post)  =>
                <div key={post.id} className= "product">
                   <h4>{post.title}</h4>
                    <span>{post.body}</span>
                </div>)
      }
    </div>

}
export default NextPage