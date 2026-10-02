import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todoitemsstore";
function TodoItem({todoName,todo_date}){
  const {deleteItem}=useContext(TodoItemsContext);
    return <>
    
    <div className="row">
    <div className="col-6">
     {todoName}
    </div>
    <div className="col-4">
      
    {todo_date}
    </div>
    <div className="col-2">
     <button type="button" className="btn btn-danger kg_button" onClick={()=>deleteItem(todoName)}><MdDelete /></button>
    </div>
  </div>
  
  </>
}
export default  TodoItem;