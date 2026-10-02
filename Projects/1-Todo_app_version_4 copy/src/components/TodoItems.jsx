import css from "./TodoItems.module.css";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../Store/todoitemsstore";
const TodoItems=()=>{
  const {todoItems}=useContext(TodoItemsContext);
 
    return <>


    <div className={css.item}>
      {todoItems.map((item1)=>(<TodoItem 
      key={item1}
      todoName={item1.name} todo_date={item1.dueDate} ></TodoItem>))}
 
 </div>
 </> 
}
export default TodoItems;