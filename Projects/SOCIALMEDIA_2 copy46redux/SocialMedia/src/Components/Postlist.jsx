import Cards from "./Cards"
import { PostList } from "./Store/Post-list-store"
import { useContext,useEffect, useState } from "react"
import WelcomeMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"
const Postlist=()=>{

    const{postList,fetching}  =useContext(PostList);







return <>
{fetching && <LoadingSpinner/>}
{!fetching &&
 postList.length===0 && <WelcomeMessage /> 
}
{


postList.map((post)=>(<Cards key={post.id} post={post}/>))}



</>
}
export default Postlist