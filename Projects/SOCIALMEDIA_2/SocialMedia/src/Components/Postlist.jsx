import Cards from "./Cards"
import { PostList } from "./Store/Post-list-store"
import { useContext,useEffect, useState } from "react"
import WelcomeMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"
const Postlist=()=>{

    const{postList,addInitialPosts}  =useContext(PostList);

const [fetching,setFetching]=useState(false);


useEffect(()=>{
setFetching(true);
const controller = new AbortController();
const signal=controller.signal;
 fetch('https://dummyjson.com/posts',{signal})
.then((res) => res.json())
.then((data)=>{
    
    addInitialPosts(data.posts);
    setFetching(false);
});
return ()=>{
    console.log("cleaning up use EFfect");
    controller.abort();
};
},[]);


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