import {  useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({onNewItem}){
const nameElement=useRef();
const dueDateElement=useRef();

const handelADDButtonClicked=(event)=>{
 
  event.preventDefault();
  const name=nameElement.current.value;
  const dueDate=dueDateElement.current.value;
  nameElement.current.value="";
  dueDateElement.current.value="";
onNewItem(name,dueDate);
setTodoName("");
setdueDate("");
}
 return  <form className="row"
  onSubmit={handelADDButtonClicked}>
    <div className="col-6">
      <input type="text"
      ref={nameElement}
      placeholder="Enter Todo Here"
     
      />
    </div>
    <div className="col-4">
      <input type="date" 
      ref={dueDateElement}
          />
    </div>
    <div className="col-2">
      <button className="btn btn-success kg_button"><BiMessageAdd /></button>
    </div>
    
  </form>

}
export default AddTodo;