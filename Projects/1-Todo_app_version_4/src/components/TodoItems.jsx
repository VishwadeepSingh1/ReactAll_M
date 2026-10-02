import css from "./TodoItems.module.css"
import TodoItem from "./TodoItem";
const TodoItems=({todoItems,onDeleteClick})=>{
    return <>
    <div className={css.item}>
      {todoItems.map((item1)=>(<TodoItem 
      key={item1}
      todoName={item1.name} todo_date={item1.dueDate} onDeleteClick={onDeleteClick}></TodoItem>))}
 
 </div>
 </>
}
export default TodoItems;