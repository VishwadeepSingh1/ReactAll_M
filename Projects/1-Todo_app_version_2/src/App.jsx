
import AppName from "./components/AppItem"
import AddTodo from "./components/AddTodo"
// import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import "./App.css"
function App() {
const todoItems=[{
  name:"Buy-Milk",
  dueDate:"04/10/2023",
},
{
  name:"Go-To-College",
  dueDate:"04/10/2026",
},
];

  return <> 
  <center><AppName></AppName></center>
  <center className="todo">
 
  
  <AddTodo ></AddTodo>
  <TodoItems todoItems={todoItems}></TodoItems>
  

</center>
</>
}
export default App
