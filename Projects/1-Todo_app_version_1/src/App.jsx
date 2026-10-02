
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import "./App.css"
function App() {
  return  <center className="todo">
 <AppName></AppName>
  <div className="conteiner">
  <AddTodo ></AddTodo>
  <div className="item">
  <TodoItem1></TodoItem1>
 <TodoItem2></TodoItem2>
</div>
</div>
</center>
}
export default App
