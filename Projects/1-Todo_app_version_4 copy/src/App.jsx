
import AppName from "./components/AppItem"
import AddTodo from "./components/AddTodo"
// import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import { TodoItemsContext } from "./Store/todoitemsstore"
import { useState,useReducer   } from "react"
import "./App.css"
import Error from "./components/Error"

function App() {

const [todoItems,settodoItems]=useState([]);
const [newTodoItems,dispatchTodoItems]=useReducer();
const addNewItem=(itemName,itemDate)=>{

 
  settodoItems((currValue)=>
 [...currValue,{name:itemName,dueDate:itemDate}]
  );
};
const deleteItem  =(todoItemName)=>{
const newTodoItems=todoItems.filter((item)=>item.name!==todoItemName);
settodoItems(newTodoItems);
};

  return <> 
<TodoItemsContext.Provider value={{
 todoItems,
  addNewItem,
  deleteItem,

}}>
  <center><AppName></AppName></center>
 


  <center className="todo">
 
  
  <AddTodo ></AddTodo>
    <Error></Error>
  <TodoItems ></TodoItems>
  

</center>

</TodoItemsContext.Provider>
</>
}
export default App;
