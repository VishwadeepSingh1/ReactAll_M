import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../Store/Index";

 const Controls=()=>{
const dispatch=useDispatch();

const inputElement=useRef()
const handelincrement=()=>{
   dispatch (counterActions.increment());
  
}
const handeldecrementt=()=>{
    
    dispatch(counterActions.decrement());
}
const handelADD=()=>{
    dispatch(counterActions.add({num:inputElement.current.value,
    }))
     
inputElement.current.value=" ";
}

const handelSUB=()=>{
    dispatch(counterActions.Sub({num:inputElement.current.value,
    }))
inputElement.current.value=" ";
}
const handelPRIVACY=()=>{
     dispatch({type:'PRIVACY'
});

}

    return <><button type="button"className="btn btn-primary"  style={{margin:"5px"}}  onClick={handelincrement}>+1</button>

<button type="button"className="btn btn-success" onClick={handeldecrementt}  style={{margin:"5px"}}>-1</button>
<button type="button"className="btn btn-warning" onClick={handelPRIVACY} >Privacy Toggle</button>
<div>
    <input type="number" placeholder="ENTER NUMBER" ref={inputElement} className="number-input"/>
<button type="button"className="btn btn-info" style={{margin:"5px"}} onClick={handelADD} >ADD</button>



<button type="button"className="btn btn-danger" style={{margin:"5px"}} onClick={handelSUB} >SUB</button>
</div>


</> 
}
export default Controls;