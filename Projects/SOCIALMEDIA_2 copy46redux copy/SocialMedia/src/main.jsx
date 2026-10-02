import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'

import {RouterProvider,createBrowserRouter} from "react-router-dom";
import App from './App.jsx';
import Forms, { createPostAction } from './Components/Forms.jsx';
import { PostList } from './Components/Store/Post-list-store.jsx';
import Postlist, { postLoader } from './Components/Postlist.jsx';
const router=createBrowserRouter([
  {path:"/",element:<App/>, children:[{path:"/",element:<Postlist></Postlist>,loader:postLoader},
  {path:"/create-post",element:<Forms/>,action:createPostAction}]},
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <RouterProvider router={router}/>
  
  </StrictMode>,
)
