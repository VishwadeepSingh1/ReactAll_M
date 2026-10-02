import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Forms from './Components/forms'
import Postlist from './Components/Postlist'
import './App.css'
import PostListProvider from './Components/Store/Post-list-store'



function App() {

const[selectedTab,setselectedTab]=useState("Create Post");

  

  return   (
<PostListProvider>
  <div className='app-Conteiner'>
   <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
   <div className='Content'>
  <Header></Header>
  {selectedTab==="Home"?<Postlist></Postlist>:  <Forms></Forms>}

  
  <Footer></Footer>
  </div>
  </div>
//  </PostListProvider>
  );  
  
}

export default App
