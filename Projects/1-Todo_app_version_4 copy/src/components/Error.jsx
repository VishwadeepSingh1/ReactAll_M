import css from "./Error.module.css";
import { TodoItemsContext } from "../Store/todoitemsstore";
import { useContext } from "react";
const Error=()=>{
 const {todoItems}=useContext(TodoItemsContext);
 
  return(
   todoItems.length===0 && <p className={css.err}>Enjoy your day </p>
  );
}
export default Error;