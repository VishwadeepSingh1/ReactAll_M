import { useState } from "react";
import { TodoItemsContext } from "../Store/todoitemsstore";
import { useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo(){
  const{addNewItem}=useContext(TodoItemsContext);
const [name,setTodoName]=useState("");
const [dueDate,setdueDate]=useState("");
const handelNameChange=(event)=>{
setTodoName(event.target.value);
}
const handelDateChange=(event)=>{
 setdueDate(event.target.value);
}
const handelADDButtonClicked=()=>{
addNewItem(name,dueDate);
setTodoName("");
setdueDate("");
}
 return  <div className="row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here"
      value={name}
      onChange={handelNameChange}/>
    </div>
    <div className="col-4">
      <input type="date" value={dueDate}    onChange={handelDateChange}/>
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg_button" onClick={handelADDButtonClicked}><BiMessageAdd /></button>
    </div>
    
  </div>   
}
export default AddTodo;