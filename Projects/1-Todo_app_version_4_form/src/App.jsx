
import AppName from "./components/AppItem"
import AddTodo from "./components/AddTodo"
// import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import "./App.css"
import Error from "./components/Error"
function App() {
// const initialtodoItems=[{    now we not using this we pass value by input using todoitems

//   name:"Buy-Milk",
//   dueDate:"04/10/2023",
// },
// {
//   name:"Go-To-College",
//   dueDate:"04/10/2026",
// },
// ];""
const [todoItems,settodoItems]=useState([])
const handelNewItem=(itemName,itemDate)=>{
 settodoItems({currValue})
 
}
const handeldelete=(todoItemName)=>{
const newTodoItems=todoItems.filter((item)=>item.name!==todoItemName);
settodoItems(newTodoItems);
}


  return <> 
  <center><AppName></AppName></center>
 


  <center className="todo">
 
  
  <AddTodo onNewItem={handelNewItem}></AddTodo>
    {todoItems.length==0 && <Error></Error>}
  <TodoItems todoItems={todoItems} onDeleteClick={handeldelete}></TodoItems>
  

</center>
</>
}
export default App
