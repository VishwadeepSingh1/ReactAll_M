import {createContext,useReducer} from "react";


 export const PostList=createContext( 
  {   postList:[],
    addPost:()=>{},
    deletePost:()=>{},}
);

const  postListReducer=(currPostList,action)=>{
   let newPostList=currPostList;
   if(action.type==='DELETE_POST'){
newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
   }else if(action.type==="ADD_POST"){
newPostList=[action.payload,...currPostList]
   }
return newPostList;
}
const PostListProvider=({children})=>{

    const [postList,dispatchPostList]=useReducer(postListReducer,Default_Post_List);
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
const deletePost=(postId)=>{
   dispatchPostList({
      type:"DELETE_POST",
payload:{
   postId,
}
   })
}


return <PostList.Provider value={
  {  postList, addPost, deletePost}}>
{children}
</PostList.Provider>
};
const Default_Post_List=[{
   id:"1",
   title:'Going to Mumbai',
   body:"Hii,, i am going to mumbai for my bacation ,Hope enjoy a lot peace out",
   reactions:"15",
   userId:"",
   tags:["Vacation","Mumbai","Enjoying"] 
},
{
   id:"2",
   title:'Graduated',
   body:"Hii,, i am going to mumbai for my vacation ,To celebrate our result ",
   reactions:"2",
   userId:"",
   tags:["Vacation","Celebrate","Result"] 
}
];
export default PostListProvider;