function TodoItem({todoName,todo_date}){
    return <>
    
    <div className="row">
    <div className="col-6">
     {todoName}
    </div>
    <div className="col-4">
      
    {todo_date}
    </div>
    <div className="col-2">
     <button type="button" className="btn btn-danger kg_button">Delete</button>
    </div>
  </div>
  
  </>
}
export default  TodoItem;