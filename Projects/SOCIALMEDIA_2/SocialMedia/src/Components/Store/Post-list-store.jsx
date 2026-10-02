import {createContext,useReducer} from "react";


 export const PostList=createContext( 
  {   postList:[],
    addPost:()=>{},
    addInitialPosts: ()=>{},
    deletePost:()=>{},}
);

const  postListReducer=(currPostList,action)=>{
   let newPostList=currPostList;
   if(action.type==='DELETE_POST'){
newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
   } else if(action.type==="ADD_INITIAL_POSTS"){
     
     return  newPostList=action.payload.posts;
   }
   else if(action.type==="ADD_POST"){
newPostList=[action.payload,...currPostList]
   }
  
return newPostList;
}
const PostListProvider=({children})=>{

    const [postList,dispatchPostList]=useReducer(postListReducer,[]);
    const addPost=( userId,postTitle,postBody,userreactions,hashTag)=>{


dispatchPostList({
   type:'ADD_POST',
   payload:{
      id: Date.now(),
      title:postTitle,
      body:postBody,
      reactions:userreactions,
      userId:userId,
      tags:hashTag,
   
      }
})
    };
    const addInitialPosts=(posts)=>{


dispatchPostList({
   type:"ADD_INITIAL_POSTS",
   payload:{
      posts,
   
      }
})
    };
const deletePost=(postId)=>{
   dispatchPostList({
      type:"DELETE_POST",
payload:{
   postId,
}
   })
}


return <PostList.Provider value={
  {  postList, addPost, addInitialPosts,deletePost}}>
{children}
</PostList.Provider>
};

export default PostListProvider;