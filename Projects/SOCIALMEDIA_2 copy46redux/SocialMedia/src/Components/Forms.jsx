import { useEffect, useRef } from "react";
import { useContext } from "react";
import {PostList} from "./Store/Post-list-store";
const Forms=()=>{

const {addPost}=useContext(PostList);


const userIdElement= useRef();
const postTitleElement= useRef();
const postBodyElement= useRef();
const userreactionsElement= useRef();
const hashgTagElement= useRef(); 

const handelSubmit=(event)=>{
event.preventDefault();
const userId=userIdElement.current.value;
const postTitle=postTitleElement.current.value;
const postBody=postBodyElement.current.value;
const userreactions=userreactionsElement.current.value;
const hashTag=hashgTagElement.current.value.split(" ");
   

userIdElement.current.value="";
postTitleElement.current.value="";
postBodyElement.current.value="";
userreactionsElement.current.value="";
hashgTagElement.current.value="";

fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
     
      title:postTitle,
      body:postBody,
      reactions:userreactions,
      userId:userId,
      tags:hashTag,
   
      })
})
.then((res) => res.json())
.then((post)=>addPost(post));



};



    return (
    <form className="create-Post" onSubmit={handelSubmit}>
       <div className="mb-3 createPost">
    <label htmlFor="userName" className="form-label">UserName</label>
    <input type="text" ref={userIdElement} className="form-control" Id="userName" placeholder="Enter UserName"/>
    
  </div>
  <div className="mb-3 createPost">
    <label htmlFor="title" className="form-label">Post-title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="Title" placeholder="Enter your title"/>
    
  </div>
  <div className="mb-3 createPost">
    <label htmlFor="reaction" className="form-label">How many people reacted to this post</label>
    <input type="number" ref={userreactionsElement} className="form-control" id="title" placeholder="Enter No of Reactions"/>
    
  </div>
  <div className="mb-3 createPost">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBodyElement} rows="4" className="form-control" id="Body" placeholder="Enter your Content"/>
    
  </div>
   <div className="mb-3 createPost">
    <label htmlFor="hashTag" className="form-label">Enter the hashTag</label>
    <input type="text" ref={hashgTagElement} className="form-control" id="hashgTag" placeholder="Enter the no og hashtags"/>
    
  </div>
   
  <button type="submit"  className="btn btn-primary">Post</button>
</form>
    );
}
export default Forms;