function TodoItem2(){
     let todoName="Go To College"
    let todo_date=4/12/2026
return <div className="row">
    <div className="col-6">
     {todoName}
    </div>
    <div className="col-4">
      
   4/12/2026
    </div>
    <div className="col-2">
     <button type="button" className="btn btn-danger kg_button">Delete</button>
    </div>
  </div>
}
export default TodoItem2;