
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import DisplayCounter from './Components/DisplayCounter';
import Conteiner from './Components/Conteiner';
import Controls from './Components/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './Components/PrivacyMessage';
function App() {
 const privacy=useSelector(store=>store.privacy);

  return (
    <>

    <div className="px-4 py-5 my-5 text-center">
           <Conteiner> 
     <Header></Header>
      
         <div className="col-lg-6 mx-auto"> 

     {   privacy?<PrivacyMessage/>:<DisplayCounter/>}
    
          <Controls></Controls>
              </div> 
              </Conteiner>
              </div>
           
    </>
  )
}

export default App
