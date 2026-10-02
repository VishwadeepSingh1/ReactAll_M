import Cards from "./Cards"
import { PostList } from "./Store/Post-list-store"
import { useContext } from "react"
const Postlist=()=>{

    const{postList}  =useContext(PostList)


return <>
{postList.map((post)=>(<Cards key={post.id} post={post}/>))}



</>
}
export default Postlist