import Cards from "./Cards"
import { PostList } from "./Store/Post-list-store"
import { useContext,useEffect, useState } from "react"
import WelcomeMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"
import { useLoaderData } from "react-router-dom"
const Postlist=()=>{

  

const postList=useLoaderData();





return <>

{
 postList.length===0 && <WelcomeMessage /> 
}
{


postList.map((post)=>(<Cards key={post.id} post={post}/>))}



</>
};
export const postLoader=()=>{
  return   fetch('https://dummyjson.com/posts')
.then((res) => res.json())
.then((data)=>{
    
    return data.posts;
  
});
}
export default Postlist