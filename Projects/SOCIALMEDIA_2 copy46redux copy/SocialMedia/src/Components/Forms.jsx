
import {PostList} from "./Store/Post-list-store";
import { Form, redirect } from "react-router-dom";
import  {RouterProvider} from "react-router-dom";

const Forms=()=>{



   

    return (
    <Form method="POST" className="create-Post" >
       <div className="mb-3 createPost">
    <label htmlFor="userName" className="form-label">UserName</label>
    <input type="number" name="userId" className="form-control" Id="userName" placeholder="Enter UserName"/>
    
  </div>
  <div className="mb-3 createPost">
    <label htmlFor="title" className="form-label">Post-title</label>
    <input type="text" name="title" className="form-control" id="Title" placeholder="Enter your title"/>
    
  </div>
  <div className="mb-3 createPost">
    <label htmlFor="reaction" className="form-label">How many people reacted to this post</label>
    <input type="number" name="reactions" className="form-control" id="title" placeholder="Enter No of Reactions"/>
    
  </div>
  <div className="mb-3 createPost">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" name="body" rows="4" className="form-control" id="Body" placeholder="Enter your Content"/>
    
  </div>
   <div className="mb-3 createPost">
    <label htmlFor="hashTag" className="form-label">Enter the hashTag</label>
    <input type="text" name="tags" className="form-control" id="hashgTag" placeholder="Enter the no og hashtags"/>
    
  </div>
   
  <button type="submit"  className="btn btn-primary">Post</button>
</Form>
    );
}
 export async function createPostAction({request}){
  const formData= await request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  console.log(postData);
 fetch('https://dummyjson.com/posts/add', {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData),
})
.then((res) => res.json())
.then((post)=>{console.log(post);
 
});
return redirect("/")

}
export default Forms;