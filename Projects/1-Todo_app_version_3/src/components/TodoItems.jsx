import css from "./TodoItems.module.css"
import TodoItem from "./TodoItem";
const TodoItems=({addVal})=>{
    return <>
    <div className={css.item}>
      {addVal.map((item1)=>(<TodoItem todoName={item1.name} todo_date={item1.dueDate}></TodoItem>))}
 
 </div>
 </>
}
export default TodoItems;